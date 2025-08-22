const n=`---\r
title: vue入门\r
top: 110\r
date: 2024-01-15\r
mdimg: https://tu.tianmen15qwq.dpdns.org/file/4a6d1a19070b86ca08f28.jpg\r
---\r
# 1. Vue3简介\r
- 2020年9月18日，\`Vue.js\`发布版\`3.0\`版本，代号：\`One Piece\`（n\r
- 经历了：[4800+次提交](https://github.com/vuejs/core/commits/main)、[40+个RFC](https://github.com/vuejs/rfcs/tree/master/active-rfcs)、[600+次PR](https://github.com/vuejs/vue-next/pulls?q=is%3Apr+is%3Amerged+-author%3Aapp%2Fdependabot-preview+)、[300+贡献者](https://github.com/vuejs/core/graphs/contributors)\r
- 官方发版地址：[Release v3.0.0 One Piece · vuejs/core](https://github.com/vuejs/core/releases/tag/v3.0.0)\r
- 截止2023年10月，最新的公开版本为：\`3.3.4\`\r
\r
  <img src="images/1695089947298-161c1b47-eb86-42fb-b1f8-d6a4fcab8ee2.png" alt="image.png" style="zoom:30%;" /> \r
\r
## 1.1. 【性能的提升】\r
\r
- 打包大小减少\`41%\`。\r
\r
- 初次渲染快\`55%\`, 更新渲染快\`133%\`。\r
\r
- 内存减少\`54%\`。\r
\r
  \r
## 1.2.【 源码的升级】\r
\r
- 使用\`Proxy\`代替\`defineProperty\`实现响应式。\r
\r
- 重写虚拟\`DOM\`的实现和\`Tree-Shaking\`。\r
\r
  \r
## 1.3. 【拥抱TypeScript】\r
\r
- \`Vue3\`可以更好的支持\`TypeScript\`。\r
\r
  \r
## 1.4. 【新的特性】\r
\r
1. \`Composition API\`（组合\`API\`）：\r
   - \`setup\`\r
   - \`ref\`与\`reactive\`\r
   - \`computed\`与\`watch\`\r
   \r
     ......\r
   \r
2. 新的内置组件：\r
   - \`Fragment\`\r
   - \`Teleport\`\r
   - \`Suspense\`\r
\r
     ......\r
\r
3. 其他改变：\r
   - 新的生命周期钩子\r
   - \`data\` 选项应始终被声明为一个函数\r
   - 移除\`keyCode\`支持作为\` v-on\` 的修饰符\r
\r
     ......\r
\r
\r
\r
# 2. 创建Vue3工程\r
\r
## 2.1. 【基于 vue-cli 创建】\r
点击查看[官方文档](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)\r
\r
> 备注：目前\`vue-cli\`已处于维护模式，官方推荐基于 \`Vite\` 创建项目。\r
\r
\`\`\`powershell\r
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上\r
vue --version\r
\r
## 安装或者升级你的@vue/cli \r
npm install -g @vue/cli\r
\r
## 执行创建命令\r
vue create vue_test\r
\r
##  随后选择3.x\r
##  Choose a version of Vue.js that you want to start the project with (Use arrow keys)\r
##  > 3.x\r
##    2.x\r
\r
## 启动\r
cd vue_test\r
npm run serve\r
\`\`\`\r
\r
---\r
\r
## 2.2. 【基于 vite 创建】(推荐)\r
\`vite\` 是新一代前端构建工具，官网地址：[https://vitejs.cn](https://vitejs.cn/)，\`vite\`的优势如下：\r
\r
- 轻量快速的热重载（\`HMR\`），能实现极速的服务启动。\r
- 对 \`TypeScript\`、\`JSX\`、\`CSS\` 等支持开箱即用。\r
- 真正的按需编译，不再等待整个应用编译完成。\r
- \`webpack\`构建 与 \`vite\`构建对比图如下：\r
<img src="images/1683167182037-71c78210-8217-4e7d-9a83-e463035efbbe.png" alt="webpack构建" title="webpack构建" style="zoom:20%;box-shadow:0 0 10px black" />	<img src="images/1683167204081-582dc237-72bc-499e-9589-2cdfd452e62f.png" alt="vite构建" title="vite构建" style="zoom: 20%;box-shadow:0 0 10px black" />\r
* 具体操作如下（点击查看[官方文档](https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application)）\r
\r
\`\`\`powershell\r
## 1.创建命令\r
npm create vue@latest\r
\r
## 2.具体配置\r
## 配置项目名称\r
√ Project name: vue3_test\r
## 是否添加TypeScript支持\r
√ Add TypeScript?  Yes\r
## 是否添加JSX支持\r
√ Add JSX Support?  No\r
## 是否添加路由环境\r
√ Add Vue Router for Single Page Application development?  No\r
## 是否添加pinia环境\r
√ Add Pinia for state management?  No\r
## 是否添加单元测试\r
√ Add Vitest for Unit Testing?  No\r
## 是否添加端到端测试方案\r
√ Add an End-to-End Testing Solution? » No\r
## 是否添加ESLint语法检查\r
√ Add ESLint for code quality?  Yes\r
## 是否添加Prettiert代码格式化\r
√ Add Prettier for code formatting?  No\r
\`\`\`\r
自己动手编写一个App组件\r
\r
\`\`\`vue\r
<template>\r
  <div class="app">\r
    <h1>你好啊！</h1>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  export default {\r
    name:'App' //组件名\r
  }\r
<\/script>\r
\r
<style>\r
  .app {\r
    background-color: #ddd;\r
    box-shadow: 0 0 10px;\r
    border-radius: 10px;\r
    padding: 20px;\r
  }\r
</style>\r
\`\`\`\r
\r
安装官方推荐的\`vscode\`插件：\r
\r
<img src="images/volar.png" alt="Snipaste_2023-10-08_20-46-34" style="zoom:50%;" /> \r
\r
<img src="images/image-20231218085906380.png" alt="image-20231218085906380" style="zoom:42%;" /> \r
\r
总结：\r
\r
- \`Vite\` 项目中，\`index.html\` 是项目的入口文件，在项目最外层。\r
- 加载\`index.html\`后，\`Vite\` 解析 \`<script type="module" src="xxx">\` 指向的\`JavaScript\`。\r
- \`Vue3\`**中是通过 **\`createApp\` 函数创建一个应用实例。\r
## 2.3. 【一个简单的效果】\r
\r
\`Vue3\`向下兼容\`Vue2\`语法，且\`Vue3\`中的模板中可以没有根标签\r
\r
\`\`\`vue\r
<template>\r
  <div class="person">\r
    <h2>姓名：{{name}}</h2>\r
    <h2>年龄：{{age}}</h2>\r
    <button @click="changeName">修改名字</button>\r
    <button @click="changeAge">年龄+1</button>\r
    <button @click="showTel">点我查看联系方式</button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  export default {\r
    name:'App',\r
    data() {\r
      return {\r
        name:'张三',\r
        age:18,\r
        tel:'13888888888'\r
      }\r
    },\r
    methods:{\r
      changeName(){\r
        this.name = 'zhang-san'\r
      },\r
      changeAge(){\r
        this.age += 1\r
      },\r
      showTel(){\r
        alert(this.tel)\r
      }\r
    },\r
  }\r
<\/script>\r
\`\`\`\r
\r
\r
# 3. Vue3核心语法\r
## 3.1.  【OptionsAPI 与 CompositionAPI】\r
\r
- \`Vue2\`的\`API\`设计是\`Options\`（配置）风格的。\r
- \`Vue3\`的\`API\`设计是\`Composition\`（组合）风格的。\r
###  Options API 的弊端\r
\r
\`Options\`类型的 \`API\`，数据、方法、计算属性等，是分散在：\`data\`、\`methods\`、\`computed\`中的，若想新增或者修改一个需求，就需要分别修改：\`data\`、\`methods\`、\`computed\`，不便于维护和复用。\r
\r
<img src="images/1696662197101-55d2b251-f6e5-47f4-b3f1-d8531bbf9279.gif" alt="1.gif" style="zoom:70%;border-radius:20px" /><img src="images/1696662200734-1bad8249-d7a2-423e-a3c3-ab4c110628be.gif" alt="2.gif" style="zoom:70%;border-radius:20px" />\r
\r
### Composition API 的优势\r
\r
可以用函数的方式，更加优雅的组织代码，让相关功能的代码更加有序的组织在一起。\r
\r
<img src="images/1696662249851-db6403a1-acb5-481a-88e0-e1e34d2ef53a.gif" alt="3.gif" style="height:300px;border-radius:10px"  /><img src="images/1696662256560-7239b9f9-a770-43c1-9386-6cc12ef1e9c0.gif" alt="4.gif" style="height:300px;border-radius:10px"  />\r
\r
> 说明：以上四张动图原创作者：大帅老猿\r
\r
## 3.2. 【拉开序幕的 setup】\r
### setup 概述\r
\`setup\`是\`Vue3\`中一个新的配置项，值是一个函数，它是 \`Composition API\` **“表演的舞台**_**”**_，组件中所用到的：数据、方法、计算属性、监视......等等，均配置在\`setup\`中。\r
\r
特点如下：\r
\r
- \`setup\`函数返回的对象中的内容，可直接在模板中使用。\r
- \`setup\`中访问\`this\`是\`undefined\`。\r
- \`setup\`函数会在\`beforeCreate\`之前调用，它是“领先”所有钩子执行的。\r
\`\`\`vue\r
<template>\r
  <div class="person">\r
    <h2>姓名：{{name}}</h2>\r
    <h2>年龄：{{age}}</h2>\r
    <button @click="changeName">修改名字</button>\r
    <button @click="changeAge">年龄+1</button>\r
    <button @click="showTel">点我查看联系方式</button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  export default {\r
    name:'Person',\r
    setup(){\r
      // 数据，原来写在data中（注意：此时的name、age、tel数据都不是响应式数据）\r
      let name = '张三'\r
      let age = 18\r
      let tel = '13888888888'\r
\r
      // 方法，原来写在methods中\r
      function changeName(){\r
        name = 'zhang-san' //注意：此时这么修改name页面是不变化的\r
        console.log(name)\r
      }\r
      function changeAge(){\r
        age += 1 //注意：此时这么修改age页面是不变化的\r
        console.log(age)\r
      }\r
      function showTel(){\r
        alert(tel)\r
      }\r
\r
      // 返回一个对象，对象中的内容，模板中可以直接使用\r
      return {name,age,tel,changeName,changeAge,showTel}\r
    }\r
  }\r
<\/script>\r
\`\`\`\r
### setup 的返回值\r
\r
- 若返回一个**对象**：则对象中的：属性、方法等，在模板中均可以直接使用**（重点关注）。**\r
- 若返回一个**函数**：则可以自定义渲染内容，代码如下：\r
\`\`\`jsx\r
setup(){\r
  return ()=> '你好啊！'\r
}\r
\`\`\`\r
### setup 与 Options API 的关系\r
\r
- \`Vue2\` 的配置（\`data\`、\`methos\`......）中**可以访问到** \`setup\`中的属性、方法。\r
- 但在\`setup\`中**不能访问到**\`Vue2\`的配置（\`data\`、\`methos\`......）。\r
- 如果与\`Vue2\`冲突，则\`setup\`优先。\r
### setup 语法糖\r
\`setup\`函数有一个语法糖，这个语法糖，可以让我们把\`setup\`独立出去，代码如下：\r
\r
\`\`\`vue\r
<template>\r
  <div class="person">\r
    <h2>姓名：{{name}}</h2>\r
    <h2>年龄：{{age}}</h2>\r
    <button @click="changName">修改名字</button>\r
    <button @click="changAge">年龄+1</button>\r
    <button @click="showTel">点我查看联系方式</button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  export default {\r
    name:'Person',\r
  }\r
<\/script>\r
\r
<!-- 下面的写法是setup语法糖 -->\r
<script setup lang="ts">\r
  console.log(this) //undefined\r
  \r
  // 数据（注意：此时的name、age、tel都不是响应式数据）\r
  let name = '张三'\r
  let age = 18\r
  let tel = '13888888888'\r
\r
  // 方法\r
  function changName(){\r
    name = '李四'//注意：此时这么修改name页面是不变化的\r
  }\r
  function changAge(){\r
    console.log(age)\r
    age += 1 //注意：此时这么修改age页面是不变化的\r
  }\r
  function showTel(){\r
    alert(tel)\r
  }\r
<\/script>\r
\`\`\`\r
扩展：上述代码，还需要编写一个不写\`setup\`的\`script\`标签，去指定组件名字，比较麻烦，我们可以借助\`vite\`中的插件简化\r
\r
1. 第一步：\`npm i vite-plugin-vue-setup-extend -D\`\r
2. 第二步：\`vite.config.ts\`\r
\`\`\`jsx\r
import { defineConfig } from 'vite'\r
import VueSetupExtend from 'vite-plugin-vue-setup-extend'\r
\r
export default defineConfig({\r
  plugins: [ VueSetupExtend() ]\r
})\r
\`\`\`\r
\r
3. 第三步：\`<script setup lang="ts" name="Person">\`\r
## 3.3. 【ref 创建：基本类型的响应式数据】\r
\r
- **作用：**定义响应式变量。\r
- **语法：**\`let xxx = ref(初始值)\`。\r
- **返回值：**一个\`RefImpl\`的实例对象，简称\`ref对象\`或\`ref\`，\`ref\`对象的\`value\`**属性是响应式的**。\r
- **注意点：**\r
   - \`JS\`中操作数据需要：\`xxx.value\`，但模板中不需要\`.value\`，直接使用即可。\r
   - 对于\`let name = ref('张三')\`来说，\`name\`不是响应式的，\`name.value\`是响应式的。\r
\`\`\`vue\r
<template>\r
  <div class="person">\r
    <h2>姓名：{{name}}</h2>\r
    <h2>年龄：{{age}}</h2>\r
    <button @click="changeName">修改名字</button>\r
    <button @click="changeAge">年龄+1</button>\r
    <button @click="showTel">点我查看联系方式</button>\r
  </div>\r
</template>\r
\r
<script setup lang="ts" name="Person">\r
  import {ref} from 'vue'\r
  // name和age是一个RefImpl的实例对象，简称ref对象，它们的value属性是响应式的。\r
  let name = ref('张三')\r
  let age = ref(18)\r
  // tel就是一个普通的字符串，不是响应式的\r
  let tel = '13888888888'\r
\r
  function changeName(){\r
    // JS中操作ref对象时候需要.value\r
    name.value = '李四'\r
    console.log(name.value)\r
\r
    // 注意：name不是响应式的，name.value是响应式的，所以如下代码并不会引起页面的更新。\r
    // name = ref('zhang-san')\r
  }\r
  function changeAge(){\r
    // JS中操作ref对象时候需要.value\r
    age.value += 1 \r
    console.log(age.value)\r
  }\r
  function showTel(){\r
    alert(tel)\r
  }\r
<\/script>\r
\`\`\`\r
## 3.4. 【reactive 创建：对象类型的响应式数据】\r
\r
- **作用：**定义一个**响应式对象**（基本类型不要用它，要用\`ref\`，否则报错）\r
- **语法：**\`let 响应式对象= reactive(源对象)\`。\r
- **返回值：**一个\`Proxy\`的实例对象，简称：响应式对象。\r
- **注意点：**\`reactive\`定义的响应式数据是“深层次”的。\r
\`\`\`vue\r
<template>\r
  <div class="person">\r
    <h2>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>\r
    <h2>游戏列表：</h2>\r
    <ul>\r
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>\r
    </ul>\r
    <h2>测试：{{obj.a.b.c.d}}</h2>\r
    <button @click="changeCarPrice">修改汽车价格</button>\r
    <button @click="changeFirstGame">修改第一游戏</button>\r
    <button @click="test">测试</button>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup name="Person">\r
import { reactive } from 'vue'\r
\r
// 数据\r
let car = reactive({ brand: '奔驰', price: 100 })\r
let games = reactive([\r
  { id: 'ahsgdyfa01', name: '英雄联盟' },\r
  { id: 'ahsgdyfa02', name: '王者荣耀' },\r
  { id: 'ahsgdyfa03', name: '原神' }\r
])\r
let obj = reactive({\r
  a:{\r
    b:{\r
      c:{\r
        d:666\r
      }\r
    }\r
  }\r
})\r
\r
function changeCarPrice() {\r
  car.price += 10\r
}\r
function changeFirstGame() {\r
  games[0].name = '流星蝴蝶剑'\r
}\r
function test(){\r
  obj.a.b.c.d = 999\r
}\r
<\/script>\r
\`\`\`\r
## 3.5. 【ref 创建：对象类型的响应式数据】\r
\r
- 其实\`ref\`接收的数据可以是：**基本类型**、**对象类型**。\r
- 若\`ref\`接收的是对象类型，内部其实也是调用了\`reactive\`函数。\r
\`\`\`vue\r
<template>\r
  <div class="person">\r
    <h2>汽车信息：一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>\r
    <h2>游戏列表：</h2>\r
    <ul>\r
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>\r
    </ul>\r
    <h2>测试：{{obj.a.b.c.d}}</h2>\r
    <button @click="changeCarPrice">修改汽车价格</button>\r
    <button @click="changeFirstGame">修改第一游戏</button>\r
    <button @click="test">测试</button>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup name="Person">\r
import { ref } from 'vue'\r
\r
// 数据\r
let car = ref({ brand: '奔驰', price: 100 })\r
let games = ref([\r
  { id: 'ahsgdyfa01', name: '英雄联盟' },\r
  { id: 'ahsgdyfa02', name: '王者荣耀' },\r
  { id: 'ahsgdyfa03', name: '原神' }\r
])\r
let obj = ref({\r
  a:{\r
    b:{\r
      c:{\r
        d:666\r
      }\r
    }\r
  }\r
})\r
\r
console.log(car)\r
\r
function changeCarPrice() {\r
  car.value.price += 10\r
}\r
function changeFirstGame() {\r
  games.value[0].name = '流星蝴蝶剑'\r
}\r
function test(){\r
  obj.value.a.b.c.d = 999\r
}\r
<\/script>\r
\`\`\`\r
## 3.6. 【ref 对比 reactive】\r
宏观角度看：\r
\r
> 1. \`ref\`用来定义：**基本类型数据**、**对象类型数据**；\r
>\r
> 2. \`reactive\`用来定义：**对象类型数据**。\r
\r
- 区别：\r
\r
> 1. \`ref\`创建的变量必须使用\`.value\`（可以使用\`volar\`插件自动添加\`.value\`）。\r
>\r
>    <img src="images/自动补充value.png" alt="自动补充value" style="zoom:50%;border-radius:20px" /> \r
>\r
> 2. \`reactive\`重新分配一个新对象，会**失去**响应式（可以使用\`Object.assign\`去整体替换）。\r
\r
- 使用原则：\r
> 1. 若需要一个基本类型的响应式数据，必须使用\`ref\`。\r
> 2. 若需要一个响应式对象，层级不深，\`ref\`、\`reactive\`都可以。\r
> 3. 若需要一个响应式对象，且层级较深，推荐使用\`reactive\`。\r
\r
## 3.7. 【toRefs 与 toRef】\r
\r
- 作用：将一个响应式对象中的每一个属性，转换为\`ref\`对象。\r
- 备注：\`toRefs\`与\`toRef\`功能一致，但\`toRefs\`可以批量转换。\r
- 语法如下：\r
\`\`\`vue\r
<template>\r
  <div class="person">\r
    <h2>姓名：{{person.name}}</h2>\r
    <h2>年龄：{{person.age}}</h2>\r
    <h2>性别：{{person.gender}}</h2>\r
    <button @click="changeName">修改名字</button>\r
    <button @click="changeAge">修改年龄</button>\r
    <button @click="changeGender">修改性别</button>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup name="Person">\r
  import {ref,reactive,toRefs,toRef} from 'vue'\r
\r
  // 数据\r
  let person = reactive({name:'张三', age:18, gender:'男'})\r
	\r
  // 通过toRefs将person对象中的n个属性批量取出，且依然保持响应式的能力\r
  let {name,gender} =  toRefs(person)\r
	\r
  // 通过toRef将person对象中的gender属性取出，且依然保持响应式的能力\r
  let age = toRef(person,'age')\r
\r
  // 方法\r
  function changeName(){\r
    name.value += '~'\r
  }\r
  function changeAge(){\r
    age.value += 1\r
  }\r
  function changeGender(){\r
    gender.value = '女'\r
  }\r
<\/script>\r
\`\`\`\r
## 3.8. 【computed】\r
\r
作用：根据已有数据计算出新数据（和\`Vue2\`中的\`computed\`作用一致）。\r
\r
<img src="images/computed.gif" style="zoom:20%;" />  \r
\r
\`\`\`vue\r
<template>\r
  <div class="person">\r
    姓：<input type="text" v-model="firstName"> <br>\r
    名：<input type="text" v-model="lastName"> <br>\r
    全名：<span>{{fullName}}</span> <br>\r
    <button @click="changeFullName">全名改为：li-si</button>\r
  </div>\r
</template>\r
\r
<script setup lang="ts" name="App">\r
  import {ref,computed} from 'vue'\r
\r
  let firstName = ref('zhang')\r
  let lastName = ref('san')\r
\r
  // 计算属性——只读取，不修改\r
  /* let fullName = computed(()=>{\r
    return firstName.value + '-' + lastName.value\r
  }) */\r
\r
\r
  // 计算属性——既读取又修改\r
  let fullName = computed({\r
    // 读取\r
    get(){\r
      return firstName.value + '-' + lastName.value\r
    },\r
    // 修改\r
    set(val){\r
      console.log('有人修改了fullName',val)\r
      firstName.value = val.split('-')[0]\r
      lastName.value = val.split('-')[1]\r
    }\r
  })\r
\r
  function changeFullName(){\r
    fullName.value = 'li-si'\r
  } \r
<\/script>\r
\`\`\`\r
## 3.9.【watch】\r
\r
- 作用：监视数据的变化（和\`Vue2\`中的\`watch\`作用一致）\r
- 特点：\`Vue3\`中的\`watch\`只能监视以下**四种数据**：\r
> 1. \`ref\`定义的数据。\r
> 2. \`reactive\`定义的数据。\r
> 3. 函数返回一个值（\`getter\`函数）。\r
> 4. 一个包含上述内容的数组。\r
\r
我们在\`Vue3\`中使用\`watch\`的时候，通常会遇到以下几种情况：\r
### * 情况一\r
监视\`ref\`定义的【基本类型】数据：直接写数据名即可，监视的是其\`value\`值的改变。\r
\r
\`\`\`vue\r
<template>\r
  <div class="person">\r
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>\r
    <h2>当前求和为：{{sum}}</h2>\r
    <button @click="changeSum">点我sum+1</button>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup name="Person">\r
  import {ref,watch} from 'vue'\r
  // 数据\r
  let sum = ref(0)\r
  // 方法\r
  function changeSum(){\r
    sum.value += 1\r
  }\r
  // 监视，情况一：监视【ref】定义的【基本类型】数据\r
  const stopWatch = watch(sum,(newValue,oldValue)=>{\r
    console.log('sum变化了',newValue,oldValue)\r
    if(newValue >= 10){\r
      stopWatch()\r
    }\r
  })\r
<\/script>\r
\`\`\`\r
### * 情况二\r
监视\`ref\`定义的【对象类型】数据：直接写数据名，监视的是对象的【地址值】，若想监视对象内部的数据，要手动开启深度监视。\r
\r
> 注意：\r
>\r
> * 若修改的是\`ref\`定义的对象中的属性，\`newValue\` 和 \`oldValue\` 都是新值，因为它们是同一个对象。\r
>\r
> * 若修改整个\`ref\`定义的对象，\`newValue\` 是新值， \`oldValue\` 是旧值，因为不是同一个对象了。\r
\r
\`\`\`vue\r
<template>\r
  <div class="person">\r
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>\r
    <h2>姓名：{{ person.name }}</h2>\r
    <h2>年龄：{{ person.age }}</h2>\r
    <button @click="changeName">修改名字</button>\r
    <button @click="changeAge">修改年龄</button>\r
    <button @click="changePerson">修改整个人</button>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup name="Person">\r
  import {ref,watch} from 'vue'\r
  // 数据\r
  let person = ref({\r
    name:'张三',\r
    age:18\r
  })\r
  // 方法\r
  function changeName(){\r
    person.value.name += '~'\r
  }\r
  function changeAge(){\r
    person.value.age += 1\r
  }\r
  function changePerson(){\r
    person.value = {name:'李四',age:90}\r
  }\r
  /* \r
    监视，情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视\r
    watch的第一个参数是：被监视的数据\r
    watch的第二个参数是：监视的回调\r
    watch的第三个参数是：配置对象（deep、immediate等等.....） \r
  */\r
  watch(person,(newValue,oldValue)=>{\r
    console.log('person变化了',newValue,oldValue)\r
  },{deep:true})\r
  \r
<\/script>\r
\`\`\`\r
### *  情况三\r
监视\`reactive\`定义的【对象类型】数据，且默认开启了深度监视。\r
\`\`\`vue\r
<template>\r
  <div class="person">\r
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>\r
    <h2>姓名：{{ person.name }}</h2>\r
    <h2>年龄：{{ person.age }}</h2>\r
    <button @click="changeName">修改名字</button>\r
    <button @click="changeAge">修改年龄</button>\r
    <button @click="changePerson">修改整个人</button>\r
    <hr>\r
    <h2>测试：{{obj.a.b.c}}</h2>\r
    <button @click="test">修改obj.a.b.c</button>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup name="Person">\r
  import {reactive,watch} from 'vue'\r
  // 数据\r
  let person = reactive({\r
    name:'张三',\r
    age:18\r
  })\r
  let obj = reactive({\r
    a:{\r
      b:{\r
        c:666\r
      }\r
    }\r
  })\r
  // 方法\r
  function changeName(){\r
    person.name += '~'\r
  }\r
  function changeAge(){\r
    person.age += 1\r
  }\r
  function changePerson(){\r
    Object.assign(person,{name:'李四',age:80})\r
  }\r
  function test(){\r
    obj.a.b.c = 888\r
  }\r
\r
  // 监视，情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的\r
  watch(person,(newValue,oldValue)=>{\r
    console.log('person变化了',newValue,oldValue)\r
  })\r
  watch(obj,(newValue,oldValue)=>{\r
    console.log('Obj变化了',newValue,oldValue)\r
  })\r
<\/script>\r
\`\`\`\r
### * 情况四\r
监视\`ref\`或\`reactive\`定义的【对象类型】数据中的**某个属性**，注意点如下：\r
\r
1. 若该属性值**不是**【对象类型】，需要写成函数形式。\r
2. 若该属性值是**依然**是【对象类型】，可直接编，也可写成函数，建议写成函数。\r
\r
结论：监视的要是对象里的属性，那么最好写函数式，注意点：若是对象监视的是地址值，需要关注对象内部，需要手动开启深度监视。\r
\r
\`\`\`vue\r
<template>\r
  <div class="person">\r
    <h1>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>\r
    <h2>姓名：{{ person.name }}</h2>\r
    <h2>年龄：{{ person.age }}</h2>\r
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>\r
    <button @click="changeName">修改名字</button>\r
    <button @click="changeAge">修改年龄</button>\r
    <button @click="changeC1">修改第一台车</button>\r
    <button @click="changeC2">修改第二台车</button>\r
    <button @click="changeCar">修改整个车</button>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup name="Person">\r
  import {reactive,watch} from 'vue'\r
\r
  // 数据\r
  let person = reactive({\r
    name:'张三',\r
    age:18,\r
    car:{\r
      c1:'奔驰',\r
      c2:'宝马'\r
    }\r
  })\r
  // 方法\r
  function changeName(){\r
    person.name += '~'\r
  }\r
  function changeAge(){\r
    person.age += 1\r
  }\r
  function changeC1(){\r
    person.car.c1 = '奥迪'\r
  }\r
  function changeC2(){\r
    person.car.c2 = '大众'\r
  }\r
  function changeCar(){\r
    person.car = {c1:'雅迪',c2:'爱玛'}\r
  }\r
\r
  // 监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式\r
  /* watch(()=> person.name,(newValue,oldValue)=>{\r
    console.log('person.name变化了',newValue,oldValue)\r
  }) */\r
\r
  // 监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数\r
  watch(()=>person.car,(newValue,oldValue)=>{\r
    console.log('person.car变化了',newValue,oldValue)\r
  },{deep:true})\r
<\/script>\r
\`\`\`\r
### * 情况五\r
监视上述的多个数据\r
\`\`\`vue\r
<template>\r
  <div class="person">\r
    <h1>情况五：监视上述的多个数据</h1>\r
    <h2>姓名：{{ person.name }}</h2>\r
    <h2>年龄：{{ person.age }}</h2>\r
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>\r
    <button @click="changeName">修改名字</button>\r
    <button @click="changeAge">修改年龄</button>\r
    <button @click="changeC1">修改第一台车</button>\r
    <button @click="changeC2">修改第二台车</button>\r
    <button @click="changeCar">修改整个车</button>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup name="Person">\r
  import {reactive,watch} from 'vue'\r
\r
  // 数据\r
  let person = reactive({\r
    name:'张三',\r
    age:18,\r
    car:{\r
      c1:'奔驰',\r
      c2:'宝马'\r
    }\r
  })\r
  // 方法\r
  function changeName(){\r
    person.name += '~'\r
  }\r
  function changeAge(){\r
    person.age += 1\r
  }\r
  function changeC1(){\r
    person.car.c1 = '奥迪'\r
  }\r
  function changeC2(){\r
    person.car.c2 = '大众'\r
  }\r
  function changeCar(){\r
    person.car = {c1:'雅迪',c2:'爱玛'}\r
  }\r
\r
  // 监视，情况五：监视上述的多个数据\r
  watch([()=>person.name,person.car],(newValue,oldValue)=>{\r
    console.log('person.car变化了',newValue,oldValue)\r
  },{deep:true})\r
\r
<\/script>\r
\`\`\`\r
## 3.10. 【watchEffect】\r
\r
* 官网：立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行该函数。\r
\r
* \`watch\`对比\`watchEffect\`\r
\r
  > 1. 都能监听响应式数据的变化，不同的是监听数据变化的方式不同\r
  >\r
  > 2. \`watch\`：要明确指出监视的数据\r
  >\r
  > 3. \`watchEffect\`：不用明确指出监视的数据（函数中用到哪些属性，那就监视哪些属性）。\r
\r
* 示例代码：\r
\r
  \`\`\`vue\r
  <template>\r
    <div class="person">\r
      <h1>需求：水温达到50℃，或水位达到20cm，则联系服务器</h1>\r
      <h2 id="demo">水温：{{temp}}</h2>\r
      <h2>水位：{{height}}</h2>\r
      <button @click="changePrice">水温+1</button>\r
      <button @click="changeSum">水位+10</button>\r
    </div>\r
  </template>\r
  \r
  <script lang="ts" setup name="Person">\r
    import {ref,watch,watchEffect} from 'vue'\r
    // 数据\r
    let temp = ref(0)\r
    let height = ref(0)\r
  \r
    // 方法\r
    function changePrice(){\r
      temp.value += 10\r
    }\r
    function changeSum(){\r
      height.value += 1\r
    }\r
  \r
    // 用watch实现，需要明确的指出要监视：temp、height\r
    watch([temp,height],(value)=>{\r
      // 从value中获取最新的temp值、height值\r
      const [newTemp,newHeight] = value\r
      // 室温达到50℃，或水位达到20cm，立刻联系服务器\r
      if(newTemp >= 50 || newHeight >= 20){\r
        console.log('联系服务器')\r
      }\r
    })\r
  \r
    // 用watchEffect实现，不用\r
    const stopWtach = watchEffect(()=>{\r
      // 室温达到50℃，或水位达到20cm，立刻联系服务器\r
      if(temp.value >= 50 || height.value >= 20){\r
        console.log(document.getElementById('demo')?.innerText)\r
        console.log('联系服务器')\r
      }\r
      // 水温达到100，或水位达到50，取消监视\r
      if(temp.value === 100 || height.value === 50){\r
        console.log('清理了')\r
        stopWtach()\r
      }\r
    })\r
  <\/script>\r
  \`\`\`\r
  \r
  \r
\r
## 3.11. 【标签的 ref 属性】\r
\r
作用：用于注册模板引用。\r
\r
> * 用在普通\`DOM\`标签上，获取的是\`DOM\`节点。\r
>\r
> * 用在组件标签上，获取的是组件实例对象。\r
\r
用在普通\`DOM\`标签上：\r
\r
\`\`\`vue\r
<template>\r
  <div class="person">\r
    <h1 ref="title1">尚硅谷</h1>\r
    <h2 ref="title2">前端</h2>\r
    <h3 ref="title3">Vue</h3>\r
    <input type="text" ref="inpt"> <br><br>\r
    <button @click="showLog">点我打印内容</button>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup name="Person">\r
  import {ref} from 'vue'\r
	\r
  let title1 = ref()\r
  let title2 = ref()\r
  let title3 = ref()\r
\r
  function showLog(){\r
    // 通过id获取元素\r
    const t1 = document.getElementById('title1')\r
    // 打印内容\r
    console.log((t1 as HTMLElement).innerText)\r
    console.log((<HTMLElement>t1).innerText)\r
    console.log(t1?.innerText)\r
    \r
		/************************************/\r
		\r
    // 通过ref获取元素\r
    console.log(title1.value)\r
    console.log(title2.value)\r
    console.log(title3.value)\r
  }\r
<\/script>\r
\`\`\`\r
\r
用在组件标签上：\r
\r
\`\`\`vue\r
<!-- 父组件App.vue -->\r
<template>\r
  <Person ref="ren"/>\r
  <button @click="test">测试</button>\r
</template>\r
\r
<script lang="ts" setup name="App">\r
  import Person from './components/Person.vue'\r
  import {ref} from 'vue'\r
\r
  let ren = ref()\r
\r
  function test(){\r
    console.log(ren.value.name)\r
    console.log(ren.value.age)\r
  }\r
<\/script>\r
\r
\r
<!-- 子组件Person.vue中要使用defineExpose暴露内容 -->\r
<script lang="ts" setup name="Person">\r
  import {ref,defineExpose} from 'vue'\r
	// 数据\r
  let name = ref('张三')\r
  let age = ref(18)\r
  /****************************/\r
  /****************************/\r
  // 使用defineExpose将组件中的数据交给外部\r
  defineExpose({name,age})\r
<\/script>\r
\`\`\`\r
\r
\r
\r
## 3.12. 【props】\r
\r
> \`\`\`js\r
>// 定义一个接口，限制每个Person对象的格式\r
> export interface PersonInter {\r
>  id:string,\r
>  name:string,\r
>     age:number\r
>    }\r
>    \r
> // 定义一个自定义类型Persons\r
> export type Persons = Array<PersonInter>\r
> \`\`\`\r
> \r
> \`App.vue\`中代码：\r
>\r
> \`\`\`vue\r
><template>\r
> 	<Person :list="persons"/>\r
> </template>\r
>   \r
> <script lang="ts" setup name="App">\r
>   import Person from './components/Person.vue'\r
>   import {reactive} from 'vue'\r
>     import {type Persons} from './types'\r
>   \r
>     let persons = reactive<Persons>([\r
>      {id:'e98219e12',name:'张三',age:18},\r
>       {id:'e98219e13',name:'李四',age:19},\r
>        {id:'e98219e14',name:'王五',age:20}\r
>      ])\r
>    <\/script>\r
>   \r
> \`\`\`\r
> \r
> \`Person.vue\`中代码：\r
>\r
> \`\`\`Vue\r
><template>\r
> <div class="person">\r
>  <ul>\r
>      <li v-for="item in list" :key="item.id">\r
>         {{item.name}}--{{item.age}}\r
>       </li>\r
>     </ul>\r
>    </div>\r
>    </template>\r
>   \r
> <script lang="ts" setup name="Person">\r
> import {defineProps} from 'vue'\r
> import {type PersonInter} from '@/types'\r
>   \r
>   // 第一种写法：仅接收\r
> // const props = defineProps(['list'])\r
>   \r
>   // 第二种写法：接收+限制类型\r
> // defineProps<{list:Persons}>()\r
>   \r
>   // 第三种写法：接收+限制类型+指定默认值+限制必要性\r
> let props = withDefaults(defineProps<{list?:Persons}>(),{\r
>      list:()=>[{id:'asdasg01',name:'小猪佩奇',age:18}]\r
>   })\r
>    console.log(props)\r
>   <\/script>\r
>   \`\`\`\r
> \r
\r
## 3.13. 【生命周期】\r
\r
* 概念：\`Vue\`组件实例在创建时要经历一系列的初始化步骤，在此过程中\`Vue\`会在合适的时机，调用特定的函数，从而让开发者有机会在特定阶段运行自己的代码，这些特定的函数统称为：生命周期钩子\r
\r
* 规律：\r
\r
  > 生命周期整体分为四个阶段，分别是：**创建、挂载、更新、销毁**，每个阶段都有两个钩子，一前一后。\r
\r
* \`Vue2\`的生命周期\r
\r
  > 创建阶段：\`beforeCreate\`、\`created\`\r
  >\r
  > 挂载阶段：\`beforeMount\`、\`mounted\`\r
  >\r
  > 更新阶段：\`beforeUpdate\`、\`updated\`\r
  >\r
  > 销毁阶段：\`beforeDestroy\`、\`destroyed\`\r
\r
* \`Vue3\`的生命周期\r
\r
  > 创建阶段：\`setup\`\r
  >\r
  > 挂载阶段：\`onBeforeMount\`、\`onMounted\`\r
  >\r
  > 更新阶段：\`onBeforeUpdate\`、\`onUpdated\`\r
  >\r
  > 卸载阶段：\`onBeforeUnmount\`、\`onUnmounted\`\r
\r
* 常用的钩子：\`onMounted\`(挂载完毕)、\`onUpdated\`(更新完毕)、\`onBeforeUnmount\`(卸载之前)\r
\r
* 示例代码：\r
\r
  \`\`\`vue\r
  <template>\r
    <div class="person">\r
      <h2>当前求和为：{{ sum }}</h2>\r
      <button @click="changeSum">点我sum+1</button>\r
    </div>\r
  </template>\r
  \r
  <!-- vue3写法 -->\r
  <script lang="ts" setup name="Person">\r
    import { \r
      ref, \r
      onBeforeMount, \r
      onMounted, \r
      onBeforeUpdate, \r
      onUpdated, \r
      onBeforeUnmount, \r
      onUnmounted \r
    } from 'vue'\r
  \r
    // 数据\r
    let sum = ref(0)\r
    // 方法\r
    function changeSum() {\r
      sum.value += 1\r
    }\r
    console.log('setup')\r
    // 生命周期钩子\r
    onBeforeMount(()=>{\r
      console.log('挂载之前')\r
    })\r
    onMounted(()=>{\r
      console.log('挂载完毕')\r
    })\r
    onBeforeUpdate(()=>{\r
      console.log('更新之前')\r
    })\r
    onUpdated(()=>{\r
      console.log('更新完毕')\r
    })\r
    onBeforeUnmount(()=>{\r
      console.log('卸载之前')\r
    })\r
    onUnmounted(()=>{\r
      console.log('卸载完毕')\r
    })\r
  <\/script>\r
  \`\`\`\r
\r
## 3.14. 【自定义hook】\r
\r
- 什么是\`hook\`？—— 本质是一个函数，把\`setup\`函数中使用的\`Composition API\`进行了封装，类似于\`vue2.x\`中的\`mixin\`。\r
\r
- 自定义\`hook\`的优势：复用代码, 让\`setup\`中的逻辑更清楚易懂。\r
\r
示例代码：\r
\r
- \`useSum.ts\`中内容如下：\r
\r
  \`\`\`js\r
  import {ref,onMounted} from 'vue'\r
  \r
  export default function(){\r
    let sum = ref(0)\r
  \r
    const increment = ()=>{\r
      sum.value += 1\r
    }\r
    const decrement = ()=>{\r
      sum.value -= 1\r
    }\r
    onMounted(()=>{\r
      increment()\r
    })\r
  \r
    //向外部暴露数据\r
    return {sum,increment,decrement}\r
  }		\r
  \`\`\`\r
  \r
- \`useDog.ts\`中内容如下：\r
\r
  \`\`\`js\r
  import {reactive,onMounted} from 'vue'\r
  import axios,{AxiosError} from 'axios'\r
  \r
  export default function(){\r
    let dogList = reactive<string[]>([])\r
  \r
    // 方法\r
    async function getDog(){\r
      try {\r
        // 发请求\r
        let {data} = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')\r
        // 维护数据\r
        dogList.push(data.message)\r
      } catch (error) {\r
        // 处理错误\r
        const err = <AxiosError>error\r
        console.log(err.message)\r
      }\r
    }\r
  \r
    // 挂载钩子\r
    onMounted(()=>{\r
      getDog()\r
    })\r
  	\r
    //向外部暴露数据\r
    return {dogList,getDog}\r
  }\r
  \`\`\`\r
\r
- 组件中具体使用：\r
\r
  \`\`\`vue\r
  <template>\r
    <h2>当前求和为：{{sum}}</h2>\r
    <button @click="increment">点我+1</button>\r
    <button @click="decrement">点我-1</button>\r
    <hr>\r
    <img v-for="(u,index) in dogList.urlList" :key="index" :src="(u as string)"> \r
    <span v-show="dogList.isLoading">加载中......</span><br>\r
    <button @click="getDog">再来一只狗</button>\r
  </template>\r
  \r
  <script lang="ts">\r
    import {defineComponent} from 'vue'\r
  \r
    export default defineComponent({\r
      name:'App',\r
    })\r
  <\/script>\r
  \r
  <script setup lang="ts">\r
    import useSum from './hooks/useSum'\r
    import useDog from './hooks/useDog'\r
  	\r
    let {sum,increment,decrement} = useSum()\r
    let {dogList,getDog} = useDog()\r
  <\/script>\r
  \`\`\`\r
\r
    \r
\r
---\r
\r
# 4. 路由\r
\r
## 4.1. 【对路由的理解】\r
\r
<img src="images/image-20231018144351536.png" alt="image-20231018144351536" style="zoom:20%;border-radius:40px" /> \r
\r
## 4.2. 【基本切换效果】\r
\r
- \`Vue3\`中要使用\`vue-router\`的最新版本，目前是\`4\`版本。\r
\r
- 路由配置文件代码如下：\r
\r
  \`\`\`js\r
  import {createRouter,createWebHistory} from 'vue-router'\r
  import Home from '@/pages/Home.vue'\r
  import News from '@/pages/News.vue'\r
  import About from '@/pages/About.vue'\r
  \r
  const router = createRouter({\r
  	history:createWebHistory(),\r
  	routes:[\r
  		{\r
  			path:'/home',\r
  			component:Home\r
  		},\r
  		{\r
  			path:'/about',\r
  			component:About\r
  		}\r
  	]\r
  })\r
  export default router\r
  \`\`\`\r
* \`main.ts\`代码如下：\r
\r
  \`\`\`js\r
  import router from './router/index'\r
  app.use(router)\r
  \r
  app.mount('#app')\r
  \`\`\`\r
\r
- \`App.vue\`代码如下\r
\r
  \`\`\`vue\r
  <template>\r
    <div class="app">\r
      <h2 class="title">Vue路由测试</h2>\r
      <!-- 导航区 -->\r
      <div class="navigate">\r
        <RouterLink to="/home" active-class="active">首页</RouterLink>\r
        <RouterLink to="/news" active-class="active">新闻</RouterLink>\r
        <RouterLink to="/about" active-class="active">关于</RouterLink>\r
      </div>\r
      <!-- 展示区 -->\r
      <div class="main-content">\r
        <RouterView></RouterView>\r
      </div>\r
    </div>\r
  </template>\r
  \r
  <script lang="ts" setup name="App">\r
    import {RouterLink,RouterView} from 'vue-router'  \r
  <\/script>\r
  \`\`\`\r
\r
## 4.3. 【两个注意点】\r
\r
> 1. 路由组件通常存放在\`pages\` 或 \`views\`文件夹，一般组件通常存放在\`components\`文件夹。\r
>\r
> 2. 通过点击导航，视觉效果上“消失” 了的路由组件，默认是被**卸载**掉的，需要的时候再去**挂载**。\r
\r
## 4.4.【路由器工作模式】\r
\r
1. \`history\`模式\r
\r
   > 优点：\`URL\`更加美观，不带有\`#\`，更接近传统的网站\`URL\`。\r
   >\r
   > 缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有\`404\`错误。\r
   >\r
   > \`\`\`js\r
   > const router = createRouter({\r
   >   	history:createWebHistory(), //history模式\r
   >   	/******/\r
   > })\r
   > \`\`\`\r
\r
2. \`hash\`模式\r
\r
   > 优点：兼容性更好，因为不需要服务器端处理路径。\r
   >\r
   > 缺点：\`URL\`带有\`#\`不太美观，且在\`SEO\`优化方面相对较差。\r
   >\r
   > \`\`\`js\r
   > const router = createRouter({\r
   >   	history:createWebHashHistory(), //hash模式\r
   >   	/******/\r
   > })\r
   > \`\`\`\r
\r
## 4.5. 【to的两种写法】\r
\r
\`\`\`vue\r
<!-- 第一种：to的字符串写法 -->\r
<router-link active-class="active" to="/home">主页</router-link>\r
\r
<!-- 第二种：to的对象写法 -->\r
<router-link active-class="active" :to="{path:'/home'}">Home</router-link>\r
\`\`\`\r
\r
## 4.6. 【命名路由】\r
\r
作用：可以简化路由跳转及传参（后面就讲）。\r
\r
给路由规则命名：\r
\r
\`\`\`js\r
routes:[\r
  {\r
    name:'zhuye',\r
    path:'/home',\r
    component:Home\r
  },\r
  {\r
    name:'xinwen',\r
    path:'/news',\r
    component:News,\r
  },\r
  {\r
    name:'guanyu',\r
    path:'/about',\r
    component:About\r
  }\r
]\r
\`\`\`\r
\r
跳转路由：\r
\r
\`\`\`vue\r
<!--简化前：需要写完整的路径（to的字符串写法） -->\r
<router-link to="/news/detail">跳转</router-link>\r
\r
<!--简化后：直接通过名字跳转（to的对象写法配合name属性） -->\r
<router-link :to="{name:'guanyu'}">跳转</router-link>\r
\`\`\`\r
\r
\r
\r
## 4.7. 【嵌套路由】\r
\r
1. 编写\`News\`的子路由：\`Detail.vue\`\r
\r
2. 配置路由规则，使用\`children\`配置项：\r
\r
   \`\`\`ts\r
   const router = createRouter({\r
     history:createWebHistory(),\r
   	routes:[\r
   		{\r
   			name:'zhuye',\r
   			path:'/home',\r
   			component:Home\r
   		},\r
   		{\r
   			name:'xinwen',\r
   			path:'/news',\r
   			component:News,\r
   			children:[\r
   				{\r
   					name:'xiang',\r
   					path:'detail',\r
   					component:Detail\r
   				}\r
   			]\r
   		},\r
   		{\r
   			name:'guanyu',\r
   			path:'/about',\r
   			component:About\r
   		}\r
   	]\r
   })\r
   export default router\r
   \`\`\`\r
   \r
3. 跳转路由（记得要加完整路径）：\r
\r
   \`\`\`vue\r
   <router-link to="/news/detail">xxxx</router-link>\r
   <!-- 或 -->\r
   <router-link :to="{path:'/news/detail'}">xxxx</router-link>\r
   \`\`\`\r
\r
4. 记得去\`Home\`组件中预留一个\`<router-view>\`\r
\r
   \`\`\`vue\r
   <template>\r
     <div class="news">\r
       <nav class="news-list">\r
         <RouterLink v-for="news in newsList" :key="news.id" :to="{path:'/news/detail'}">\r
           {{news.name}}\r
         </RouterLink>\r
       </nav>\r
       <div class="news-detail">\r
         <RouterView/>\r
       </div>\r
     </div>\r
   </template>\r
   \`\`\`\r
\r
   \r
\r
## 4.8. 【路由传参】\r
\r
### query参数\r
\r
   1. 传递参数\r
\r
      \`\`\`vue\r
      <!-- 跳转并携带query参数（to的字符串写法） -->\r
      <router-link to="/news/detail?a=1&b=2&content=欢迎你">\r
      	跳转\r
      </router-link>\r
      				\r
      <!-- 跳转并携带query参数（to的对象写法） -->\r
      <RouterLink \r
        :to="{\r
          //name:'xiang', //用name也可以跳转\r
          path:'/news/detail',\r
          query:{\r
            id:news.id,\r
            title:news.title,\r
            content:news.content\r
          }\r
        }"\r
      >\r
        {{news.title}}\r
      </RouterLink>\r
      \`\`\`\r
\r
   2. 接收参数：\r
\r
      \`\`\`js\r
      import {useRoute} from 'vue-router'\r
      const route = useRoute()\r
      // 打印query参数\r
      console.log(route.query)\r
      \`\`\`\r
\r
\r
### params参数\r
\r
   1. 传递参数\r
\r
      \`\`\`vue\r
      <!-- 跳转并携带params参数（to的字符串写法） -->\r
      <RouterLink :to="\`/news/detail/001/新闻001/内容001\`">{{news.title}}</RouterLink>\r
      				\r
      <!-- 跳转并携带params参数（to的对象写法） -->\r
      <RouterLink \r
        :to="{\r
          name:'xiang', //用name跳转\r
          params:{\r
            id:news.id,\r
            title:news.title,\r
            content:news.title\r
          }\r
        }"\r
      >\r
        {{news.title}}\r
      </RouterLink>\r
      \`\`\`\r
\r
   2. 接收参数：\r
\r
      \`\`\`js\r
      import {useRoute} from 'vue-router'\r
      const route = useRoute()\r
      // 打印params参数\r
      console.log(route.params)\r
      \`\`\`\r
\r
> 备注1：传递\`params\`参数时，若使用\`to\`的对象写法，必须使用\`name\`配置项，不能用\`path\`。\r
>\r
> 备注2：传递\`params\`参数时，需要提前在规则中占位。\r
\r
## 4.9. 【路由的props配置】\r
\r
作用：让路由组件更方便的收到参数（可以将路由参数作为\`props\`传给组件）\r
\r
\`\`\`js\r
{\r
	name:'xiang',\r
	path:'detail/:id/:title/:content',\r
	component:Detail,\r
\r
  // props的对象写法，作用：把对象中的每一组key-value作为props传给Detail组件\r
  // props:{a:1,b:2,c:3}, \r
\r
  // props的布尔值写法，作用：把收到了每一组params参数，作为props传给Detail组件\r
  // props:true\r
  \r
  // props的函数写法，作用：把返回的对象中每一组key-value作为props传给Detail组件\r
  props(route){\r
    return route.query\r
  }\r
}\r
\`\`\`\r
\r
## 4.10. 【 replace属性】\r
\r
  1. 作用：控制路由跳转时操作浏览器历史记录的模式。\r
\r
  2. 浏览器的历史记录有两种写入方式：分别为\`\`\`push\`\`\`和\`\`\`replace\`\`\`：\r
\r
     - \`\`\`push\`\`\`是追加历史记录（默认值）。\r
     - \`replace\`是替换当前记录。\r
\r
  3. 开启\`replace\`模式：\r
\r
     \`\`\`vue\r
     <RouterLink replace .......>News</RouterLink>\r
     \`\`\`\r
\r
## 4.11. 【编程式导航】\r
\r
路由组件的两个重要的属性：\`$route\`和\`$router\`变成了两个\`hooks\`\r
\r
\`\`\`js\r
import {useRoute,useRouter} from 'vue-router'\r
\r
const route = useRoute()\r
const router = useRouter()\r
\r
console.log(route.query)\r
console.log(route.parmas)\r
console.log(router.push)\r
console.log(router.replace)\r
\`\`\`\r
\r
## 4.12. 【重定向】\r
\r
1. 作用：将特定的路径，重新定向到已有路由。\r
\r
2. 具体编码：\r
\r
   \`\`\`js\r
   {\r
       path:'/',\r
       redirect:'/about'\r
   }\r
   \`\`\`\r
\r
\r
\r
# 5. pinia \r
\r
## 5.1【准备一个效果】\r
\r
<img src="./images/pinia_example.gif" alt="pinia_example" style="zoom:30%;border:3px solid" /> \r
\r
## 5.2【搭建 pinia 环境】\r
\r
第一步：\`npm install pinia\`\r
\r
第二步：操作\`src/main.ts\`\r
\r
\`\`\`ts\r
import { createApp } from 'vue'\r
import App from './App.vue'\r
\r
/* 引入createPinia，用于创建pinia */\r
import { createPinia } from 'pinia'\r
\r
/* 创建pinia */\r
const pinia = createPinia()\r
const app = createApp(App)\r
\r
/* 使用插件 */{}\r
app.use(pinia)\r
app.mount('#app')\r
\`\`\`\r
\r
此时开发者工具中已经有了\`pinia\`选项\r
\r
<img src="https://cdn.nlark.com/yuque/0/2023/png/35780599/1684309952481-c67f67f9-d1a3-4d69-8bd6-2b381e003f31.png" style="zoom:80%;border:1px solid black;border-radius:10px" />\r
\r
## 5.3【存储+读取数据】\r
\r
1. \`Store\`是一个保存：**状态**、**业务逻辑** 的实体，每个组件都可以**读取**、**写入**它。\r
\r
2. 它有三个概念：\`state\`、\`getter\`、\`action\`，相当于组件中的： \`data\`、 \`computed\` 和 \`methods\`。\r
\r
3. 具体编码：\`src/store/count.ts\`\r
\r
   \`\`\`ts\r
   // 引入defineStore用于创建store\r
   import {defineStore} from 'pinia'\r
   \r
   // 定义并暴露一个store\r
   export const useCountStore = defineStore('count',{\r
     // 动作\r
     actions:{},\r
     // 状态\r
     state(){\r
       return {\r
         sum:6\r
       }\r
     },\r
     // 计算\r
     getters:{}\r
   })\r
   \`\`\`\r
\r
4. 具体编码：\`src/store/talk.ts\`\r
\r
   \`\`\`js\r
   // 引入defineStore用于创建store\r
   import {defineStore} from 'pinia'\r
   \r
   // 定义并暴露一个store\r
   export const useTalkStore = defineStore('talk',{\r
     // 动作\r
     actions:{},\r
     // 状态\r
     state(){\r
       return {\r
         talkList:[\r
           {id:'yuysada01',content:'你今天有点怪，哪里怪？怪好看的！'},\r
        		{id:'yuysada02',content:'草莓、蓝莓、蔓越莓，你想我了没？'},\r
           {id:'yuysada03',content:'心里给你留了一块地，我的死心塌地'}\r
         ]\r
       }\r
     },\r
     // 计算\r
     getters:{}\r
   })\r
   \`\`\`\r
   \r
5. 组件中使用\`state\`中的数据\r
\r
   \`\`\`vue\r
   <template>\r
     <h2>当前求和为：{{ sumStore.sum }}</h2>\r
   </template>\r
   \r
   <script setup lang="ts" name="Count">\r
     // 引入对应的useXxxxxStore	\r
     import {useSumStore} from '@/store/sum'\r
     \r
     // 调用useXxxxxStore得到对应的store\r
     const sumStore = useSumStore()\r
   <\/script>\r
   \`\`\`\r
\r
   \`\`\`vue\r
   <template>\r
   	<ul>\r
       <li v-for="talk in talkStore.talkList" :key="talk.id">\r
         {{ talk.content }}\r
       </li>\r
     </ul>\r
   </template>\r
   \r
   <script setup lang="ts" name="Count">\r
     import axios from 'axios'\r
     import {useTalkStore} from '@/store/talk'\r
   \r
     const talkStore = useTalkStore()\r
   <\/script>\r
   \`\`\`\r
\r
   \r
\r
## 5.4.【修改数据】(三种方式)\r
\r
1. 第一种修改方式，直接修改\r
\r
   \`\`\`ts\r
   countStore.sum = 666\r
   \`\`\`\r
\r
2. 第二种修改方式：批量修改\r
\r
   \`\`\`ts\r
   countStore.$patch({\r
     sum:999,\r
     school:'atguigu'\r
   })\r
   \`\`\`\r
\r
3. 第三种修改方式：借助\`action\`修改（\`action\`中可以编写一些业务逻辑）\r
\r
   \`\`\`js\r
   import { defineStore } from 'pinia'\r
   \r
   export const useCountStore = defineStore('count', {\r
     /*************/\r
     actions: {\r
       //加\r
       increment(value:number) {\r
         if (this.sum < 10) {\r
           //操作countStore中的sum\r
           this.sum += value\r
         }\r
       },\r
       //减\r
       decrement(value:number){\r
         if(this.sum > 1){\r
           this.sum -= value\r
         }\r
       }\r
     },\r
     /*************/\r
   })\r
   \`\`\`\r
\r
4. 组件中调用\`action\`即可\r
\r
   \`\`\`js\r
   // 使用countStore\r
   const countStore = useCountStore()\r
   \r
   // 调用对应action\r
   countStore.incrementOdd(n.value)\r
   \`\`\`\r
\r
\r
## 5.5.【storeToRefs】\r
\r
- 借助\`storeToRefs\`将\`store\`中的数据转为\`ref\`对象，方便在模板中使用。\r
- 注意：\`pinia\`提供的\`storeToRefs\`只会将数据做转换，而\`Vue\`的\`toRefs\`会转换\`store\`中数据。\r
\r
\`\`\`vue\r
<template>\r
	<div class="count">\r
		<h2>当前求和为：{{sum}}</h2>\r
	</div>\r
</template>\r
\r
<script setup lang="ts" name="Count">\r
  import { useCountStore } from '@/store/count'\r
  /* 引入storeToRefs */\r
  import { storeToRefs } from 'pinia'\r
\r
	/* 得到countStore */\r
  const countStore = useCountStore()\r
  /* 使用storeToRefs转换countStore，随后解构 */\r
  const {sum} = storeToRefs(countStore)\r
<\/script>\r
\r
\`\`\`\r
\r
## 5.6.【getters】\r
\r
  1. 概念：当\`state\`中的数据，需要经过处理后再使用时，可以使用\`getters\`配置。\r
\r
  2. 追加\`\`\`getters\`\`\`配置。\r
\r
     \`\`\`js\r
     // 引入defineStore用于创建store\r
     import {defineStore} from 'pinia'\r
     \r
     // 定义并暴露一个store\r
     export const useCountStore = defineStore('count',{\r
       // 动作\r
       actions:{\r
         /************/\r
       },\r
       // 状态\r
       state(){\r
         return {\r
           sum:1,\r
           school:'atguigu'\r
         }\r
       },\r
       // 计算\r
       getters:{\r
         bigSum:(state):number => state.sum *10,\r
         upperSchool():string{\r
           return this. school.toUpperCase()\r
         }\r
       }\r
     })\r
     \`\`\`\r
\r
  3. 组件中读取数据：\r
\r
     \`\`\`js\r
     const {increment,decrement} = countStore\r
     let {sum,school,bigSum,upperSchool} = storeToRefs(countStore)\r
     \`\`\`\r
\r
     \r
\r
## 5.7.【$subscribe】\r
\r
通过 store 的 \`$subscribe()\` 方法侦听 \`state\` 及其变化\r
\r
\`\`\`ts\r
talkStore.$subscribe((mutate,state)=>{\r
  console.log('LoveTalk',mutate,state)\r
  localStorage.setItem('talk',JSON.stringify(talkList.value))\r
})\r
\`\`\`\r
\r
\r
\r
## 5.8. 【store组合式写法】\r
\r
\`\`\`ts\r
import {defineStore} from 'pinia'\r
import axios from 'axios'\r
import {nanoid} from 'nanoid'\r
import {reactive} from 'vue'\r
\r
export const useTalkStore = defineStore('talk',()=>{\r
  // talkList就是state\r
  const talkList = reactive(\r
    JSON.parse(localStorage.getItem('talkList') as string) || []\r
  )\r
\r
  // getATalk函数相当于action\r
  async function getATalk(){\r
    // 发请求，下面这行的写法是：连续解构赋值+重命名\r
    let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')\r
    // 把请求回来的字符串，包装成一个对象\r
    let obj = {id:nanoid(),title}\r
    // 放到数组中\r
    talkList.unshift(obj)\r
  }\r
  return {talkList,getATalk}\r
})\r
\`\`\`\r
\r
\r
\r
# 6. 组件通信\r
\r
**\`Vue3\`组件通信和\`Vue2\`的区别：**\r
\r
* 移出事件总线，使用\`mitt\`代替。\r
\r
- \`vuex\`换成了\`pinia\`。\r
- 把\`.sync\`优化到了\`v-model\`里面了。\r
- 把\`$listeners\`所有的东西，合并到\`$attrs\`中了。\r
- \`$children\`被砍掉了。\r
\r
**常见搭配形式：**\r
\r
<img src="images/image-20231119185900990.png" alt="image-20231119185900990" style="zoom:60%;" /> \r
\r
## 6.1. 【props】\r
\r
概述：\`props\`是使用频率最高的一种通信方式，常用与 ：**父 ↔ 子**。\r
\r
- 若 **父传子**：属性值是**非函数**。\r
- 若 **子传父**：属性值是**函数**。\r
\r
父组件：\r
\r
\`\`\`vue\r
<template>\r
  <div class="father">\r
    <h3>父组件，</h3>\r
		<h4>我的车：{{ car }}</h4>\r
		<h4>儿子给的玩具：{{ toy }}</h4>\r
		<Child :car="car" :getToy="getToy"/>\r
  </div>\r
</template>\r
\r
<script setup lang="ts" name="Father">\r
	import Child from './Child.vue'\r
	import { ref } from "vue";\r
	// 数据\r
	const car = ref('奔驰')\r
	const toy = ref()\r
	// 方法\r
	function getToy(value:string){\r
		toy.value = value\r
	}\r
<\/script>\r
\`\`\`\r
\r
子组件\r
\r
\`\`\`vue\r
<template>\r
  <div class="child">\r
    <h3>子组件</h3>\r
		<h4>我的玩具：{{ toy }}</h4>\r
		<h4>父给我的车：{{ car }}</h4>\r
		<button @click="getToy(toy)">玩具给父亲</button>\r
  </div>\r
</template>\r
\r
<script setup lang="ts" name="Child">\r
	import { ref } from "vue";\r
	const toy = ref('奥特曼')\r
	\r
	defineProps(['car','getToy'])\r
<\/script>\r
\`\`\`\r
\r
## 6.2. 【自定义事件】\r
\r
1. 概述：自定义事件常用于：**子 => 父。**\r
2. 注意区分好：原生事件、自定义事件。\r
\r
- 原生事件：\r
  - 事件名是特定的（\`click\`、\`mosueenter\`等等）	\r
  - 事件对象\`$event\`: 是包含事件相关信息的对象（\`pageX\`、\`pageY\`、\`target\`、\`keyCode\`）\r
- 自定义事件：\r
  - 事件名是任意名称\r
  - <strong style="color:red">事件对象\`$event\`: 是调用\`emit\`时所提供的数据，可以是任意类型！！！</strong >\r
\r
3. 示例：\r
\r
   \`\`\`html\r
   <!--在父组件中，给子组件绑定自定义事件：-->\r
   <Child @send-toy="toy = $event"/>\r
   \r
   <!--注意区分原生事件与自定义事件中的$event-->\r
   <button @click="toy = $event">测试</button>\r
   \`\`\`\r
\r
   \`\`\`js\r
   //子组件中，触发事件：\r
   this.$emit('send-toy', 具体数据)\r
   \`\`\`\r
\r
## 6.3. 【mitt】\r
\r
概述：与消息订阅与发布（\`pubsub\`）功能类似，可以实现任意组件间通信。\r
\r
安装\`mitt\`\r
\r
\`\`\`shell\r
npm i mitt\r
\`\`\`\r
\r
新建文件：\`src\\utils\\emitter.ts\`\r
\r
\`\`\`javascript\r
// 引入mitt \r
import mitt from "mitt";\r
\r
// 创建emitter\r
const emitter = mitt()\r
\r
/*\r
  // 绑定事件\r
  emitter.on('abc',(value)=>{\r
    console.log('abc事件被触发',value)\r
  })\r
  emitter.on('xyz',(value)=>{\r
    console.log('xyz事件被触发',value)\r
  })\r
\r
  setInterval(() => {\r
    // 触发事件\r
    emitter.emit('abc',666)\r
    emitter.emit('xyz',777)\r
  }, 1000);\r
\r
  setTimeout(() => {\r
    // 清理事件\r
    emitter.all.clear()\r
  }, 3000); \r
*/\r
\r
// 创建并暴露mitt\r
export default emitter\r
\`\`\`\r
\r
接收数据的组件中：绑定事件、同时在销毁前解绑事件：\r
\r
\`\`\`typescript\r
import emitter from "@/utils/emitter";\r
import { onUnmounted } from "vue";\r
\r
// 绑定事件\r
emitter.on('send-toy',(value)=>{\r
  console.log('send-toy事件被触发',value)\r
})\r
\r
onUnmounted(()=>{\r
  // 解绑事件\r
  emitter.off('send-toy')\r
})\r
\`\`\`\r
\r
【第三步】：提供数据的组件，在合适的时候触发事件\r
\r
\`\`\`javascript\r
import emitter from "@/utils/emitter";\r
\r
function sendToy(){\r
  // 触发事件\r
  emitter.emit('send-toy',toy.value)\r
}\r
\`\`\`\r
\r
**注意这个重要的内置关系，总线依赖着这个内置关系**\r
\r
## 6.4.【v-model】\r
\r
1. 概述：实现 **父↔子** 之间相互通信。\r
\r
2. 前序知识 —— \`v-model\`的本质\r
\r
   \`\`\`vue\r
   <!-- 使用v-model指令 -->\r
   <input type="text" v-model="userName">\r
   \r
   <!-- v-model的本质是下面这行代码 -->\r
   <input \r
     type="text" \r
     :value="userName" \r
     @input="userName =(<HTMLInputElement>$event.target).value"\r
   >\r
   \`\`\`\r
\r
3. 组件标签上的\`v-model\`的本质：\`:moldeValue\` ＋ \`update:modelValue\`事件。\r
\r
   \`\`\`vue\r
   <!-- 组件标签上使用v-model指令 -->\r
   <AtguiguInput v-model="userName"/>\r
   \r
   <!-- 组件标签上v-model的本质 -->\r
   <AtguiguInput :modelValue="userName" @update:model-value="userName = $event"/>\r
   \`\`\`\r
\r
   \`AtguiguInput\`组件中：\r
\r
   \`\`\`vue\r
   <template>\r
     <div class="box">\r
       <!--将接收的value值赋给input元素的value属性，目的是：为了呈现数据 -->\r
   		<!--给input元素绑定原生input事件，触发input事件时，进而触发update:model-value事件-->\r
       <input \r
          type="text" \r
          :value="modelValue" \r
          @input="emit('update:model-value',$event.target.value)"\r
       >\r
     </div>\r
   </template>\r
   \r
   <script setup lang="ts" name="AtguiguInput">\r
     // 接收props\r
     defineProps(['modelValue'])\r
     // 声明事件\r
     const emit = defineEmits(['update:model-value'])\r
   <\/script>\r
   \`\`\`\r
\r
4. 也可以更换\`value\`，例如改成\`abc\`\r
\r
   \`\`\`vue\r
   <!-- 也可以更换value，例如改成abc-->\r
   <AtguiguInput v-model:abc="userName"/>\r
   \r
   <!-- 上面代码的本质如下 -->\r
   <AtguiguInput :abc="userName" @update:abc="userName = $event"/>\r
   \`\`\`\r
\r
   \`AtguiguInput\`组件中：\r
\r
   \`\`\`vue\r
   <template>\r
     <div class="box">\r
       <input \r
          type="text" \r
          :value="abc" \r
          @input="emit('update:abc',$event.target.value)"\r
       >\r
     </div>\r
   </template>\r
   \r
   <script setup lang="ts" name="AtguiguInput">\r
     // 接收props\r
     defineProps(['abc'])\r
     // 声明事件\r
     const emit = defineEmits(['update:abc'])\r
   <\/script>\r
   \`\`\`\r
\r
5. 如果\`value\`可以更换，那么就可以在组件标签上多次使用\`v-model\`\r
\r
   \`\`\`vue\r
   <AtguiguInput v-model:abc="userName" v-model:xyz="password"/>\r
   \`\`\`\r
\r
   \r
\r
\r
## 6.5.【$attrs 】\r
\r
1. 概述：\`$attrs\`用于实现**当前组件的父组件**，向**当前组件的子组件**通信（**祖→孙**）。\r
\r
2. 具体说明：\`$attrs\`是一个对象，包含所有父组件传入的标签属性。\r
\r
   >  注意：\`$attrs\`会自动排除\`props\`中声明的属性(可以认为声明过的 \`props\` 被子组件自己“消费”了)\r
\r
父组件：\r
\r
\`\`\`vue\r
<template>\r
  <div class="father">\r
    <h3>父组件</h3>\r
		<Child :a="a" :b="b" :c="c" :d="d" v-bind="{x:100,y:200}" :updateA="updateA"/>\r
  </div>\r
</template>\r
\r
<script setup lang="ts" name="Father">\r
	import Child from './Child.vue'\r
	import { ref } from "vue";\r
	let a = ref(1)\r
	let b = ref(2)\r
	let c = ref(3)\r
	let d = ref(4)\r
\r
	function updateA(value){\r
		a.value = value\r
	}\r
<\/script>\r
\`\`\`\r
\r
子组件：\r
\r
\`\`\`vue\r
<template>\r
	<div class="child">\r
		<h3>子组件</h3>\r
		<GrandChild v-bind="$attrs"/>\r
	</div>\r
</template>\r
\r
<script setup lang="ts" name="Child">\r
	import GrandChild from './GrandChild.vue'\r
<\/script>\r
\`\`\`\r
\r
孙组件：\r
\r
\`\`\`vue\r
<template>\r
	<div class="grand-child">\r
		<h3>孙组件</h3>\r
		<h4>a：{{ a }}</h4>\r
		<h4>b：{{ b }}</h4>\r
		<h4>c：{{ c }}</h4>\r
		<h4>d：{{ d }}</h4>\r
		<h4>x：{{ x }}</h4>\r
		<h4>y：{{ y }}</h4>\r
		<button @click="updateA(666)">点我更新A</button>\r
	</div>\r
</template>\r
\r
<script setup lang="ts" name="GrandChild">\r
	defineProps(['a','b','c','d','x','y','updateA'])\r
<\/script>\r
\`\`\`\r
\r
## 6.6. 【$refs、$parent】\r
\r
1. 概述：\r
\r
   * \`$refs\`用于 ：**父→子。**\r
   * \`$parent\`用于：**子→父。**\r
\r
2. 原理如下：\r
\r
   | 属性      | 说明                                                     |\r
   | --------- | -------------------------------------------------------- |\r
   | \`$refs\`   | 值为对象，包含所有被\`ref\`属性标识的\`DOM\`元素或组件实例。 |\r
   | \`$parent\` | 值为对象，当前组件的父组件实例对象。                     |\r
\r
## 6.7. 【provide、inject】\r
\r
1. 概述：实现**祖孙组件**直接通信\r
\r
2. 具体使用：\r
\r
   * 在祖先组件中通过\`provide\`配置向后代组件提供数据\r
   * 在后代组件中通过\`inject\`配置来声明接收数据\r
\r
4. 具体编码：\r
\r
   【第一步】父组件中，使用\`provide\`提供数据\r
\r
   \`\`\`vue\r
   <template>\r
     <div class="father">\r
       <h3>父组件</h3>\r
       <h4>资产：{{ money }}</h4>\r
       <h4>汽车：{{ car }}</h4>\r
       <button @click="money += 1">资产+1</button>\r
       <button @click="car.price += 1">汽车价格+1</button>\r
       <Child/>\r
     </div>\r
   </template>\r
   \r
   <script setup lang="ts" name="Father">\r
     import Child from './Child.vue'\r
     import { ref,reactive,provide } from "vue";\r
     // 数据\r
     let money = ref(100)\r
     let car = reactive({\r
       brand:'奔驰',\r
       price:100\r
     })\r
     // 用于更新money的方法\r
     function updateMoney(value:number){\r
       money.value += value\r
     }\r
     // 提供数据\r
     provide('moneyContext',{money,updateMoney})\r
     provide('car',car)\r
   <\/script>\r
   \`\`\`\r
   \r
   > 注意：子组件中不用编写任何东西，是不受到任何打扰的\r
   \r
   【第二步】孙组件中使用\`inject\`配置项接受数据。\r
   \r
   \`\`\`vue\r
   <template>\r
     <div class="grand-child">\r
       <h3>我是孙组件</h3>\r
       <h4>资产：{{ money }}</h4>\r
       <h4>汽车：{{ car }}</h4>\r
       <button @click="updateMoney(6)">点我</button>\r
     </div>\r
   </template>\r
   \r
   <script setup lang="ts" name="GrandChild">\r
     import { inject } from 'vue';\r
     // 注入数据\r
    let {money,updateMoney} = inject('moneyContext',{money:0,updateMoney:(x:number)=>{}})\r
     let car = inject('car')\r
<\/script>\r
   \`\`\`\r
\r
\r
## 6.8. 【pinia】\r
\r
参考之前\`pinia\`部分的讲解\r
\r
## 6.9. 【slot】\r
\r
### 1. 默认插槽\r
\r
![img](http://49.232.112.44/images/default_slot.png)\r
\r
\`\`\`vue\r
父组件中：\r
        <Category title="今日热门游戏">\r
          <ul>\r
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>\r
          </ul>\r
        </Category>\r
子组件中：\r
        <template>\r
          <div class="item">\r
            <h3>{{ title }}</h3>\r
            <!-- 默认插槽 -->\r
            <slot></slot>\r
          </div>\r
        </template>\r
\`\`\`\r
\r
### 2. 具名插槽\r
\r
\`\`\`vue\r
父组件中：\r
        <Category title="今日热门游戏">\r
          <template v-slot:s1>\r
            <ul>\r
              <li v-for="g in games" :key="g.id">{{ g.name }}</li>\r
            </ul>\r
          </template>\r
          <template #s2>\r
            <a href="">更多</a>\r
          </template>\r
        </Category>\r
子组件中：\r
        <template>\r
          <div class="item">\r
            <h3>{{ title }}</h3>\r
            <slot name="s1"></slot>\r
            <slot name="s2"></slot>\r
          </div>\r
        </template>\r
\`\`\`\r
\r
### 3. 作用域插槽 \r
\r
1. 理解：<span style="color:red">数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。</span>（新闻数据在\`News\`组件中，但使用数据所遍历出来的结构由\`App\`组件决定）\r
\r
3. 具体编码：\r
\r
   \`\`\`vue\r
   父组件中：\r
         <Game v-slot="params">\r
         <!-- <Game v-slot:default="params"> -->\r
         <!-- <Game #default="params"> -->\r
           <ul>\r
             <li v-for="g in params.games" :key="g.id">{{ g.name }}</li>\r
           </ul>\r
         </Game>\r
   \r
   子组件中：\r
         <template>\r
           <div class="category">\r
             <h2>今日游戏榜单</h2>\r
             <slot :games="games" a="哈哈"></slot>\r
           </div>\r
         </template>\r
   \r
         <script setup lang="ts" name="Category">\r
           import {reactive} from 'vue'\r
           let games = reactive([\r
             {id:'asgdytsa01',name:'英雄联盟'},\r
             {id:'asgdytsa02',name:'王者荣耀'},\r
             {id:'asgdytsa03',name:'红色警戒'},\r
             {id:'asgdytsa04',name:'斗罗大陆'}\r
           ])\r
         <\/script>\r
   \`\`\`\r
\r
\r
\r
# 7. 其它 API\r
\r
## 7.1.【shallowRef 与 shallowReactive 】\r
\r
### \`shallowRef\`\r
\r
1. 作用：创建一个响应式数据，但只对顶层属性进行响应式处理。\r
\r
2. 用法：\r
\r
   \`\`\`js\r
   let myVar = shallowRef(initialValue);\r
   \`\`\`\r
\r
3. 特点：只跟踪引用值的变化，不关心值内部的属性变化。\r
\r
### \`shallowReactive\`\r
\r
1. 作用：创建一个浅层响应式对象，只会使对象的最顶层属性变成响应式的，对象内部的嵌套属性则不会变成响应式的\r
\r
2. 用法：\r
\r
   \`\`\`js\r
   const myObj = shallowReactive({ ... });\r
   \`\`\`\r
\r
3. 特点：对象的顶层属性是响应式的，但嵌套对象的属性不是。\r
\r
### 总结\r
\r
> 通过使用 [\`shallowRef()\`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowref) 和 [\`shallowReactive()\`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive) 来绕开深度响应。浅层式 \`API\` 创建的状态只在其顶层是响应式的，对所有深层的对象不会做任何处理，避免了对每一个内部属性做响应式所带来的性能成本，这使得属性的访问变得更快，可提升性能。\r
\r
\r
\r
## 7.2.【readonly 与 shallowReadonly】\r
\r
### **\`readonly\`**\r
\r
1. 作用：用于创建一个对象的深只读副本。\r
\r
2. 用法：\r
\r
   \`\`\`js\r
   const original = reactive({ ... });\r
   const readOnlyCopy = readonly(original);\r
   \`\`\`\r
\r
3. 特点：\r
\r
   * 对象的所有嵌套属性都将变为只读。\r
   * 任何尝试修改这个对象的操作都会被阻止（在开发模式下，还会在控制台中发出警告）。\r
\r
4. 应用场景：\r
   * 创建不可变的状态快照。\r
   * 保护全局状态或配置不被修改。\r
\r
### **\`shallowReadonly\`**\r
\r
1. 作用：与 \`readonly\` 类似，但只作用于对象的顶层属性。\r
\r
2. 用法：\r
\r
   \`\`\`js\r
   const original = reactive({ ... });\r
   const shallowReadOnlyCopy = shallowReadonly(original);\r
   \`\`\`\r
\r
3. 特点：\r
\r
   * 只将对象的顶层属性设置为只读，对象内部的嵌套属性仍然是可变的。\r
\r
   * 适用于只需保护对象顶层属性的场景。\r
\r
     \r
\r
## 7.3.【toRaw 与 markRaw】\r
\r
### \`toRaw\`\r
\r
1. 作用：用于获取一个响应式对象的原始对象， \`toRaw\` 返回的对象不再是响应式的，不会触发视图更新。\r
\r
   > 官网描述：这是一个可以用于临时读取而不引起代理访问/跟踪开销，或是写入而不触发更改的特殊方法。不建议保存对原始对象的持久引用，请谨慎使用。\r
\r
   > 何时使用？ —— 在需要将响应式对象传递给非 \`Vue\` 的库或外部系统时，使用 \`toRaw\` 可以确保它们收到的是普通对象\r
\r
2. 具体编码：\r
\r
   \`\`\`js\r
   import { reactive,toRaw,markRaw,isReactive } from "vue";\r
   \r
   /* toRaw */\r
   // 响应式对象\r
   let person = reactive({name:'tony',age:18})\r
   // 原始对象\r
   let rawPerson = toRaw(person)\r
   \r
   \r
   /* markRaw */\r
   let citysd = markRaw([\r
     {id:'asdda01',name:'北京'},\r
     {id:'asdda02',name:'上海'},\r
     {id:'asdda03',name:'天津'},\r
     {id:'asdda04',name:'重庆'}\r
   ])\r
   // 根据原始对象citys去创建响应式对象citys2 —— 创建失败，因为citys被markRaw标记了\r
   let citys2 = reactive(citys)\r
   console.log(isReactive(person))\r
   console.log(isReactive(rawPerson))\r
   console.log(isReactive(citys))\r
   console.log(isReactive(citys2))\r
   \`\`\`\r
\r
### \`markRaw\`\r
\r
1. 作用：标记一个对象，使其**永远不会**变成响应式的。\r
\r
   > 例如使用\`mockjs\`时，为了防止误把\`mockjs\`变为响应式对象，可以使用 \`markRaw\` 去标记\`mockjs\`\r
\r
2. 编码：\r
\r
   \`\`\`js\r
   /* markRaw */\r
   let citys = markRaw([\r
     {id:'asdda01',name:'北京'},\r
     {id:'asdda02',name:'上海'},\r
     {id:'asdda03',name:'天津'},\r
     {id:'asdda04',name:'重庆'}\r
   ])\r
   // 根据原始对象citys去创建响应式对象citys2 —— 创建失败，因为citys被markRaw标记了\r
   let citys2 = reactive(citys)\r
   \`\`\`\r
\r
## 7.4.【customRef】\r
\r
作用：创建一个自定义的\`ref\`，并对其依赖项跟踪和更新触发进行逻辑控制。\r
\r
实现防抖效果（\`useSumRef.ts\`）：\r
\r
\`\`\`typescript\r
import {customRef } from "vue";\r
\r
export default function(initValue:string,delay:number){\r
  let msg = customRef((track,trigger)=>{\r
    let timer:number\r
    return {\r
      get(){\r
        track() // 告诉Vue数据msg很重要，要对msg持续关注，一旦变化就更新\r
        return initValue\r
      },\r
      set(value){\r
        clearTimeout(timer)\r
        timer = setTimeout(() => {\r
          initValue = value\r
          trigger() //通知Vue数据msg变化了\r
        }, delay);\r
      }\r
    }\r
  }) \r
  return {msg}\r
}\r
\`\`\`\r
\r
组件中使用：\r
\r
\r
\r
\r
\r
# 8. Vue3新组件\r
\r
## 8.1. 【Teleport】\r
\r
- 什么是Teleport？—— Teleport 是一种能够将我们的**组件html结构**移动到指定位置的技术。\r
\r
\`\`\`html\r
<teleport to='body' >\r
    <div class="modal" v-show="isShow">\r
      <h2>我是一个弹窗</h2>\r
      <p>我是弹窗中的一些内容</p>\r
      <button @click="isShow = false">关闭弹窗</button>\r
    </div>\r
</teleport>\r
\`\`\`\r
\r
## 8.2. 【Suspense】\r
\r
-  等待异步组件时渲染一些额外内容，让应用有更好的用户体验 \r
-  使用步骤： \r
   -  异步引入组件\r
   -  使用\`Suspense\`包裹组件，并配置好\`default\` 与 \`fallback\`\r
\r
\`\`\`tsx\r
import { defineAsyncComponent,Suspense } from "vue";\r
const Child = defineAsyncComponent(()=>import('./Child.vue'))\r
\`\`\`\r
\r
\`\`\`vue\r
<template>\r
    <div class="app">\r
        <h3>我是App组件</h3>\r
        <Suspense>\r
          <template v-slot:default>\r
            <Child/>\r
          </template>\r
          <template v-slot:fallback>\r
            <h3>加载中.......</h3>\r
          </template>\r
        </Suspense>\r
    </div>\r
</template>\r
\`\`\`\r
\r
\r
\r
## 8.3.【全局API转移到应用对象】\r
\r
- \`app.component\`\r
- \`app.config\`\r
- \`app.directive\`\r
- \`app.mount\`\r
- \`app.unmount\`\r
- \`app.use\`\r
\r
## 8.4.【其他】\r
\r
- 过渡类名 \`v-enter\` 修改为 \`v-enter-from\`、过渡类名 \`v-leave\` 修改为 \`v-leave-from\`。\r
\r
\r
- \`keyCode\` 作为 \`v-on\` 修饰符的支持。\r
\r
- \`v-model\` 指令在组件上的使用已经被重新设计，替换掉了 \`v-bind.sync。\`\r
\r
- \`v-if\` 和 \`v-for\` 在同一个元素身上使用时的优先级发生了变化。\r
\r
- 移除了\`$on\`、\`$off\` 和 \`$once\` 实例方法。\r
\r
- 移除了过滤器 \`filter\`。\r
\r
- 移除了\`$children\` 实例 \`propert\`。\r
\r
  ......\r
`;export{n as default};
