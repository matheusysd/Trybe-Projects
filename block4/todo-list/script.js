const taskList = document.querySelector('#lista-tarefas');
const btnAdd = document.querySelector('#criar-tarefa');
const btnClearAll = document.querySelector('#apaga-tudo');
const btnClearSelected = document.querySelector('#remover-selecionado');
const btnClearCompleted = document.querySelector('#remover-finalizados');
const input = document.querySelector('#texto-tarefa');
const btnMoveUp = document.querySelector('#mover-cima');
const btnMoveDown = document.querySelector('#mover-baixo');

const btnSave = document.querySelector('salvar-tarefas');

window.onload = function () {
  list.innerHTML = localStorage.getItem('list');
};

const changeClass = (el, className) => {
  el.classList.contains(className) === false
  ? el.classList.add(className) : el.classList.remove(className);
};

const addTask = () => {
  const newEl = document.createElement('li');
  newEl.classList.add('task');

  if (input.value === '') {
    alert('Please insert some text');
  } else {
    newEl.innerText = input.value;
    taskList.appendChild(newEl);
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
  const items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].classList.contains(type) === true) items[i].remove();
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
