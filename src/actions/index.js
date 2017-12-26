let fs = require('fs')
let path = require('path')
let templateFormatter = require('string-template')

// 获取组件的基础模版，用于输出生成文件
let actionStringTemplate = fs.readFileSync(path.join(__dirname, 'template.js'), 'utf8')

exports.processor = function (actionsConfig, initSetting) {
  let actionsFolderPath = `${initSetting.rootPath}/${initSetting.actionsFolder}`

  // 创建组件目录
  if (!fs.existsSync(actionsFolderPath)) {
    fs.mkdirSync(actionsFolderPath)
  }

  // 循环配置，创建对应的js文件
  actionsConfig.forEach(action => {
    let { type = '', accessModifier = [], inputs = [], outputs = [], modifiedProps = [], tests = [] } = action

    // 写组件文件
    fs.writeFile(
      `${actionsFolderPath}/${type}.js`,

      templateFormatter('{type}', action),

      function (err) {
        if (err) {
          return console.log(err)
        }
        console.log("The file was saved!")
      }
    )
  })
}
