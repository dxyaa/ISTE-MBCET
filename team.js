const a1=document.getElementById('team1');
const a2=document.getElementById('team2');
const a3=document.getElementById('team3');
const a4=document.getElementById('team4');
const a5=document.getElementById('team5');
const a6=document.getElementById('team6');
const a7=document.getElementById('team7');
const b1=document.getElementById('th1');
const b2=document.getElementById('th2');
const b3=document.getElementById('th3');
const b4=document.getElementById('th4');
const b5=document.getElementById('th5');
const b6=document.getElementById('th6');
const b7=document.getElementById('th7');

a1.style.display="block";
a2.style.display="none";
a3.style.display="none";
a4.style.display="none";
a5.style.display="none";
a6.style.display="none";
a7.style.display="none";

b1.addEventListener('click',()=>{
    a1.style.display="block";
    a2.style.display="none";
    a3.style.display="none";
    a4.style.display="none";
    a5.style.display="none";
    a6.style.display="none";
    a7.style.display="none";
});
b2.addEventListener('click',()=>{
    a1.style.display="none";
    a2.style.display="block";
    a3.style.display="none";
    a4.style.display="none";
    a5.style.display="none";
    a6.style.display="none";
    a7.style.display="none";
});
b3.addEventListener('click',()=>{
    a1.style.display="none";
    a2.style.display="none";
    a3.style.display="block";
    a4.style.display="none";
    a5.style.display="none";
    a6.style.display="none";
    a7.style.display="none";
});
b4.addEventListener('click',()=>{
    a1.style.display="none";
    a2.style.display="none";
    a3.style.display="none";
    a4.style.display="block";
    a5.style.display="none";
    a6.style.display="none";
    a7.style.display="none";
});
b5.addEventListener('click',()=>{
    a1.style.display="none";
    a2.style.display="none";
    a3.style.display="none";
    a4.style.display="none";
    a5.style.display="block";
    a6.style.display="none";
    a7.style.display="none";
});
b6.addEventListener('click',()=>{
    a1.style.display="none";
    a2.style.display="none";
    a3.style.display="none";
    a4.style.display="none";
    a5.style.display="none";
    a6.style.display="block";
    a7.style.display="none";
});
b7.addEventListener('click',()=>{
    a1.style.display="none";
    a2.style.display="none";
    a3.style.display="none";
    a4.style.display="none";
    a5.style.display="none";
    a6.style.display="none";
    a7.style.display="block";
});