function $get(id) {
	return document.getElementById(id);
}

//实时预览
function changeTitleColor() {
	var titleColor = "#" + $get('titleColor').value;
	$get('titleColorShow').style.setProperty("background-color", titleColor);
}

function changeHitokotoColor() {
	var hitokotoColor = "#" + $get('hitokotoColor').value;
	$get('hitokotoColorShow').style.setProperty("background-color", hitokotoColor);
}

function testTitleColor() {
	if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test("#" + $get('titleColor').value)) {
		$get('titleColor').style.setProperty("color", "black");
		return true;
	} else {
		alert("标题颜色格式不正确");
		$get('titleColor').style.setProperty("color", "red");
		return false;
	}
}

function testHitokotoColor() {
	if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test("#" + $get('hitokotoColor').value)) {
		$get('hitokotoColor').style.setProperty("color", "black");
		return true;
	} else {
		alert("一言颜色格式不正确");
		$get('hitokotoColor').style.setProperty("color", "red");
		return false;
	}
}