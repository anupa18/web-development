//AXIOS GLOBAL
axios.defaults.headers.common['X-Auth-Token']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

// GET REQUEST
function getTodos() {
  // axios({
  //   method:'get',
  //   url:'https://jsonplaceholder.typicode.com/todos?_limit=5'
  // })
  // .then(res=>showOutput(res))
  // .catch(err=>console.log(err))
  axios
  .get('https://jsonplaceholder.typicode.com/todos?_limit=5',{timeout:10000})
  .then(res=>showOutput(res))
  .catch(err=>console.log(err))
}

// POST REQUEST
function addTodo() {
  axios
  .post('https://jsonplaceholder.typicode.com/todos',{
  "title": "New todo",
  "completed": false
  })
  .then(res=>showOutput(res))
  .catch(err=>console.log(err))
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios
  // .put('https://jsonplaceholder.typicode.com/todos/1',{
  // "title": "updated todo",
  // "completed": true
  // })
  // .then(res=>showOutput(res))
  // .catch(err=>console.log(err))
  .patch('https://jsonplaceholder.typicode.com/todos/1',{
  "title": "updated todo",
  "completed": true
  })
  .then(res=>showOutput(res))
  .catch(err=>console.log(err))
}

// DELETE REQUEST
function removeTodo() {
  axios
  .delete('https://jsonplaceholder.typicode.com/todos/1',{
  })
  .then(res=>showOutput(res))
  .catch(err=>console.log(err))
}

// SIMULTANEOUS DATA
function getData() {
  axios
  .all([
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
  ])
  .then(axios.spread((todos,posts)=>showOutput(posts)))
  .catch(err=>console.log(err))
}

// CUSTOM HEADERS
function customHeaders() {
  const config={
    headers:{
      'Content-Type':'application/json',
       'Authorization':'token'
    }
  }
  axios
  .post('https://jsonplaceholder.typicode.com/todos',{
  "title": "New todo",
   completed: false
  },config)
  .then(res=>showOutput(res))
  .catch(err=>console.log(err))
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  axios
  .get('https://jsonplaceholder.typicode.com/todoss ')
  .then(res=>showOutput(res))
  .catch(err=>{
    if(err.response){
      console.log(err.response.data)
      console.log(err.response.headers)
      console.log(err.response.status)
    }
    if(err.response.status===404){
      alert('error->Page not found')
    }
  })
  
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES
 axios.interceptors.request.use(
  config=>{
    console.log(
      `${config.method.toUpperCase()} request sent to ${config.url}
      at ${new Date().getTime()}`
    )
    return config
  },
  error=>{
    return Promise.reject(error)
  }
 )

// AXIOS INSTANCES
const atance=axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
});

 atance.get('/albums').then(res=>showOutput(res))

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);