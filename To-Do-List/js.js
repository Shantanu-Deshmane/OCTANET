let input_task = document.getElementById("task_input");
let Add_task = document.querySelector("button");
let list_container = document.querySelector(".list_container");

Add_task.addEventListener('click', () => {
    if (input_task.value === "") {
        alert("please enter the task")
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = `${input_task.value} <i class="ri-delete-bin-6-line"></i>`;
        list_container.appendChild(li);
        input_task.value = "";
        li.querySelector('i').addEventListener('click', () => {
            li.remove();

        })
    }
})
input_task.addEventListener("keypress", () => {
    if (input_task.value === "" && event.key === "Enter") {
        alert("please enter the task")
    }
    else if (event.key === "Enter") {
        event.preventDefault();
        let li = document.createElement('li');
        li.innerHTML = `${input_task.value} <i class="ri-delete-bin-6-line"></i>`;
        list_container.appendChild(li);
        input_task.value = "";
        li.querySelector('i').addEventListener('click', () => {
            li.remove();

        })
    }
})

