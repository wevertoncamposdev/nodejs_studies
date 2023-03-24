const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  console.log(inputIsValid)

  if (!inputIsValid) {
   return inputElement.classList.add("error");
  }

  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");

  const taskContent = document.createElement("p");

  taskContent.innerText = inputElement.value;

  const deleteItem = document.createElement("i");
  deleteItem.classList.add("far");
  deleteItem.classList.add("fa-trash-alt");

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);
  document.querySelector(".tasks-container").appendChild(taskItemContainer);
};

const handleInputChange = () => {
 const inputIsValid = validateInput();

 if (inputIsValid) {
  return inputElement.classList.remove("error");
 }
};

addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange())