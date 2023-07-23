const f=document.getElementById("my-form")
const ul=document.getElementById("users")
const m=document.querySelector(".msg")
f.addEventListener('submit',onsubmit)
window.addEventListener('DOMContentLoaded',load)
const ex=document.getElementById("expense")
const d=document.getElementById("description")
const c=document.getElementById("category")

function onsubmit(e){
    e.preventDefault()
    if(ex.value===''||d.value===''||c.value===''){
        m.classList.add('error');
        m.textContent="please enter some value";
        setTimeout(()=>m.remove(),5000)
    }
    else{
        let myobj={
            expense:ex.value,
            description:d.value,
            category:c.value
        };
    
    axios.post("https://crudcrud.com/api/25fa5ebb028d4dceacde350c4bc853f6/expense",myobj)
    .then((res)=>{
        show(res.data)
        // console.log(res)
    })
    .catch((err)=>{
        ul.innerHTML=ul.innerHTML+"<h4>Some thing went wrong</h4>"
        console.log(err)})

    
    
    }
}    
    
    //localStorage.setItem(myobj.description,JSON.stringify(myobj))
    //show(myobj)
    function show(obj){
    var li=document.createElement('li')
    li.appendChild(document.createTextNode(`${obj.expense} - ${obj.description} - ${obj.category}`))
    const del=document.createElement('input')
    del.type='button';
    del.className='button';
    del.value='Delete Expense';
    del.onclick=()=>{
        localStorage.removeItem(obj.description)
        ul.removeChild(li)
    }
    const edit=document.createElement('input')
    edit.className='edit'
    edit.type='button'
    edit.value='Edit Expense'
    edit.onclick=()=>{
        localStorage.removeItem(obj.description)
        ul.removeChild(li)
        
        ex.value=obj.expense
        d.value=obj.description
        c.value=obj.category
        
    }
    li.appendChild(del)
    li.appendChild(edit)
    ul.appendChild(li)
    
    //console.log(document.getElementById("expense").value)
    //console.log(JSON.parse(localStorage.getItem(myobj.description)))
    }
  //}
//} 
    
// }
function load(e){
    e.preventDefault()
    axios.get("https://crudcrud.com/api/25fa5ebb028d4dceacde350c4bc853f6/expense")
    .then((res)=>{
        console.log(res)
        for(var i=0;i<res.data.length;i++){
            show(res.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)})
}

