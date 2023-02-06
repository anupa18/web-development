// const item=document.querySelector('.items');
//     item.children[0].textContent='HELLO';
//     item.children[0].style.color='green';
//     item.children[1].style.color='yellow';
// const b=document.querySelector('.btn');
//     b.addEventListener('click', e=>{
//         e.preventDefault();
//         document.querySelector('.bg-dark').style.background='yellow';
//     })
const b1=document.querySelector('.btn');
    b1.addEventListener('mouseover', e=>{
        e.preventDefault();
        document.querySelector('#my-form').style.background='red';
    })
const b2=document.querySelector('.btn');
    b2.addEventListener('mouseout', e=>{
        e.preventDefault();
        document.querySelector('.container').style.background='green';
    })
const f=document.querySelector("#my-form");
const n=document.querySelector("#name");
const email=document.querySelector("#email");
const m=document.querySelector(".msg");
const u=document.querySelector("#users");

f.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();
    if (n.value===''||e.value===''){
        m.classList.add('error');
        m.textContent='Please enter all fields';

        setTimeout(()=> m.remove(),2000);
    }
    else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${n.value} : ${email.value}`));

        u.appendChild(li);
        n.value='';
        email.value='';
    }
}