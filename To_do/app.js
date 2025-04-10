

let textArea = document.querySelector("#todoIn"); // input field
let taskList = document.querySelector("#todolist"); // UL element
let addButton = document.querySelector("#addbttn"); // button

text=textArea.innerText;

addButton.addEventListener("click", addtodo);

textArea.addEventListener("keypress", function(e){
if (e.key=== "Enter"){
    addtodo();
}
});

function addtodo(){
    new_text=textArea.value.trim();

    if(new_text!=""){
        const li=document.createElement("li")
        li.innerText=new_text
        taskList.appendChild(li)
        textArea.value=""
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Delete";
        removeBtn.onclick = () => li.remove();
        li.appendChild(removeBtn);
    }


}
