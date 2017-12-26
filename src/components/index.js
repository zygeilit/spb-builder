let fs = require('fs')
let path = require('path')
let templateFormatter = require('mustache')

// 获取组件的基础模版，用于输出生成文件
let componentStringTemplate = fs.readFileSync(path.join(__dirname, 'template.js'), 'utf8')

exports.processor = function (componentsConfig, initSetting) {
  let componentsFolderPath = `${initSetting.rootPath}/${initSetting.componentsFolder}`

  // 创建组件目录
  if (!fs.existsSync(componentsFolderPath)) {
    fs.mkdirSync(componentsFolderPath)
  }

  // 循环配置，创建对应的js文件
  componentsConfig.forEach(component => {
    let { type = '', props = [], slots = [], events = [] } = component

    // 写组件文件
    fs.writeFile(
      `${componentsFolderPath}/${type}.vue`,
      templateFormatter.render(componentStringTemplate, component),
      function (err) {
        if (err) {
          return console.log(err)
        }
        console.log(`The file '${type}' was saved!`)
      }
    )
  })
}
