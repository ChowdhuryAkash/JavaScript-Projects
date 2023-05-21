console.log("hiii");

const endDate="6 april 2023 01:54:40 PM";


function clock(){
const end=new Date(endDate);
const now=new Date();
const diff=(end-now)/1000;

const day=Math.floor(diff/60/60/24);
const hour=Math.floor((diff/60/60)%24);
const minute=Math.floor((diff/60)%60);
const second=Math.floor(diff%60);
document.getElementById("day").value=day;
document.getElementById("hour").value=hour;
document.getElementById("minute").value=minute;
document.getElementById("second").value=second;
}
clock();
setInterval(clock,1000);


