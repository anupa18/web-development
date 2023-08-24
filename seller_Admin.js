const f=document.getElementById("my-form")
const ul=document.getElementById("users")
const m=document.querySelector(".msg")
let totalprice=0
f.addEventListener('submit',onsubmit)
window.addEventListener('DOMContentLoaded',load)
const ex=document.getElementById("expense")
const d=document.getElementById("description")

async function onsubmit(e){
    e.preventDefault()
    if(ex.value===''||d.value===''){
        m.classList.add('error');
        m.textContent="please enter some value";
        setTimeout(()=>m.remove(),3000)
    }
    else{
        let myobj={
            expense:ex.value,
            description:d.value,
            totalexpense:totalexpense.value
        };
    try{
    const res=await axios.post("https://crudcrud.com/api/3902857d42e44583b5cfdf30f4bb6f28/product",myobj)
    
    show(res.data)
    }catch(err){
        ul.innerHTML=ul.innerHTML+"<h4>Some thing went wrong</h4>"
        console.log(err)
    }

}
    
}   
    
function show(obj){
var totalexpense=document.getElementById("totalexpense")
var li=document.createElement('li')
li.appendChild(document.createTextNode(`${obj.expense} - ${obj.description}`))
totalprice+=parseInt(obj.expense)
totalexpense.textContent=`Total Value Worth of  Products: Rs.${totalprice}`
const del=document.createElement('input')
del.type='button';
del.className='button';
del.value='Delete Product';
del.onclick=async()=>{
    try{
        const res = await axios.delete(`https://crudcrud.com/api/3902857d42e44583b5cfdf30f4bb6f28/product/${obj._id}`)
    
            console.log(res)
            ul.removeChild(li)
            totalprice-=parseInt(obj.expense)
            totalexpense.textContent=`Total Value Worth of  Products: Rs.${totalprice}`
        }
    
    catch(err){console.log(err)}
}
li.appendChild(del)
ul.appendChild(li)
}
async function load(e){
    e.preventDefault()
    try{
        const res = await axios.get("https://crudcrud.com/api/3902857d42e44583b5cfdf30f4bb6f28/product")
    
        console.log(res)
        for(var i=0;i<res.data.length;i++){
            show(res.data[i])
        }
    }
    catch(err){
        console.log(err)}
}

