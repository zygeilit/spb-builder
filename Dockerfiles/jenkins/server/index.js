
var path = require('path')
var fs = require('fs')

// 接受的参数
var args = process.argv.slice(2)

// 提交的项目代码路径
var workdir = args[0]
console.log(`项目代码路径: ${workdir}`)

var builderJsonPath = `${workdir}/.builder.json`
var builderJsonContentString = fs.readFileSync(builderJsonPath, 'utf-8')

var builderJson = JSON.parse(builderJsonContentString)

// docs
if (builderJson.doc) {
  var docConfig = builderJson.doc
  if (docConfig['document-type'] === 'markdown') {

    // 根据doc的路径配置，找到文档文件读取文档内容
    var mainDocContentString = fs.readFileSync(`${workdir}/${docConfig.paths.main}`, 'utf-8')
    console.log(mainDocContentString)

    var demoContentString = fs.readFileSync(`${workdir}/${docConfig.paths.demo}`, 'utf-8')
    console.log(demoContentString)
  }
}
