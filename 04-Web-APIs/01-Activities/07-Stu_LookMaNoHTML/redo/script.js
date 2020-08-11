// Create your HTML Page via DOM Methods here!
var head = document.createElement("header")
var headH1 = document.createElement("h1");
var headH2 = document.createElement("h2");
var mainBody = document.createElement("main");
var section1 = document.createElement("section");
var img1 = document.createElement("img");
var imgCaption = document.createElement("div");
var section2 = document.createElement("section");
var tableHead = document.createElement("div");
var orderlist = document.createElement("ol");
var listItem1 = document.createElement("li");
var listItem2 = document.createElement("li");

var body = document.body;

headH1.textContent = "This is H1";
headH2.textContent =  "This is H2";
imgCaption.textContent = "This is the pic caption";
tableHead.textContent = "my favourite food";
listItem1.textContent = "chips";
listItem2.textContent = "chocolate";

body.appendChild(head);
head.appendChild(headH1);
head.appendChild(headH2);
body.appendChild(mainBody);
mainBody.appendChild(section1);
section1.appendChild(img1);
section1.appendChild(imgCaption);
mainBody.appendChild(section2);
section2.appendChild(tableHead);
tableHead.appendChild(orderlist);
orderlist.appendChild(listItem1);
orderlist.appendChild(listItem2);

headH1.setAttribute ("style", "margin : auto; text-align : center; color : orange");
headH2.setAttribute ("style", "margin : auto; text-align : center;color : green");
section1.setAttribute ("style", "text-align : center;")
img1.setAttribute ("src", "http://placekitten.com/200/300");
section2.setAttribute("style","margin-top:10px;")