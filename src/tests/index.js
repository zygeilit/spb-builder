let fs = require('fs')
let path = require('path')
let templateFormatter = require('mustache')

// 获取组件的基础模版，用于输出生成文件
let testStringTemplate = fs.readFileSync(path.join(__dirname, 'template.js'), 'utf8')

// 根目录
let testsFolderPath = ''

exports.processor = function (testsConfig, initSetting) {
  testsFolderPath = `${initSetting.rootPath}/${initSetting.testsFolder}`

  // 创建组件目录
  if (!fs.existsSync(testsFolderPath)) {
    fs.mkdirSync(testsFolderPath)
  }

  // 循环配置，创建对应的js文件
  testsConfig.forEach(test => {
    let { type = '', targets = {} } = test
    let { actions = [] } = targets

    // 写组件文件
    fs.writeFile(
      `${testsFolderPath}/${type}.js`,
      templateFormatter.render(testStringTemplate, test),
      function (err) {
        if (err) {
          return console.log(err)
        }
        console.log(`The file '${type}' was saved!`)
      }
    )
  })
}
