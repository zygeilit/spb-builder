# component-project-builder

前端组件模块化开发的标准执行方案，是一套设计思想和实现方案

不只是为了解决目前出现的前端开发问题，而是一套拥抱变化和未知，即：.builder.js，所有已知或未知的前端标准化功能，都可以根据 .builder.js 实现，只需要在 .core.sh 中加入实现标准化的功能命令

![images](/builder.png "设计思路")

### .builder.js
前端组件模块的实现标准化的manifest文件，描述了所有的设计细节，

借鉴 package.json + Node 实现模块标准化的思路，对于 .builder.js 和 package.json 不同点在前者用于解决模块的版本依赖管理，后者更侧重于描述组件模块的开发实现细节

### .builder.sh
使用 .builder.js 用命令的方式创建前端项目标准项目，如：

* 创建文件以及目录结构
* 创建对象以及文件之间的依赖引用关系

### .core.sh
根据 .builder.js 提供的描述，针对于前端组件开发问题，提供标准化化方案，如：

* 通过 .builder.js 可实现用命令的方式执行标准化功能，比如：
  * 通过 core + .builder.js 对版本的破坏性更新的扫描的报警, 见 .builder.js 中的 ‘dependencies’ 描述
