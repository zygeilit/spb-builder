
前端组件标准化方案，目前是一套设计方案，还未开始实现

拥抱变化和未知的设计思路，在builder中提供了很好的功能插拔机制，任何新的功能都可以快速添加

builder提供了三大块模块：
* 项目细节的描述（.builder.json）：描述模块内部细节的JOSN格式的元数据描述
* 项目本地命令集（.builder.cli）：在标准化项目本地可执行的命令工具模块
* 服务端WebHook（.builder.server）：在服务端Push之后，基于.builder.json执行操作的模块

### .builder.json
简单的理解标准化的实现，其实就是一个描述模块必要细节的JSON结构数据：".builder.json"

前端组件模块的实现标准化的manifest文件，描述了所有的设计细节

借鉴 package.json 实现标准化的思路，对于.builder.json和package.json不同点，前者用于解决模块的版本依赖管理，后者更侧重于描述组件模块的开发实现细节

### .builder.cli
* 基于 .builder.js 的命令集模块，可实现自动化功能，减少开发工作量，减少异常
* 通过 builder.cli 根据 .builder.json 中的配置自动创建目录、目录内文件、以文件之间及依赖关系
* 通过 builder.cli 根据 .builder.json 中的模块依赖的配置（eg: "extends"），升级依赖模块时自动扫描不兼容更新异常，并报警

#### builder.cli 设计图：
![images](/builder.png "设计思路")

### .builder.server
通过WebHook，在Push结束之后，提取.builder.json文件，通过内部的模块细节的描述执行一系列的操作，例如：在push之后通过.builder.json中的“docs”描述，提取项目中的文档，更新到统一文档站点上，在该站点上可以看到公司内部所有模块的文档以及可使用的搜索功能

#### .builer.server 设计图：
![images](/githooks.png "服务端标准化")

### 总结
* cli和server都围绕着.builder.json实现，让标准化功能的实现更具可扩展性

* 使用者可根据具体场景编写.builder.json中的描述实现标准化功能，未被描述的标准化功能不会被执行，让使用者更具选择性

* 只需要在项目中添加.builder.json, 引入cli模块，在jenkins中添加server，即可实现标准化，可以让搭建标准化更为方便

* 对于builder的核心是：.builder.json；这是拥抱变化和未知的设计方式，让添加新特性和重构新特性时更方便

### 下一步要解决问题：
* 自动创建 .builder.js 的工具和模版
* 打磨 .builder.js 的细节
* .builder.js 文件本身的版本号问题
* CSS扩展以及使用的标准方式

### 知识
基于package.json中的bin实现命令注入的文档
> https://developer.atlassian.com/blog/2015/11/scripting-with-node/

> https://github.com/tj/commander.js
