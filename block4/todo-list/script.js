const taskList = document.getElementById('lista-tarefas');
const btnAdd = document.getElementById('criar-tarefa');
const btnClearAll = document.getElementById('apaga-tudo');
const btnClearSelected = document.getElementById('remover-selecionado');
const btnClearCompleted = document.getElementById('remover-finalizados');
const input = document.getElementById('texto-tarefa');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');

const btnSave = document.getElementById('salvar-tarefas');
if (typeof Storage !== 'undefined') {
  taskList.innerHTML = localStorage.taskList;
}

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
