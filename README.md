
# component-project-builder

前端组件标准化方案，目前是一套设计方案，还未开始实现

拥抱变化和未知的设计思路，在builder中提供了很好的功能插拔机制，任何新的功能都可以快速添加

builder提共了三大块功能实现：
* 描述对象（.builder.json）：模块内部细节的JOSN格式的元数据描述
* 功能命令集（.builder.cli）：
* 服务端WebHook（.builder.server）：解析.builder.json执行标准化的功能

### .builder.json
简单的理解标准化的实现，其实就是一个描述模块必要细节的JSON结构数据：".builder.json"

前端组件模块的实现标准化的manifest文件，描述了所有的设计细节

借鉴 package.json + Node 实现模块标准化的思路，对于 .builder.js 和 package.json 不同点在前者用于解决模块的版本依赖管理，后者更侧重于描述组件模块的开发实现细节

### .builder.cli
基于 .builder.js 的命令集模块，可实现自动化功能，减少开发工作量，减少异常
* 通过 builder.cli 根据 .builder.js 中的配置自动创建目录、目录内文件、以文件之间及依赖关系
* 通过 builder.cli 根据 .builder.js 中的模块依赖的配置（eg: "extends"），升级依赖模块时自动扫描不兼容更新异常，并报警

#### builder.cli 设计图：
![images](/builder.png "设计思路")

### .builder.server
根据 .builder.js 提供的描述，针对于前端组件开发问题，提供标准化化方案，如：

* 通过 .builder.js 可实现用命令的方式执行标准化功能，比如：
  * 通过 core + .builder.js 对版本的破坏性更新的扫描的报警, 见 .builder.js 中的 ‘dependencies’ 描述

#### .builer.server 设计图：
![images](/githooks.png "服务端标准化")


### 下一步要解决问题：
* 自动创建 .builder.js 的工具和模版
* 打磨 .builder.js 的细节
* .builder.js 文件本身的版本号问题
* CSS扩展以及使用的标准方式

### 知识
https://developer.atlassian.com/blog/2015/11/scripting-with-node/

https://github.com/tj/commander.js
