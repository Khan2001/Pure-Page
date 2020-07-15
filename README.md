#  Pure Page

- 本项目是自建网站 www.purepage.cn **纯粹主页**的源代码仓库，同时记录了开发的一些过程和版本信息

- 本项目是本人第一个HTML+CSS+JavaScript(Jquery)实战项目，如果代码有纰漏在所难免，望指正

- 在开发的过程中，因为购买了服务器，所以学习了些许Linux操作技术，同时还学习了Markdown的语法，这也是我第一次尝试写README.md文本，可能也存在一些不规范的地方

  

  ## 业务逻辑

  由于是第一次开发网站，所以对于节奏没有控制的好，构建完整的业务逻辑图是在v0.8之后才想到进行的，在最后构建LocalStorage的读写时有很大的帮助

  ![业务逻辑图](https://s1.ax1x.com/2020/07/13/Utih34.png)

  首先进入的是myweb_html.html（主界面），随后可以跳转到设置页，利用LocalStorage完成用户信息的本地存储

  

  ## 所保存的默认LocalStorage设置

  > titltShow = "true/false"
  > titleColor = "#FCFCFC"
  > titleFont = "Impact"
  > searchEngine = "baidu/sogou/bing/google/360"
  > backgroundImage = "https://api.dujin.org/bing/1920.php"
  > hitokotoShow = "true/false"
  > hitokotoColor = "#F0EBE5"
  > hitokotoFont = "微软雅黑"
  >
  > webUrl[0] = "https://weibo.com/"
  > webName[0] = "新浪微博"
  > webIcon[0] = "https://weibo.com/favicon.ico"
  >
  > webUrl[1] = "https://translate.google.cn/"
  > webName[1] = "谷歌翻译"
  > webIcon[1] = "https://translate.google.cn/favicon.ico"
  >
  > webUrl[2] = "https://www.bilibili.com/"
  > webName[2] = "哔哩哔哩"
  > webIcon[2] = "https://www.bilibili.com/favicon.ico"
  >
  > webUrl[3] = "https://www.zhihu.com/"
  > webName[3] = "知乎"
  > webIcon[3] = "https://www.zhihu.com/favicon.ico"
  >
  > webUrl[4] = "https://github.com/"
  > webName[4] = "GitHub"
  > webIcon[4] = "https://github.com/favicon.ico"

  

  

  ## 👇以下是版本信息

  v1.0.1

  2020.7.14  加入了当有新访客时会展示一个浮窗的功能

  ### v1.0👉上传的第一个可完整使用的版本

  - v1.0

  2020.7.13  抛弃原先设想的Cookie方法，使用LocalStorage实现了数据保存，可以功能正常且完整地使用

  - *v0.8* 

  *2020.7.10  新创建设置界面，去除更换背景按钮，更换右下角入口*

  - *v0.6*

  *2020.7.5  加入通过外链更换背景功能*

  - *v0.5*

  *2020.7.4  标题，搜索框，导航都加入了动画效果，可选择搜索引擎，底部版权说明更换为一言，右下角加入了反馈页*
  
  - *v0.1* 
  
  *2020.6.25  实现了基本的搜索框和四个网址导航，纯静态，无动画效果，可IP访问*
  
  

