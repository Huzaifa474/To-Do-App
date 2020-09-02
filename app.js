
var list=document.getElementById('list')
var deletebtn=document.getElementById("delbtn");
function Additems()
{
    //Adding items to todolist
    var todo=document.getElementById('todo-item');
    deletebtn.disabled=false;
    //creating li tag through Javascript
    var li=document.createElement('li');
    var textnode=document.createTextNode(todo.value);
    li.appendChild(textnode);
    list.appendChild(li);
    //create delete button
    var delbutton=document.createElement("button");
    var deltext=document.createTextNode("Delete");
    delbutton.appendChild(deltext);
    li.appendChild(delbutton);
    delbutton.setAttribute("class","butt2");
    delbutton.setAttribute("onclick","Delete(this)");
    //create Edit button
    var edtbtn=document.createElement("button");
    var edttext=document.createTextNode("Edit");
    edtbtn.appendChild(edttext);
    li.appendChild(edtbtn);
    edtbtn.setAttribute("class","butt3");
    edtbtn.setAttribute("onclick","edit(this)");
    todo.value="";
    todo.setAttribute("placeholder","Enter Todo");
}
function DeleteAll()
{
list.innerHTML="";
}
function remove()
{
    var a=confirm("Are you sure");
    if(a==true)
    {
        DeleteAll()
        deletebtn.disabled=true;
    }
    else
    alert("OK");
}

function Delete(e)
{
    e.parentNode.remove();
}
function edit(e)
{
    var val=e.parentNode.firstChild.nodeValue;
    var edtvalue=prompt("Enter Updated Value",val);
    e.parentNode.firstChild.nodeValue=edtvalue;
   
}