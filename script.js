console.log("🏠 Life Dashboard loaded!");

const welcomeMessage = document.querySelector("header p");

welcomeMessage.textContent =
    "Welcome! Let's make today productive. 🚀";
function addTask() {
    const input = document.querySelector("#taskInput");
    const taskList = document.querySelector("#taskList");

    const taskText = input.value;

    if (taskText === "") {
        return;
    }

    const task = document.createElement("li");
    task.textContent = taskText;

    taskList.appendChild(task);

    input.value = "";
}
