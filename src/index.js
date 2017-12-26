var fs = require('fs')
var path = require('path')
var componentsProcessor = require('./components/index')

var root = path.join(__dirname, '../')
var builderConfig = JSON.parse(fs.readFileSync(`${root}.builder.json`, 'utf8'))

var initSetting = {
  'rootPath': './',
  'componentsFolder': 'components'
}

componentsProcessor.processor(builderConfig.components, initSetting)

