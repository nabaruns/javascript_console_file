var myRe = "/[\d_]+\.\jpg/g";  //matches all .jpg filenames
var myArr = document.body.innerHTML.match(myRe);

var url = "http://urlname/";

for (var i = 0; i < myArr.length; i++) { 
    console.log(url+myArr[i]);
	  window.open(url+myArr[i]);
}
