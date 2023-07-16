async function f(){
    try{
    console.log('a')
    console.log('b')
    const g=await new Promise((res,rej)=>{
        setTimeout(()=>{
        //console.log('kamon acho?')
        res('c')
    },1000)    
  })    
    console.log(g)
    const g1=await new Promise((res,rej)=>{
        setTimeout(()=>{
        //console.log('bhalo to!')
        res('d')
    },0)    
  })    
    console.log(g1)
    console.log('e')
    }
    catch(err){
        console.log(err)
    }
}
f()

