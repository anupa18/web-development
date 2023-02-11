// console.dir(document);
// console.log(document.all[10]);
// var texttitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// var cls=document.getElementById('cl');
//var items=document.querySelector('.list-group-item');
var items=document.querySelectorAll('.list-group-item');
var header=document.querySelector('#main-header');
var input=document.querySelector('input');
var submit=document.querySelector('input[type="submit"]');
var lastitems=document.querySelector('.list-group-item:last-child');
//var seconditems=document.querySelector('.list-group-item:nth-child(2)');
var thirditems=document.querySelector('.list-group-item:nth-child(3)');
var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
//var li=document.getElementsByTagName('li');
// console.log(texttitle.textContent)
// texttitle.textContent='Hello';
// texttitle.innerHTML='<h3>Hi</h3>';
//texttitle.style.borderBottom='solid 2px #000';
// header.style.borderBottom='solid 2px #000';
// cls.style.color='green';
// cls.style.fontWeight='bold';
// li[2].style.backgroundColor='green';
// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
// }
//items.style.color='red';
header.style.borderBottom='solid 4px #ccc';
input.value='Hello';
submit.value='SEND';
lastitems.style.color='blue';
//seconditems.style.backgroundColor='coral';
//thirditems.style.display='none';
items[1].style.color='green';
for (var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }
