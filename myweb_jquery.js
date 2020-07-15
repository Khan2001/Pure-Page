//搜索联想
$(document).ready(function() {
	loadLocalStorage_web();
	associate();
});
function associate() {
    $('#inputId').keyup(function() {
        var value = this.value;
        var oScript = document.createElement('script');
        if ($('#engine1').css("display")=="inline") {
        	oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + value + '&cb=baidu';
        }
        else if ($('#engine2').css("display")=="inline") {
        	oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + value + '&cb=sogou';
        }
        else if ($('#engine3').css("display")=="inline") {
        	oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + value + '&cb=bing';
        }
        else if ($('#engine4').css("display")=="inline") {
        	oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + value + '&cb=google';
        }
        else {
        	oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + value + '&cb=so360';
        }
        $('body').append(oScript);
        $('#nav').hide(10);
        $('#hitokoto').hide(10);
        $('#inputId').css("border-radius","10px 10px 0 0");
        $('#associate').css("display","inline");
    });
    if(eval(localStorage.hitokotoShow)){
	    $('#inputId').blur(function() {
			$('#nav').show(500);
			$('#hitokoto').show(500);
			setTimeout("$('#associate').css('display','none')",200);
	    });
    }
    else{
    	$('#inputId').blur(function() {
			$('#nav').show(500);
			setTimeout("$('#associate').css('display','none')",200);
	    });
    }
}
function baidu(date) {
    $("#associate_ul li").remove();
    var key = date.s;
    var con = "";
    key.forEach(function(el) {
    	con += '<a href ="https://www.baidu.com/s?wd=' + el + '" target="_blank"><li class="associate_li">' + el + '</li></a>';
        $('#associate_ul').html(con);
    });
}
function sogou(date) {
    $("#associate_ul li").remove();
    var key = date.s;
    var con = "";
    key.forEach(function(el) {
    	con += '<a href ="https://www.sogou.com/web?query=' + el + '" target="_blank"><li class="associate_li">' + el + '</li></a>';
        $('#associate_ul').html(con);
    });
}
function bing(date) {
    $("#associate_ul li").remove();
    var key = date.s;
    var con = "";
    key.forEach(function(el) {
    	con += '<a href ="https://cn.bing.com/search?q=' + el + '" target="_blank"><li class="associate_li">' + el + '</li></a>';
        $('#associate_ul').html(con);
    });
}
function google(date) {
    $("#associate_ul li").remove();
    var key = date.s;
    var con = "";
    key.forEach(function(el) {
    	con += '<a href ="https://www.google.com/search?q=' + el + '" target="_blank"><li class="associate_li">' + el + '</li></a>';
        $('#associate_ul').html(con);
    });
}
function so360(date) {
    $("#associate_ul li").remove();
    var key = date.s;
    var con = "";
    key.forEach(function(el) {
    	con += '<a href ="https://www.so.com/s?q=' + el + '" target="_blank"><li class="associate_li">' + el + '</li></a>';
        $('#associate_ul').html(con);
    });
}

function floatWindow(){
	var floatWindowHtml = '<div id="floatWindow"><span id="close">❌</span><p class="windowText">欢迎访问纯粹主页-Pure Page</p><p class="windowText">这是一个可以自定义界面展示的导航页</p><p class="windowText">注意：👉右边还有三个选项分别是：</p><p class="windowText">⚙️设置、💬讨论反馈与🍗投喂</p><p class="windowText">喜欢这个网站可以Ctrl+D收藏或者设为主页噢</p></div></div>';
	$('body').append(floatWindowHtml);
	$('#close').click(function(){
		$('#floatWindow').remove();
	});
}
//读取cookie
function loadLocalStorage_web(){
	if (localStorage.titleShow) {
		var titleShow = localStorage.titleShow;
		var titleColor = localStorage.titleColor;
		var titleFont = localStorage.titleFont;
		var searchEngine = localStorage.searchEngine;
		var backgroundUrl = localStorage.backgroundUrl;
		var hitokotoShow = localStorage.hitokotoShow;
		var hitokotoColor = localStorage.hitokotoColor;
		var hitokotoFont = localStorage.hitokotoFont;
		var allWebName = localStorage.allWebName.split(",");
		var allWebUrl = localStorage.allWebUrl.split(",");
		var allWebIcon = localStorage.allWebIcon.split(",");
		var nameLength = localStorage.nameLength;
	}
	else{
		floatWindow();
		var titleShow = "true";
		var titleColor = "#FCFCFC";
		var titleFont = "Impact";
		var searchEngine = "baidu";
		var backgroundUrl = "https://api.dujin.org/bing/1920.php";
		var hitokotoShow = "true";
		var hitokotoColor = "#F0EBE5";
		var hitokotoFont = "微软雅黑";
		var allWebName = "新浪微博,谷歌翻译,哔哩哔哩,知乎,GitHub";
		var allWebUrl = "https://weibo.com/,https://translate.google.cn/,https://www.bilibili.com/,https://www.zhihu.com/,https://github.com/";
		var allWebIcon = "https://weibo.com/favicon.ico,https://translate.google.cn/favicon.ico,https://www.bilibili.com/favicon.ico,https://www.zhihu.com/favicon.ico,https://github.com/favicon.ico";
		var nameLength = "5";
		localStorage.setItem("titleShow",titleShow);
		localStorage.setItem("titleColor",titleColor);
		localStorage.setItem("titleFont",titleFont);
		localStorage.setItem("searchEngine",searchEngine);
		localStorage.setItem("backgroundUrl",backgroundUrl);
		localStorage.setItem("hitokotoShow",hitokotoShow);
		localStorage.setItem("hitokotoColor",hitokotoColor);
		localStorage.setItem("hitokotoFont",hitokotoFont);
		localStorage.setItem("allWebName",allWebName);
		localStorage.setItem("allWebUrl",allWebUrl);
		localStorage.setItem("allWebIcon",allWebIcon);
		localStorage.setItem("nameLength",nameLength);
		var allWebName = "新浪微博,谷歌翻译,哔哩哔哩,知乎,GitHub".split(",");
		var allWebUrl = "https://weibo.com/,https://translate.google.cn/,https://www.bilibili.com/,https://www.zhihu.com/,https://github.com/".split(",");
		var allWebIcon = "https://weibo.com/favicon.ico,https://translate.google.cn/favicon.ico,https://www.bilibili.com/favicon.ico,https://www.zhihu.com/favicon.ico,https://github.com/favicon.ico".split(",");
	}
	(function (win) {
        window.nameLength = nameLength;
    }());
	//loadTitleShow();
	if (eval(titleShow)) {
		$('#header').css("display","inline-block");
		$('#bar').css("margin-top","0");
	}
	else{
		$('#header').css("display","none");
		$('#bar').css("margin-top","320px");
	}

	//loadtitleColor();
	$('#header').css("color",titleColor);

	//loadtitleFont();
	$('#header').css("font-family",titleFont);
	
	//loadsearchEngine();
	switch(searchEngine){
		case "baidu":showEngine('engine1','engine2','engine3','engine4','engine5');break;
		case "sogou":showEngine('engine2','engine1','engine3','engine4','engine5');break;
		case "bing":showEngine('engine3','engine1','engine2','engine4','engine5');break;
		case "google":showEngine('engine4','engine1','engine2','engine3','engine5');break;
		case "360":showEngine('engine5','engine1','engine2','engine3','engine4');break;
	}
	//loadbackgroundUrl();
	$('body').css("background-image","url(" + backgroundUrl + ")");
	//loadhitokotoShow();
	if (eval(hitokotoShow)) {
		$('#hitokoto').css("display","inline-block");
	}
	else{
		$('#hitokoto').css("display","none");
	}

	//loadhitokotoColor();
	$('#hitokoto').css("color",hitokotoColor);

	//loadhitokotoFont();
	$('#hitokoto').css("font-family",hitokotoFont);

	//loadallWebName();
	/*var allWebName = .split(",");
	var allWebUrl = .split(",");
	var allWebIcon = .split(",");*/
	var allWebInf = new Array(nameLength);
	for (var i = 0; i < nameLength; i++) {
		allWebInf[i] = '<div class="starWeb"><a href="' + allWebUrl[i]+ '" target="_blank"><li><img src="' + allWebIcon[i] + '" class="icon"></li><span class="webName">' + allWebName[i] + '</span></a></div>';
		$('#nav').append(allWebInf[i]);
	}
}