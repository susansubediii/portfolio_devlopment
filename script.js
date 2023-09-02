var sidemenu = document.getElementById("sidemenu");
var tablinks=  document.getElementsByClassName("tab-links");
var tabcontents=  document.getElementsByClassName("tab-contents");
function opentab(tabname)
{
  
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tablink.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


function open(){
    sidemenu.style.right = "0";
}

function close(){
    sidemenu.style.right = "-200px";
}