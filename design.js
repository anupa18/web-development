function onsignup(event){
    event.preventDefault();
    // console.log(event.target.n.value)
    // console.log(event.target.email.value)
    // console.log(event.target.ph.value)
    // console.log(event.target.date.value)
    // console.log(event.target.time.value)
    const name=document.getElementById('n').value
    const email=document.getElementById('email').value
    const phone=document.getElementById('ph').value
    const date=document.getElementById('date').value
    const time=document.getElementById('time').value
    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(date)
    console.log(time)
}    