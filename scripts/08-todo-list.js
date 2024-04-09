-const todoList = [{
  name: 'make dinner',
  dueDate: '2024-04-09'
}, {
  name: 'wash dishes',
  dueDate: '2024-04-09'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // lines 17 and 18 are the long hand version of line 19
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;

    const html = `
    <p>
      ${name} ${dueDate}
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    </p>
  `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const date = dateInputElement.value;

  todoList.push({
    // Lines 47 and 48 do the same as lines 49 and 50
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate
});

  inputElement.value = '';

  renderTodoList();
}