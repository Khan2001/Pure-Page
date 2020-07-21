$(document).ready(function () {
	loadLocalStorage_settings();
	addWeb();
	deleteWeb();
	showIconImg()
	saveBtn();
});

function addWeb() {
	$('#addWeb').click(function () {
		if ($('.starWeb').length > 10) {
			alert("加入站点过多，为了主页的美观纯粹主页强烈建议你加入站点不超过11个，请充分利用好浏览器收藏夹功能！")
		} else {
			var webInf = "<div class='starWeb'><img src='./img/clear.png' class='clearIcon'><p>地址：&nbsp;&nbsp;<input type='text' name='webUrl' class='inputText'></p><p>名称：&nbsp;&nbsp;<input type='text' name='webName' class='inputText'></p><p>图标：&nbsp;&nbsp;<input type='text' name='webIcon' class='inputText'></p><p>图标预览：&nbsp;&nbsp;<img class='iconImg'></p></div><br><br>";
			$('#webList').children('br').last().after(webInf);
		}
	});
}

function deleteWeb() {
	$('.clearIcon').live("click", function () {
		$(this).parent().next().remove();
		$(this).parent().next().remove();
		$(this).parent().remove();
	});
}

function showIconImg() {
	$('input[name="webIcon"]').live("blur", function () {
		$(this).parent().next().children().attr("src", $(this).val());
	});
}

//读取LocalStorage
function loadLocalStorage_settings() {
	if (localStorage.titleColor) {
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
	} else {
		var titleShow = "true";
		var titleColor = "#FCFCFC";
		var titleFont = "Impact, Helvetica, sans-serif";
		var searchEngine = "baidu";
		var backgroundUrl = "https://api.dujin.org/bing/1920.php";
		var hitokotoShow = "true";
		var hitokotoColor = "#F0EBE5";
		var hitokotoFont = "Microsoft Yahei, Helvetica, sans-serif";
		var allWebName = "新浪微博,谷歌翻译,哔哩哔哩,知乎,GitHub";
		var allWebUrl = "https://weibo.com/,https://translate.google.cn/,https://www.bilibili.com/,https://www.zhihu.com/,https://github.com/";
		var allWebIcon = "https://weibo.com/favicon.ico,https://translate.google.cn/favicon.ico,https://www.bilibili.com/favicon.ico,https://www.zhihu.com/favicon.ico,https://github.com/favicon.ico";
		var nameLength = "5";
		localStorage.setItem("titleShow", titleShow);
		localStorage.setItem("titleColor", titleColor);
		localStorage.setItem("titleFont", titleFont);
		localStorage.setItem("searchEngine", searchEngine);
		localStorage.setItem("backgroundUrl", backgroundUrl);
		localStorage.setItem("hitokotoShow", hitokotoShow);
		localStorage.setItem("hitokotoColor", hitokotoColor);
		localStorage.setItem("hitokotoFont", hitokotoFont);
		localStorage.setItem("allWebName", allWebName);
		localStorage.setItem("allWebUrl", allWebUrl);
		localStorage.setItem("allWebIcon", allWebIcon);
		localStorage.setItem("nameLength", nameLength);
		var allWebName = "新浪微博,谷歌翻译,哔哩哔哩,知乎,GitHub".split(",");
		var allWebUrl = "https://weibo.com/,https://translate.google.cn/,https://www.bilibili.com/,https://www.zhihu.com/,https://github.com/".split(",");
		var allWebIcon = "https://weibo.com/favicon.ico,https://translate.google.cn/favicon.ico,https://www.bilibili.com/favicon.ico,https://www.zhihu.com/favicon.ico,https://github.com/favicon.ico".split(",");
	}

	//标题显示
	if (eval(titleShow)) {
		$('input[name="titleShow"]:eq(0)').attr("checked", "checked");
	} else {
		$('input[name="titleShow"]:eq(1)').attr("checked", "checked");
	}

	//标题颜色
	$('input[name="titleColor"]').val(titleColor.substr(1));
	$('#titleColorShow').css("background-color", titleColor);

	//标题字体
	$('input[name="titleFont"]').val(titleFont);

	//搜索引擎
	switch (searchEngine) {
		case "baidu":
			$('input[name="searchEngine"]:eq(0)').attr("checked", "checked");
			break;
		case "sogou":
			$('input[name="searchEngine"]:eq(1)').attr("checked", "checked");
			break;
		case "bing":
			$('input[name="searchEngine"]:eq(2)').attr("checked", "checked");
			break;
		case "google":
			$('input[name="searchEngine"]:eq(3)').attr("checked", "checked");
			break;
		case "360":
			$('input[name="searchEngine"]:eq(4)').attr("checked", "checked");
			break;
	}

	//壁纸
	$('input[name="backgroundUrl"]').val(backgroundUrl);

	//一言显示
	if (eval(hitokotoShow)) {
		$('input[name="hitokotoShow"]:eq(0)').attr("checked", "checked");
	} else {
		$('input[name="hitokotoShow"]:eq(1)').attr("checked", "checked");
	}

	//一言颜色
	$('input[name="hitokotoColor"]').val(hitokotoColor.substr(1));
	$('#hitokotoColorShow').css("background-color", hitokotoColor);

	//一言字体
	$('input[name="hitokotoFont"]').val(hitokotoFont);

	//网站列表
	for (var i = 0; i < eval(nameLength); i++) {
		var webInf = "<div class='starWeb'><img src='./img/clear.png' class='clearIcon'><p>地址：&nbsp;&nbsp;<input type='text' name='webUrl' class='inputText' value='" + allWebUrl[i] + "'></p><p>名称：&nbsp;&nbsp;<input type='text' name='webName' class='inputText' value='" + allWebName[i] + "'></p><p>图标：&nbsp;&nbsp;<input type='text' name='webIcon' class='inputText' value='" + allWebIcon[i] + "'></p><p>图标预览：&nbsp;&nbsp;<img class='iconImg' src='" + allWebIcon[i] + "'></p></div><br><br>";
		$('#webList').children('br').last().after(webInf);
	}
}

//保存
function saveBtn() {
	$('#saveBtn').click(function () {
		var titleShow = $('input[name="titleShow"]:checked').val();
		var titleColor = "#" + $('input[name="titleColor"]').val();
		var titleFont = $('input[name="titleFont"]').val();
		var searchEngine = $('input[name="searchEngine"]:checked').val();
		var backgroundUrl = $('input[name="backgroundUrl"]').val();
		var hitokotoShow = $('input[name="hitokotoShow"]:checked').val();
		var hitokotoColor = "#" + $('input[name="hitokotoColor"]').val();
		var hitokotoFont = $('input[name="hitokotoFont"]').val();
		//保存网站名
		var nameLength = document.getElementsByName("webName").length;
		var allWebName = new Array(nameLength);
		for (var i = 0; i < nameLength; i++) {
			allWebName[i] = document.getElementsByName("webName")[i].value;
		}
		//保存网站地址
		var urlLength = document.getElementsByName("webUrl").length;
		var allWebUrl = new Array(urlLength);
		for (var i = 0; i < urlLength; i++) {
			allWebUrl[i] = document.getElementsByName("webUrl")[i].value;
		}
		//保存网站icon地址
		var iconLength = document.getElementsByName("webIcon").length;
		var allWebIcon = new Array(iconLength);
		for (var i = 0; i < iconLength; i++) {
			allWebIcon[i] = document.getElementsByName("webIcon")[i].value;
		}

		setLocalStorage(titleShow, titleColor, titleFont, searchEngine, backgroundUrl, hitokotoShow, hitokotoColor, hitokotoFont, allWebName, allWebUrl, allWebIcon, nameLength);
	});

}

function setLocalStorage(titleShow, titleColor, titleFont, searchEngine, backgroundUrl, hitokotoShow, hitokotoColor, hitokotoFont, allWebName, allWebUrl, allWebIcon, nameLength) {
	localStorage.setItem("titleShow", titleShow);
	localStorage.setItem("titleColor", titleColor);
	localStorage.setItem("titleFont", titleFont);
	localStorage.setItem("searchEngine", searchEngine);
	localStorage.setItem("backgroundUrl", backgroundUrl);
	localStorage.setItem("hitokotoShow", hitokotoShow);
	localStorage.setItem("hitokotoColor", hitokotoColor);
	localStorage.setItem("hitokotoFont", hitokotoFont);
	localStorage.setItem("allWebName", allWebName);
	localStorage.setItem("allWebUrl", allWebUrl);
	localStorage.setItem("allWebIcon", allWebIcon);
	localStorage.setItem("nameLength", nameLength);
	alert('设置保存成功！');
}