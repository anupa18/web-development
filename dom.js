// console.dir(document);
// console.log(document.all[10]);
// var texttitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// var cls=document.getElementById('cl');
//var items=document.querySelector('.list-group-item');
// var items=document.querySelectorAll('li');
// var header=document.querySelector('#main-header');
// var input=document.querySelector('input');
// var submit=document.querySelector('input[type="submit"]');
//var lastitems=document.querySelector('.list-group-item:last-child');
//var seconditems=document.querySelector('.list-group-item:nth-child(2)');
//var thirditems=document.querySelector('.list-group-item:nth-child(3)');
//var odd=document.querySelectorAll('li:nth-child(odd)');
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
// header.style.borderBottom='solid 4px #ccc';
// input.value='Hello';
// submit.value='SEND';
//lastitems.style.color='blue';
//seconditems.style.backgroundColor='coral';
//thirditems.style.display='none';
// console.log(items);
// items[1].style.color='green';
// for (var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }

var listitems=document.querySelector('#items');
// //parentElement
console.log(listitems.parentElement);
listitems.parentElement.style.backgroundColor='#f4f4f4';

// //firstchild
console.log(listitems.firstChild);
// //fisrtElementChild
console.log(listitems.firstElementChild);
listitems.firstElementChild.textContent='Hello 1';

// //lastchild
console.log(listitems.lastChild);
// //lastElementChild
console.log(listitems.lastElementChild);
listitems.lastElementChild.textContent='Hello 4';

//nextSibling
console.log(listitems.nextSibling);
//nextElementSibling
console.log(listitems.nextElementSibling);

//previousSibling
console.log(listitems.previousSibling);
//PreviousElementSibling
console.log(listitems.previousElementSibling);
listitems.previousElementSibling.style.color='green';

//createElement

//create a div
var newDiv=document.createElement('div');
//create a calss
newDiv.className='hello';
//create a id
newDiv.id='hello1';
//add attribute
newDiv.setAttribute('title', 'Hello Div');
//create text node
var newDivtext=document.createTextNode('Hello world');
//add text to div
newDiv.appendChild(newDivtext);
var container=document.querySelector('header .container');
var h1=document.querySelector('header #header-title');
container.insertBefore(newDiv,h1);
console.log(newDiv);

var li=document.createElement('li');
li.className='list-group-item';
var text=document.createTextNode('Hello World');
li.appendChild(text);
//var container1=document.querySelector('ul .list-group');
var varible=document.getElementById('items');
varible.insertBefore(li,varible.children[0]);