# component-project-builder
前端组件模块化开发的标准执行方案

### .builder.js
> 前端组件模块的实现标准化的manifest文件

> 类似于package.json, 是模块的描述，不同点是package.json用于解决模块的版本依赖管理，.builder.js更侧重于描述组件模块的开发实现细节

> 通过 .builder.js，使用命令的方式创建前端项目标准项目，比如：

*   1. 创建目录结构，文件

*   2. 创建对象之间的依赖引用关系

*   3. 通过 .builder.js 可实现用命令的方式执行标准化功能，比如：

*      a. 通过 core + .builder.js 对版本的破坏性更新的扫描的报警, 见 .builder.js 中的 ‘dependencies’ 描述
