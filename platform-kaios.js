document.querySelector("#head").innerHTML += `<link rel="stylesheet" type="text/css" href="css/root.css">`;
document.querySelector("#head").innerHTML += `<link rel="stylesheet" type="text/css" href="css/header.css">`;
document.querySelector("#head").innerHTML += `<link rel="stylesheet" type="text/css" href="css/softkey.css">`;

document.querySelector("#placefirst").innerHTML += `<header><span>FrameworkJS r3</span></header>`;

//var insertheaderfirst = document.getElementById('body');
//insertheaderfirst.insertBefore(document.createElement("header"), container.firstChild);
//insertheaderfirst.insertBefore(document.TextNode("<header><span>FrameworkJS r3</span></header>"), container.firstChild);
// This type of JS isn't supported on KaiOS

//document.querySelector("#body").innerHTML += `<div class="statusbar-placeholder"></div><header class="fm-header h1"><span>FrameworkJS r3</span></header>`;
document.querySelector("#body").innerHTML += `<footer class="softkey"><div id="softkey-left">Back</div><div id="softkey-center">RELOAD</div><div id="softkey-right">More</div></footer>`;

document.querySelector("#body").innerHTML += `<style>h1{font-size:25px}span{font-size:12px}h2{font-size:20px}</style>`;
document.querySelector("#landinglogo").innerHTML = `<img width="50px" src="logo.svg"/>`;
document.querySelector("#landingtitle").innerHTML = ``;
