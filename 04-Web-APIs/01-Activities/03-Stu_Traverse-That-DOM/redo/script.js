var getArticle = document.getElementById("articles");
var getMain = document.getElementById("main");
var underline = document.createElement("u");

getArticle.children[0].style.fontSize = "50px;";
getArticle.children[0].firstElementChild.style.color = "blue;";
getArticle.children[0].lastElementChild.setAttribute ("style","color : orange;");
getArticle.setAttribute ("class", "newtype test1;");
getArticle.previousElementSibling.setAttribute ("style","background-color : red;");

getMain.childNodes[3].setAttribute ("style","text-decoration : underline;");

