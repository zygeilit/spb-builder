{
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
      "usage": "docs.md",
      "demo": "demo.js"
    },

    // 文档类型，用于server端处理
    "document-type": "markdown" // jsdoc, txt
  }
}
