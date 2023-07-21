const todoList=[{
name:'make dinner', 
duedate:'2022-12-22'
} ,{
name:'wash dishes', 
duedate:'2022-02-22'
},{
name:'watch youtube',
duedate:'2022-02-01'
}];
rendertodolist();
function rendertodolist(){
    let todoListHTML='';
for(let i=0;i<todoList.length;i++){
    const todoobj=todoList[i];
    // const name=todoobj.name;
    // const duedate=todoobj.duedate;
 
    const {name, duedate} =todoobj;
    const html=
    ` <div>${name}</div>
    <div>${duedate}</div>
    
    <button  onclick="todoList.splice(${i},1); 
    rendertodolist();" 
    class="delete-todo-button" >Delete</button>
    `;
    todoListHTML+=html;

}
document.querySelector('.js-todo-list').innerHTML=todoListHTML;

}


function AddToDo(){
  
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value;
    const dateinputElement=document.querySelector('.js-due-date-input');
    const duedate=dateinputElement.value;
    todoList.push({ name,duedate });
    
    console.log(todoList);

    inputElement.value='';
  
    rendertodolist();
   
}




