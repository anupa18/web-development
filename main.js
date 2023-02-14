// const item=document.querySelector('.items');
//     item.children[0].textContent='HELLO';
//     item.children[0].style.color='green';
//     item.children[1].style.color='yellow';
// const b=document.querySelector('.btn');
//     b.addEventListener('click', e=>{
//         e.preventDefault();
//         document.querySelector('.bg-dark').style.background='yellow';
//     })
// const b1=document.querySelector('.btn');
//     b1.addEventListener('mouseover', e=>{
//         e.preventDefault();
//         document.querySelector('#my-form').style.background='red';
//     })
// const b2=document.querySelector('.btn');
//     b2.addEventListener('mouseout', e=>{
//         e.preventDefault();
//         document.querySelector('.container').style.background='green';
//     })
var f=document.querySelector("#my-form");
// var name=document.querySelector('#name').value;
// var email=document.querySelector('#email').value;
var m=document.querySelector(".msg");
var u=document.querySelector("#users");



f.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();
    //var name=e.target.name.value;
    //var email=e.target.email.value;
    var name=document.querySelector('#name').value;
    var email=document.querySelector('#email').value;
    if (name===''||email===''){
        m.classList.add('error');
        m.textContent='Please enter all fields';

        setTimeout(()=> m.remove(),2000);
    }
    else{
        // const li=document.createElement('li');
        // li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
        

        //u.appendChild(li);
        let myob={
            name,
            email
        };
        //let myob_se=JSON.stringify(myob);

        localStorage.setItem(myob.name,JSON.stringify(myob));
        //adding li tag
        var li=document.createElement('li');
        li.textContent=myob.name+'-'+myob.email;
        //adding delete button 
        var del=document.createElement('input');
        del.type="buton";
        del.className="button";
        del.value="Delete";
        del.onclick=()=>{
            localStorage.removeItem(myob.name);
            u.removeChild(li);
        }
        li.appendChild(del);
        //adding edit button 
        var edit=document.createElement('input');
        edit.type="buton";
        edit.className="button";
        edit.value="Edit";
        edit.onclick=()=>{
            localStorage.removeItem(myob.name);
            u.removeChild(li);
            document.getElementById('name').value=myob.name;
            document.getElementById('email').value=myob.email;
        }
        li.appendChild(edit);
        
        u.appendChild(li);

        console.log(JSON.parse(localStorage.getItem(myob.name)));
        //console.log(myob_de);
        //name.value='';
        //email.value='';
    }
}