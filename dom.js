// console.dir(document);
// console.log(document.all[10]);
var texttitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
var cls=document.getElementById('cl');
var items=document.getElementsByClassName('list-group-item');
// console.log(texttitle.textContent)
// texttitle.textContent='Hello';
// texttitle.innerHTML='<h3>Hi</h3>';
//texttitle.style.borderBottom='solid 2px #000';
header.style.borderBottom='solid 2px #000';
cls.style.color='green';
cls.style.fontWeight='bold';
items[2].style.backgroundColor='green';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}
