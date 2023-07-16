const blogs =[];
function create1stBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG1'});
            resolve("created1");
        }, 3000)
    }) 
}

//Do not touch these functions below at all
function create2ndBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG2'});
            resolve("created2")
        }, 2000)
    }) 
}


function deleteBlog(){
   //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
   //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
   return new Promise((res,rej)=>{
       setTimeout(()=>{
           if(blogs.length>0){
                const lastele=blogs.pop()
                res(lastele)   
           }
           else{
                rej("ERROR")
           }
       },1000)
   })
}

async function post(){
try{
const f=await create1stBlog()
	console.log(f)

const s=await create2ndBlog()
	console.log(s)

const d=await deleteBlog()
	console.log(d)

const d1=await deleteBlog()
	console.log(d1)
	
}catch(err){
	console.log(err)
}	
}
post()