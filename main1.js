var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');

//form submmit event
form.addEventListener('submit', addItem);

//delete evenet
itemlist.addEventListener('click', removeItem);

//Add item function
function addItem(e){
    e.preventDefault();

    //get input value
    var newitem=document.getElementById('item').value;

    //create new li ee
    var li= document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node
    li.appendChild(document.createTextNode(newitem));

     //add delete button
     var delbtn=document.createElement('button');
     //add class to delete button
     delbtn.className='btn btn-danger btn-sm float-right delete';
     //Append text node
     delbtn.appendChild(document.createTextNode('X'));
     //append button to li
     li.appendChild(delbtn);

    //add edit button
    var editbtn=document.createElement('button');
    //add class to edit button
    editbtn.className='btn btn-danger btn-sm float-right edit';
    //Append text node
    editbtn.appendChild(document.createTextNode('Edit'));
    //append button to li
    li.appendChild(editbtn);

   


    

    //append li to list
    itemlist.appendChild(li);
}
//remove item function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}