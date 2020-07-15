function $get(id){
 return document.getElementById(id);
}

//实时预览
function changeTitleColor(){
	var titleColor = "#" + $get('titleColor').value;
	$get('titleColorShow').style.setProperty("background-color",titleColor);
}
function changeHitokotoColor(){
	var hitokotoColor = "#" + $get('hitokotoColor').value;
	$get('hitokotoColorShow').style.setProperty("background-color",hitokotoColor);
}

//设置判断
/*function testAll(){
	if(testTitleColor()&&testHitokotoColor()&&testBackgroundUrl()){
		alert('alltrue');
	}
	else{
		alert('false');
	}
}*/
function testTitleColor(){
	if(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test("#" + $get('titleColor').value)){
		$get('titleColor').style.setProperty("color","black");
		return true;
	}
	else{
		alert("标题颜色格式不正确");
		$get('titleColor').style.setProperty("color","red");
		return false;
	}
}
function testHitokotoColor(){
	if(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test("#" + $get('hitokotoColor').value)){
		$get('hitokotoColor').style.setProperty("color","black");
		return true;
	}
	else{
		alert("一言颜色格式不正确");
		$get('hitokotoColor').style.setProperty("color","red");
		return false;
	}
}
/*function testBackgroundUrl(){
	var strRegex = '^((https|http|ftp|rtsp|mms)?://)'
	+ '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' //ftp的user@ 
	+ '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184 
	+ '|' // 允许IP和DOMAIN（域名） 
	+ '([0-9a-z_!~*\'()-]+.)*' // 域名- www. 
	+ '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名 
	+ '[a-z]{2,6})' // first level domain- .com or .museum 
	+ '(:[0-9]{1,4})?' // 端口- :80 
	+ '((/?)|' // a slash isn't required if there is no file name 
	+ '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$'; 
	var re = new RegExp(strRegex); 
	if (re.test($get('backgroundUrl').value)) {
		$get('backgroundUrl').style.setProperty("color","black");
		return true;
	}
	else{
		alert("输入壁纸的URL格式不正确");
		$get('backgroundUrl').style.setProperty("color","red");
		return false;
	}
}*/