var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');

//form submmit event
form.addEventListener('submit', addItem);

//delete evenet
itemlist.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup',filteritem);

//Add item function
function addItem(e){
    e.preventDefault();

    //get input value
    var newitem=document.getElementById('item').value;
    var newitem1=document.getElementById('description').value;
    //create new li ee
    var li= document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node
    li.appendChild(document.createTextNode(newitem));
    li.appendChild(document.createTextNode(newitem1));
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
            console.log(li)
            itemlist.removeChild(li);
        }
    }
}

//filter function
function filteritem(e){
    //convert text to lower case 
    var text=e.target.value.toLowerCase();
    console.log(text);
    //get list
    var items=itemlist.querySelectorAll('li');
    console.log(items);
    //convert to an arry
    // Array.from(items).forEach(function(item){
    //     var itemName=item.firstChild.textContent;
    //     var itemDescription=item.childNodes[1].textContent;
    //     console.log(itemDescription);
    //     if(itemName.toLowerCase().indexOf(text)!=-1 || itemDescription.toLowerCase().indexOf(text)!=-1){
    //         item.style.display='block';
    //     }else{
    //         item.style.display='none';
    //     }
    // })
    for(var i=0;i<items.length;i++){
        //item=items[i]
        //console.log(items[i])
        var itemName=items[i].firstChild.textContent;
        var itemDescription=items[i].childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1 || itemDescription.toLowerCase().indexOf(text)!=-1){
            items[i].style.display='block';
        }else{
            items[i].style.display='none';
        }

    }
    
}