const taskList = document.querySelector('#todo-list');
const btnAdd = document.querySelector('#add-task');
const btnClearAll = document.querySelector('#clear-all');
const btnClearSelected = document.querySelector('#selected-remove');
const btnClearCompleted = document.querySelector('#done-remove');
const input = document.querySelector('#task-text');
const btnMoveUp = document.querySelector('#move-up');
const btnMoveDown = document.querySelector('#move-down');

const btnSave = document.querySelector('#save-tasks');

window.onload = function () {
  taskList.innerHTML = localStorage.getItem('taskList');
};

const changeClass = (el, className) => {
  el.classList.contains(className) === false
  ? el.classList.add(className) : el.classList.remove(className);
};

const addTask = () => {
  const newLi = document.createElement('li');
  const newSpan = document.createElement('span');
  newLi.appendChild(newSpan);
  newLi.classList.add('task');

  if (input.value === '') {
    alert('Please insert some text');
  } else {
    newSpan.innerText = input.value;
    taskList.appendChild(newLi);
    input.value = '';
  }
  input.focus();
};
taskList.addEventListener('click', function (elemento) {
  changeClass(elemento.target, 'selected');
});
taskList.addEventListener('dblclick', function (elemento) {
  changeClass(elemento.target, 'completed');
});

const clearAll = () => {
  taskList.innerHTML = '';
};

const specificRemove = (type) => {
  const items = document.querySelectorAll('span');
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].classList.contains(type) === true) items[i].parentElement.remove();
  }
};

btnAdd.addEventListener('click', addTask);

btnClearAll.addEventListener('click', clearAll);

btnClearCompleted.addEventListener('click', () => {
  specificRemove('completed');
});

btnClearSelected.addEventListener('click', () => {
  specificRemove('selected');
});

input.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) addTask();
});

btnSave.addEventListener('click', function () {
  localStorage.setItem('taskList', taskList.innerHTML);
});

btnMoveUp.addEventListener('click', function () {
  const selecionado = document.querySelector('.selected');
  if (selecionado == null) alert('Select a task!');
  if (taskList.children[0] === selecionado) {
    alert('Limite alcançado');
  } else {
    const valorAcima = selecionado.previousElementSibling.innerHTML;
    const valorQSobe = selecionado.innerHTML;
    selecionado.previousElementSibling.innerHTML = valorQSobe;
    selecionado.innerHTML = valorAcima;
    selecionado.classList.remove('selected');
  }
});

btnMoveDown.addEventListener('click', function () {
  const selecionado = document.querySelector('.selected');
  if (selecionado == null) alert('Select a task!');
  if (taskList.children[taskList.children.length - 1] === selecionado) {
    alert('Limite alcançado');
  } else {
    const valorAbaixo = selecionado.nextElementSibling.innerHTML;
    const valorQDesce = selecionado.innerHTML;
    selecionado.nextElementSibling.innerHTML = valorQDesce;
    selecionado.innerHTML = valorAbaixo;
    selecionado.classList.remove('selected');
  }
});
