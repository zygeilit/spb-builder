var fs = require('fs')
var path = require('path')

var componentsProcessor = require('./components/index')
var actionsProcessor = require('./actions/index')
var testsProcessor = require('./tests/index')

var root = path.join(__dirname, '../')
var builderConfig = JSON.parse(fs.readFileSync(`${root}.builder.json`, 'utf8'))

var initSetting = {
  'rootPath': './demo',
  'componentsFolder': 'components',
  'actionsFolder': 'actions',
  'testsFolder': 'tests'
}

componentsProcessor.processor(builderConfig.components, initSetting)
actionsProcessor.processor(builderConfig.actions, initSetting)
testsProcessor.processor(builderConfig.tests, initSetting)

