let fs = require('fs')
let path = require('path')
let templateFormatter = require('mustache')

// 获取组件的基础模版，用于输出生成文件
let actionStringTemplate = fs.readFileSync(path.join(__dirname, 'template.js'), 'utf8')

// 根目录
let actionsFolderPath = ''

exports.processor = function (actionsConfig, initSetting) {
  actionsFolderPath = `${initSetting.rootPath}/${initSetting.actionsFolder}`

  // 创建组件目录
  if (!fs.existsSync(actionsFolderPath)) {
    fs.mkdirSync(actionsFolderPath)
  }

  // 循环配置，创建对应的js文件
  actionsConfig.forEach(action => {
    let { type = '', accessModifier = {}, inputs = [], outputs = [], modifiedProps = [], tests = [] } = action

    let actionFilePath = `${actionsFolderPath}/${type}.js`

    // action 如果是私有的，则添加指定前缀
    if (accessModifier.private) {
      actionFilePath = `${getPrivateFolder()}/${type}.js`
    }

    // action 如果是私有的，则添加指定前缀
    if (accessModifier.eventFlow) {
      actionFilePath = `${getEventFLowFolder()}/${type}.js`
    }

    // 写组件文件
    fs.writeFile(
      actionFilePath,
      templateFormatter.render(actionStringTemplate, action),
      function (err) {
        if (err) {
          return console.log(err)
        }
        console.log(`The file '${type}' was saved!`)
      }
    )
  })
}

function getPrivateFolder () {
  let privateFolderPath = `${actionsFolderPath}/private`
  if (!fs.existsSync(privateFolderPath)) {
    fs.mkdirSync(privateFolderPath)
  }
  return privateFolderPath
}

function getEventFLowFolder () {
  let eventFlowFolderPath = `${actionsFolderPath}/event-flows`
  if (!fs.existsSync(eventFlowFolderPath)) {
    fs.mkdirSync(eventFlowFolderPath)
  }
  return eventFlowFolderPath
}
