//...
function $get(id) {
	return document.getElementById(id);
}


//初始动效
function unfold() {
	$get('inputId').style.setProperty("width", "700px");
	$get('inputId').style.setProperty("height", "60px");
	$get('hitokoto').style.setProperty("opacity", "1");
	$get('header').style.setProperty("letter-spacing", "0px");
	$get('header').style.setProperty("opacity", "80%");
	$get('choose').style.setProperty("opacity", "30%");
	$get('clickButton').style.setProperty("opacity", "30%");
	for (var i = 0; i < nameLength; i++) {
		document.getElementsByClassName('starWeb')[i].style.setProperty("height", "54px");
		document.getElementsByClassName('webName')[i].style.setProperty("opacity", "1");
		document.getElementsByClassName('icon')[i].style.setProperty("height", "30px");
	}
}


//标题变宽
function spacing() {
	$get('header').style.setProperty("letter-spacing", "2px");
}

function recoverSpacing() {
	$get('header').style.setProperty("letter-spacing", "0");
}


//选择搜索引擎
var choice = 1;

function showEngine(a, b, c, d, e) {
	$get(a).style.setProperty("display", "inline");
	$get(b).style.setProperty("display", "none");
	$get(c).style.setProperty("display", "none");
	$get(d).style.setProperty("display", "none");
	$get(e).style.setProperty("display", "none");
}

function chooseEngine() {
	if (choice == 5) { //选择引擎
		choice = 1;
	} else {
		choice++;
	}
	switch (choice) {
		case 1:
			showEngine('engine1', 'engine2', 'engine3', 'engine4', 'engine5');
			break;
		case 2:
			showEngine('engine2', 'engine1', 'engine3', 'engine4', 'engine5');
			break;
		case 3:
			showEngine('engine3', 'engine1', 'engine2', 'engine4', 'engine5');
			break;
		case 4:
			showEngine('engine4', 'engine1', 'engine2', 'engine3', 'engine5');
			break;
		case 5:
			showEngine('engine5', 'engine1', 'engine2', 'engine3', 'engine4');
			break;
	}
}


//搜索框的动态效果
function bigger() {
	$get('inputId').style.setProperty("border-radius", "10px");
	$get('inputId').style.setProperty("opacity", "1");
}

function smaller() {
	$get('inputId').style.setProperty("border-radius", "100px");
	$get('inputId').style.setProperty("opacity", "30%");
}


//进行搜索
function searchEngine() {
	var content = $get('inputId').value;
	if (content) {
		switch (choice) {
			case 1:
				window.open("https://baidu.com/s?wd=" + content);
				break;
			case 2:
				window.open("https://www.sogou.com/web?query=" + content);
				break;
			case 3:
				window.open("https://cn.bing.com/search?q=" + content);
				break;
			case 4:
				window.open("https://www.google.com/search?q=" + content);
				break;
			case 5:
				window.open("https://www.so.com/s?q=" + content);
				break;
		}
	}
}

function searchEnter(event) {
	if (event.keyCode == 13) {
		searchEngine();
	}
}