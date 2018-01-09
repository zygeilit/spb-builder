
var path = require('path')
var fs = require('fs')

var builderJsonPath = path.join(__dirname, '.builder.json')
var builderJsonContentString = fs.readFileSync(builderJsonPath, 'utf-8')

var builderJson = JSON.parse(builderJsonContentString)

// docs
if (builderJson.doc) {
  var docConfig = builderJson.doc
  if (docConfig['document-type'] === 'markdown') {

    // 根据doc的路径配置，找到文档文件读取文档内容
    var mainDocContentString = fs.readFileSync(path.join(__dirname, docConfig.paths.main), 'utf-8')
    console.log(mainDocContentString)

    var demoContentString = fs.readFileSync(path.join(__dirname, docConfig.paths.demo), 'utf-8')
    console.log(demoContentString)
  }
}
