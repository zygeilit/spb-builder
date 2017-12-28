
{
  "title": "两列布局组件",

  "description": ["两列布局组件，提供了两个站位嘈", "左侧是主内容显示区域，右侧是相关信息区域"],

  "type": "main-right-layout",

  "themes": [{
    "type": "base"
  }, {
    "type": "noBorder",
    "description": ["组件可切换的主题，在Tab组件内部可使用"]
  }],

  /**
  * 注册当前模块依赖了哪些其他模块
  * 较 package.json 不同的是，这里的注册更为细节
  * 旨在解决，组件模块产生依赖时，版本升级后不兼容更新的异常自动化捕获（代码扫描）
  * ---
  * 命令行的方式创建依赖关系，包括：
  * 1. package.json 中动态的加入包的依赖以及版本号，并 npm install
  * 2. 通过 builder.json 中的 dependencies 描述，动态的把外部模块的 json描述 复制到当前模块下，以保存当前所依赖组件的视线细节，比如：
  *    a. 使用了哪些API，以及方法签名
  *    b. 重写了哪些API，以及方法签名
  * ---
  * 需要对依赖的组件模块进行大版本升级时，需要调用命令的方式进行版本升级，命令执行流程：
  *    a. 自动更新 package.json 中的组件版本信息
  *    b. 获取组件模块新版本中的 builder.json 描述
  *    c. 取出之前保存下的上一个依赖版本的 builder.json 描述，进行扫描比对
  *    d. 对扫描结果进行分类，对比结果提供两种不同类型的异常
  *       1. 破坏性更新
  *       2. 可能会产生问题的不兼容警告
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
