# tagCloud

#### 项目介绍
Vue标签云UI组件

#### 安装教程

1. npm install v-tag-cloud -S
2. 全局使用，在main.js中
```js
import tagCloud from 'v-tag-cloud'
Vue.component(tagCloud, 'tagCloud')
```
3. 组件内使用：
```js
import tagCloud from 'v-tag-cloud'
export default {
    components: {
        tagCloud
    }
}
```

#### 使用说明

1. data
String数组。每一项就是一个标签。

2. config
Object对象，配置项。有下面几个参数：

参数|默认值|说明
- | :-: | -: 
radius|120|滚动半径，Number，单位px
maxFont|24|最大字体大小
color|null|字体颜色。为null时随机
rotateAngleXbase|600|X方向旋转速度基数，数越小速度越快
rotateAngleYbase|600|Y方向旋转速度基数，数越小速度越快
hover|true|是否开启悬浮联动