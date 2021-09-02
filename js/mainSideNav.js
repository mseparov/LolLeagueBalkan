const sidenav = document.createElement('sidenav');
sidenav.innerHTML = `
    <div class="sidenav">
        <br><br><br><br><br><br><br><br>
        <a href="index.html" class="color1">Teams</a>
        <a href="standings.html" class="color2">Standings</a>
        <a href="schedule.html" class="color3">Schedule</a>
        <a href="inforules.html" class="color4">Rules</a>
        <a href="https://www.facebook.com/LoL-Liga-Balkan-174434892711834/?notif_id=1604785138708838&notif_t=page_name_change&ref=notif"><img src="Slike/facebook.png" id="fb"></a>
        <a href="https://top.gg/servers/775464706076966952"><img src="Slike/discord.png" id="dc"></a>
        <a href="https://leaguebh.000webhostapp.com/index.html"><img src="Slike/Logo_page.png" id="logo_page"></a>
    </div>
`

const teamSideNav = document.createElement('teamSideNav');
teamSideNav.innerHTML = `
<div class="sidenav">
    <br><br><br><br><br><br><br><br>
    <a href="../index.html">Teams</a>
    <a href="../standings.html">Standings</a>
    <a href="../schedule.html">Schedule</a>
    <a href="../inforules.html">Rules</a>
    <br>
    <br>
    <a href="" id = "href1">Team Info</a>
    <a href="" id = "href2">Players</a>
    <a href="" id = "href3">History</a>
    <a href="https://www.facebook.com/LoL-Liga-Balkan-174434892711834/?notif_id=1604785138708838&notif_t=page_name_change&ref=notif"><img src="../Slike/facebook.png" id="fb"></a>
    <a href="https://top.gg/servers/775464706076966952"><img src="../Slike/discord.png" id="dc"></a>
    <a href="https://leaguebh.000webhostapp.com/index.html"><img src="../Slike/Logo_page.png" id="logo_page"></a>
</div>
`

const teamSideNav2 = document.createElement('teamSideNav2');
teamSideNav2.innerHTML = `
<div class="sidenav">
    <br><br><br><br><br><br><br><br>
    <a href="index.html">Teams</a>
    <a href="standings.html">Standings</a>
    <a href="schedule.html">Schedule</a>
    <a href="inforules.html">Rules</a>
    <br>
    <br>
    <a href="standings.html">Groups</a>
    <a href="knockout.html">Knockouts</a>
    <a href="https://www.facebook.com/LoL-Liga-Balkan-174434892711834/?notif_id=1604785138708838&notif_t=page_name_change&ref=notif"><img src="Slike/facebook.png" id="fb"></a>
    <a href="https://top.gg/servers/775464706076966952"><img src="Slike/discord.png" id="dc"></a>
    <a href="https://leaguebh.000webhostapp.com/index.html"><img src="Slike/Logo_page.png" id="logo_page"></a>
</div>
`

var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);

if(
page == "index.html" ||
page == "schedule.html" ||
page == "inforules.html"
){
document.body.appendChild(sidenav);
} else if(page == "standings.html" || page == "knockout.html") {
document.body.appendChild(teamSideNav2)
} else {
document.body.appendChild(teamSideNav)
}

var path2 = window.location.pathname;
var page2 = path2.split("/")[1] // [2] za local [1] za public
console.log(page2);

//                                              ovo je za local                                        ovo je za public
var teamindex1 =  /* "/" +"Stranica%20za%20turnir%20NEW/"  + page2 + "/" + "teaminfo.html";  */ "/" + page2 + "/" + "teaminfo.html";
var href2 = document.getElementById("href1").href = teamindex1;


var teamindex2 =  /* "/" +"Stranica%20za%20turnir%20NEW/"  + page2 + "/" + "teamplayers.html";  */ "/" + page2 + "/" + "teamplayers.html";
var href2 = document.getElementById("href2").href = teamindex2;


var teamindex3 = /* "/" +"Stranica%20za%20turnir%20NEW/"  + page2 + "/" + "teamhistory.html"; */ "/" + page2 + "/" + "teamhistory.html";
var href2 = document.getElementById("href3").href = teamindex3;


console.log(teamindex);

/*  ACTIVE LINK DA BUDE DRUGE BOJE
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const color3 = document.querySelector(".color3")
const color4 = document.querySelector(".color4")

if(page == "index.html") {
color1.style.background = "green";
}
*/
