const mvp = document.createElement('mvp')
mvp.innerHTML = `
<div class="mvp animate__animated animate__fadeIn">
<p class="mvp_value">MVP:</p>
</div>
`
document.body.appendChild(mvp)

const mvp_array = [
{
name: "Stridion ADC",
score: "9/5/9",
team: "Dominarii G.",
vs: "Homunkulusi",
champion: "Annie"
},
{
name: "Mirzas",
score: "8/2/16",
team: "Mechs Gaming",
vs: "Dominarii G.",
champion: "Galio"
},
{
name: "JohnyBuu",
score: "10/4/7",
team: "HEBNAH.",
vs: "Dominarii G.",
champion: "Rumble"
},
{
name: "Glista D Edin",
score: "7/0/18",
team: "Homunkulusi",
vs: "HEBNAHJAC.",
champion: "Sett"
},
{
name: "Leif Ericsson &emsp;",
score: "7/3/6",
team: "Homunkulusi",
vs: "Anlaki",
champion: "LeBlanc"
},
{
name: "EvoStižemBeBo",
score: "2/1/10",
team: "HEBNAHJAC.",
vs: "Martians",
champion: "Graves"
},
{
name: "Ardeidae",
score: "9/5/6",
team: "Mechs Gaming",
vs: "Anlaki",
champion: "Hecarim"
},
{
name: "GoldenZefix &emsp;",
score: "18/4/7",
team: "Martians",
vs: "Anlaki",
champion: "Kassadin"
},
{
name: "Demonth",
score: "12/4/6",
team: "Mechs Gaming",
vs: "Martians",
champion: "Urgot"
},
{
name: "Mirzas",
score: "15/3/9",
team: "Mechs Gaming",
vs: "Homunkulusi",
champion: "Ekko"
},
{
name: "EvoStižemBeBo",
score: "6/2/17",
team: "HEBNAHJAC.",
vs: "Anlaki",
champion: "Kayn"
},
{
name: "ElvisAlistar",
score: "6/9/17",
team: "Mechs Gaming",
vs: "HEBNAHJAC.",
champion: "Leona"
},
{
name: "GoldenZefix",
score: "9/2/5",
team: "Martians",
vs: "Dominarii G.",
champion: "Kayn"
},
{
name: "Killmønger",
score: "2/5/11",
team: "Dominarii G.",
vs: "Homunkulusi",
champion: "Amumu"
},
{
name: "MarkoFire",
score: "3/1/10",
team: "Homunkulusi",
vs: "HEBNAHJAC.",
champion: "Ornn"
},
{
name: "Ardeidae",
score: "9/3/10",
team: "Mechs G.",
vs: "Dominarii G.",
champion: "Graves"
},
{
name: "Leif Ericsson &emsp;",
score: "6/0/16",
team: "Homunkulusi",
vs: "Mechs G.",
champion: "Swain"
},
{
name: "ZuRee &emsp;",
score: "5/3/17",
team: "Martians",
vs: "HEBNAHJAC.",
champion: "Malzahar"
},
{
name: "Nuíí &emsp;",
score: "12/4/8",
team: "Martians",
vs: "Dominarii G.",
champion: "Lucian"
},
{
name: "HAHAHAHAH;",
score: "14/3/9",
team: "HEBNAHAJAC.",
vs: "Mechs G.",
champion: "Vayne"
}
]

var path3 = window.location.pathname;
var page3 = path3.split("/").pop();

const mvp_select = document.querySelector(".mvp")

//IF !!!
if(page3 == "index.html" || page3 == "standings.html" || page3 == "schedule.html" || page3 == "inforules.html" || page3 == "knockout.html") {

function mvp_start(){
let random = Math.floor(Math.random()*mvp_array.length);
mvp_select.innerHTML = "MVP: " + mvp_array[random].name + "<br>" + "Team: " + mvp_array[random].team + "<br>" +
"Champion: " + mvp_array[random].champion + "<br>" + "Score: " + mvp_array[random].score + "<br>" + "Against: " + mvp_array[random].vs ;
mvp_select.style.fontSize = "1.5vw";
mvp_select.style.borderRadius = "8px";
mvp_select.style.padding = "2vw";
mvp_select.style.paddingTop = "8.2vw";
mvp_select.style.backgroundImage = `url(Slike/PoroCrown.png)`;
mvp_select.style.backgroundSize = "cover";
mvp_select.style.backgroundRepeat = "no-repeat";
mvp_select.style.backgroundPositionY = "80%";
mvp_select.style.position = "fixed";
mvp_select.animate([{opacity:"0.1"},{opacity:"1.0"}],{duration:600,fill:"forwards"});
}
mvp_start();


var interval = 7000;
setInterval(() => {
let random = Math.floor(Math.random()*mvp_array.length);
mvp_select.animate([{opacity:"1.0"},{opacity:"0.1"}],{duration:600,fill:"forwards"});
setTimeout(function(){ mvp_select.innerHTML = "MVP: " + mvp_array[random].name + "<br>" + "Team: " + mvp_array[random].team + "<br>" +
"Champion: " + mvp_array[random].champion + "<br>" + "Score: " + mvp_array[random].score + "<br>" + "Against: " + mvp_array[random].vs ; },600)
setTimeout(function(){mvp_select.animate([{opacity:"0.1"},{opacity:"1.0"}],{duration:500,fill:"forwards"})},600);
}, interval);
}
//ELSE !!!
else{
function mvp_start(){
let random = Math.floor(Math.random()*mvp_array.length);
mvp_select.innerHTML = "MVP: " + mvp_array[random].name + "<br>" + "Team: " + mvp_array[random].team + "<br>" +
"Champion: " + mvp_array[random].champion + "<br>" + "Score: " + mvp_array[random].score + "<br>" + "Against: " + mvp_array[random].vs ;
mvp_select.style.fontSize = "1.5vw";
mvp_select.style.borderRadius = "8px";
mvp_select.style.padding = "2vw";
mvp_select.style.paddingTop = "8.2vw";
mvp_select.style.backgroundImage = `url(../Slike/PoroCrown.png)`;
mvp_select.style.backgroundSize = "cover";
mvp_select.style.backgroundRepeat = "no-repeat";
mvp_select.style.backgroundPositionY = "80%";
mvp_select.style.position = "fixed";
mvp_select.animate([{opacity:"0.1"},{opacity:"1.0"}],{duration:600,fill:"forwards"});
}
mvp_start();
        
        
var interval = 7000;
setInterval(() => {
let random = Math.floor(Math.random()*mvp_array.length);
mvp_select.animate([{opacity:"1.0"},{opacity:"0.1"}],{duration:600,fill:"forwards"});
setTimeout(function(){ mvp_select.innerHTML = "MVP: " + mvp_array[random].name + "<br>" + "Team: " + mvp_array[random].team + "<br>" +
"Champion: " + mvp_array[random].champion + "<br>" + "Score: " + mvp_array[random].score + "<br>" + "Against: " + mvp_array[random].vs ; },600)
setTimeout(function(){mvp_select.animate([{opacity:"0.1"},{opacity:"1.0"}],{duration:500,fill:"forwards"})},600);
}, interval);
}


if(window.location=="https://leaguebh.000webhostapp.com/"){
window.location = "https://leaguebh.000webhostapp.com/index.html"
}