
# component-project-builder

前端组件标准化方案，目前是一套设计方案，还未开始实现

标准化可将功能分层，分为私有功能和标准化功能

不只是为了解决目前出现的前端开发问题，而是一套拥抱变化和未知，即：.builder.js，所有已知或未知的前端标准化功能，都可以根据 .builder.js 实现，只需要在 .core.sh 中加入实现标准化的功能命令

简单的理解标准化的实现，其实就是一个描述模块必要细节的JSON结构数据：".builder.js"

### builder.cli
基于 .builder.js 的命令集模块，可实现自动化功能，减少开发工作量，减少异常
* 通过 builder.cli 根据 .builder.js 中的配置自动创建目录、目录内文件、以文件之间及依赖关系
* 通过 builder.cli 根据 .builder.js 中的模块依赖的配置（eg: "extends"），升级依赖模块时自动扫描不兼容更新异常，并报警

#### builder.cli 设计图
![images](/builder.png "设计思路")

### 服务端实现
通过Webhooks实现服务端的标准话功能
![images](/githooks.png "服务端标准化")

### .builder.js
前端组件模块的实现标准化的manifest文件，描述了所有的设计细节，

借鉴 package.json + Node 实现模块标准化的思路，对于 .builder.js 和 package.json 不同点在前者用于解决模块的版本依赖管理，后者更侧重于描述组件模块的开发实现细节

### .creator.sh
使用 .builder.js 用命令的方式创建前端项目标准项目，如：

* 创建文件以及目录结构
* 创建对象以及文件之间的依赖引用关系

### .core.sh
根据 .builder.js 提供的描述，针对于前端组件开发问题，提供标准化化方案，如：

* 通过 .builder.js 可实现用命令的方式执行标准化功能，比如：
  * 通过 core + .builder.js 对版本的破坏性更新的扫描的报警, 见 .builder.js 中的 ‘dependencies’ 描述

### 下一步要解决问题：
* 自动创建 .builder.js 的工具和模版
* 打磨 .builder.js 的细节
* .builder.js 文件本身的版本号问题
* CSS扩展以及使用的标准方式

### 知识
https://developer.atlassian.com/blog/2015/11/scripting-with-node/

https://github.com/tj/commander.js
