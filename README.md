<div align="center">
<br><br>

<img alt="网易云音乐" width="80px" height="80px" src="https://github.com/Groupguanfang/Netease-Vite/blob/master/src/assets/logo.png?raw=true" />

## 网易云音乐TV版
[📦️下载最新APK安装包](https://github.com/Groupguanfang/Netease-Vite/releases)

</div>

## 特点 🎶
* 📝使用Vite+Vue2+Router+VueX全家桶制作而成
* 📽️支持MV播放

## 部署 📦
### 本地运行与打包 📂
请确保您的电脑同时安装了npm与yarn。
```
npm run setup
```
或者
```
yarn setup
```
或者
```
npm install && yarn
```
之后，可以使用`npm run dev`或者`yarn dev`运行项目，  
也可以使用`npm run build`或者`yarn build`生成线上版本。  
此时`./dist`文件夹内便是线上版本的文件了，可以将其放到服务器上访问。
### 打包成APP 📲
本应用使用Uni-App打包成安卓APP。方法如下：
#### 第一步
下载HBuilderX，[官网直达>>](https://www.dcloud.io/hbuilderx.html)  
安装之后运行HbuilderX。  
在HbuilderX中新建5+APP项目,创建项目成功后，除了`manifest.json`文件外，其他文件全部删除。
#### 第二步
使用`npm run build`或者`yarn build`生成线上版本后，将`./dist`文件夹内的所有文件复制粘贴到HbuilderX。
#### 第三步
配置`manifest.json`,设置应用启动图标等。  
权限可以全都不勾选，记住一定要勾选运行横屏！要不然到电视上可就面目全非。
之后右键选择云打包成APP即可。