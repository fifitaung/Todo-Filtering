const list = document.getElementById("todo-list");

var isPopulated = false
let filteredArray = []
let completedArray = []
let incompletedArray = []
let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];
console.log(arrayOfTodos[0].userId);
console.log(arrayOfTodos[1].userId);

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};
const populateTodos = () => {

    for (let i = 0; i < arrayOfTodos.length; i++){
    const element = document.createElement("li");
    element.appendChild(document.createTextNode(arrayOfTodos[i].title));
    if(arrayOfTodos[i].completed == false){
      element.classList.add("redColor");
    }
    list.appendChild(element)
  }  

  

  for (let i = 0; i < arrayOfTodos.length; i++) {
    const listItem = document.createElement("li");
    const text = document.createTextNode(arrayOfTodos[i].title);
    listItem.appendChild(text);
    list.appendChild(listItem);
    console.log(listItem)
  }
  isPopulated = true;
};

let userInput = 0
const todosById = () =>{
  list.innerHTML = ""
  userInput = Number(document.getElementById("user-id").value)
  filteredArray = arrayOfTodos.filter(array => array.userId == userInput)
  for (let i = 0; i < filteredArray.length; i++){
    const element = document.createElement("li");
    element.appendChild(document.createTextNode(filteredArray[i].title));
    if(arrayOfTodos[i].completed == false){
      element.classList.add("redColor");
    }else{
      element.classList.add("purpleColor");
    }
    list.appendChild(element)
}
}

const filtersTodos = () => {
  if (isPopulated) {
    const listItems = document.querySelectorAll('li')
    for (let i = 0; i < arrayOfTodos.length; i++) {
      list.removeChild(listItems[i])
      console.log('list items removed')
    }
  }
}

const completedTodos = () =>{
  list.innerHTML = ""
  completedArray = arrayOfTodos.filter(array => array.completed == true)
  for (let i = 0; i < completedArray.length; i++){
    const element = document.createElement("li");
    element.appendChild(document.createTextNode(completedArray[i].title)); 
    element.classList.add("purpleColor");
    list.appendChild(element)
}
}

const incompletedTodos = () => {
  list.innerHTML = ""
  incompletedArray = arrayOfTodos.filter(array => array.completed == false)
  for (let i = 0; i < incompletedArray.length; i++){
    const element = document.createElement("li");
    element.appendChild(document.createTextNode(incompletedArray[i].title)); 
    element.classList.add("redColor");
    list.appendChild(element)
}
}

