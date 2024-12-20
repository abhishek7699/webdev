document.object.querySelector(".addTask").addEventListner("click", addTask);


function addTask(){
    const taskInput=document.object.getElementById("#input");
    const taskList=document.object.getElementById("#task");
    const taskText=taskInput.value.trim();

    if(!taskText){
        alert("please Enter a Task");
    }

    const li=document.createElement("li");
    li.textContent=taskText;

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

}