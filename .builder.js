
{
  "type": "main-right-layout",


  /**
  * 配置文档类型，目前提供两种类型的文档策略
  * ---
  * type:
  *   component: 组件类型文档，会默认提取文档内容更新到组件文档集合中
  *   tutorial: 类似于公司技术入门介绍引导，让新人快了解公司内部技术栈的教程
  * ---
  * main: 模块内的文档从那个目录中提取
  * ---
  * document-type: 文档类型，标示编写文档用的语言或扩展名
  */
  "docs": {
    "type": "component", // "tutorial"

    "title": "两列布局组件",
    "description": ["两列布局组件，提供了两个站位嘈", "左侧是主内容显示区域，右侧是相关信息区域"],

    /**
    * 配置不同文档的路径
    * usage: 模块或组件的基础使用文档
    * dome: 事例
    */
    "paths": {
      "usage": "/src/docs.md",
      "demo": "/src/demo.js"
    },

    // 文档类型，用于server端处理
    "document-type": "markdown" // jsdoc, txt
  },

  /**
  * 注册当前模块依赖的其他标准模块(带有.builder.js的项目)
  * 较package.json的描述，不同的是：.builder.js的注册方式更为细节，描述组件模块具体的实现细节
  * 旨在解决，组件模块产生依赖时，版本升级后不兼容更新的异常自动化捕获（代码扫描）
  * ---
  * 命令行的方式创建依赖关系，包括：
  * 1. package.json 中动态的加入包的依赖以及版本号，并 npm install
  * 2. 通过 .builder.js 中的 dependencies 描述，把外部模块中 .builder.js 的部分依赖细节描述，快照保存到当前模块下，如：
  *    a. 使用了哪些API，以及方法签名
  *    b. 重写了哪些API，以及方法签名
  * ---
  * 对依赖的组件模块进行大版本升级时，需要调用命令的方式进行升级，执行流程：
  *    a. 自动更新 package.json 中的组件版本信息
  *    b. 获取组件模块新版本中的 .builder.js 描述
  *    c. 取出之前保存的快照，进行扫描比对
  *    d. 对扫描结果进行分类，对比结果提供两种不同类型的异常
  *       1. 破坏性更新
  *       2. 可能会产生问题的不兼容警告
  *    e. 对开发者提暴露问题代码，供修改建议
  */
  "dependencies": {

    "base-layout": {
      /** 注册应用base-layout组件时，使用了的功能 */
      "dependencies": {
        "actions": ["foldingContainer"],
        "components": ["BaseLayout"]    
      },

      /** 注册应用base-layout组件时，扩展的功能 */
      "extends": {
        "actions": ["foldingContainer"]
      }
    }
  },

  "themes": [{
    "type": "base"
  }, {
    "type": "noBorder",
    "description": ["组件可切换的主题，在Tab组件内部可使用"]
  }],

  "components": [{

    "type": "Layout",

    "props": [{
      "type": "Number",
      "name": "mainPadding",
      "default": 15
    }, {
      "type": "Boolean",
      "name": "canFolding",
      "default": true
    }, {
      "type": "Boolean",
      "name": "isClosed",
      "default": false
    }, {
      "type": "Object",
      "name": "mainContainer",
      "default": {
        "width": {
          "type": "Percentage",
          "value": 65
        },
        "backgroundColor": {
          "type": "Color",
          "value": "red"
        }
      }
    }],

    "slots": [{
      "name": "main"
    }, {
      "name": "right"
    }],

    "events": [{
      "type": "onFolding",
      "description": ["组件折叠的时候抛出的事件"],

      "triggerOn": {
        "mountd": true,
        "eventHandler": true,
        "created": true
      },

      "arguments": [{
        "type": "Boolean",
        "name": "isClosed",
        "default": false
      }]
    }]
  }],

  "actions": [{
    "type": "closeMainContainer",

    "description": ["关闭主内容区域的功能实现函数"],

    "accessModifier": {
      "private": true,
      "public": false,
      "eventFlow": false
    },

    "inputs": [{
      "type": "Percentage",
      "name": "width",
      "required": true,
      "default": 65
    }],

    "outputs": [{
      "name": "containerWidth"
    }],

    "modifiedProps": ["isClosed", "mainContainer"],

    "tests": ["paramsTypeTest"]
  }],

  "tests": [{
    "type": "paramsTypeTest",
    "description": "测试Action参数是否符合规则",
    "targets": {
      "actions": ["closeMainContainer"]
    }
  }, {
    "type": "outputsTest"
  }, {
    "type": "onFoldingTest"
  }]
}
