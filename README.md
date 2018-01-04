
前端组件标准化方案
===============

### 初心
为实现Paas平台组件生态圈

组件标准化方案即组件开发中所遵循的约定和流程，使组件可以发布到平台，并可以安全，方便的提供给其他独立开发者以及平台使用

### 简介
**目前是一套设计方案，还未开始实现**

标准化方案中定义了三个模块：
* .builder.json：描述模块内部细节的JOSN格式的元数据描述
* .builder.cli：在标准化项目本地可执行的命令工具模块
* .builder.server：在服务端Push之后，基于.builder.json执行操作的模块

### .builder.json
* 描述模块实现细节的JSON结构数据
* 前端组件模块实现标准化的manifest文件
* 借鉴 package.json 实现标准化的设计思想，区别是前者用于解决模块的版本依赖管理，后者更侧重于描述组件模块的开发实现细节

### .builder.cli
通过解析 .builder.json，可实现从创建到监测的一体化流程，减少开发工作量，减少异常

* 基于 .builder.json 中的配置自动创建目录、目录内文件、以文件之间及依赖关系
* 基于 .builder.json 中的 "extends" 配置，升级依赖模块时自动扫描更新异常，并报警

#### builder.cli 设计图：
![images](/builder.png "设计思路")

### .builder.server
通过WebHook，在Push结束之后，提取.builder.json文件，通过内部的模块细节的描述执行一系列的操作，例如：在push之后通过.builder.json中的“docs”描述，提取项目中的文档，更新到统一文档站点上，在该站点上可以看到公司内部所有模块的文档以及可使用的搜索功能

#### .builer.server 设计图：
![images](/githooks.png "服务端标准化")

### 优势
* cli和server都围绕着.builder.json实现，让标准化功能的实现更具可扩展性
* 使用者可根据具体场景编写.builder.json中的描述实现标准化功能，未被描述的标准化功能不会被执行，让使用者更具选择性
* 只需要在项目中添加.builder.json, 引入cli模块，在jenkins中添加server，即可实现标准化，可以让搭建标准化更为方便
* 对于builder的核心是：.builder.json；这是拥抱变化和未知的设计方式，让添加新特性和重构新特性时更方便
* 拥抱变化和未知的设计思路，在builder中提供了很好的功能插拔机制，任何新的功能都可以快速添加
