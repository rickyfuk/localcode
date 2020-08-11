var getImg = document.getElementsByTagName("img")
var getA = document.getElementsByTagName ("a");
var getS1H4 = document.querySelector(".site1 h4");
var addtextS1H4 = document.createTextNode("Try try");

console.log(getS1H4);

getA[0].setAttribute ("href", "https://www.google.com");
getImg[0].setAttribute ("src", "images/image_1.jpg");
getImg[0].setAttribute ("alt", "pic1");
getS1H4.textContent = "Site 1";
getS1H4.appendChild(addtextS1H4);

console.log(getS1H4.textContent);