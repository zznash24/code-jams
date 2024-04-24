const changeColorButton = document.getElementById('changeColorButton');
const addItemButton = document.getElementById('addItemButton');
const newItemInput = document.getElementById('newItemInput');
const myList = document.getElementById('myList');

changeColorButton.addEventListener('click', function() {
  myList.style.backgroundColor = 'lightblue';
});

function addEventListenersToItems() {
  const listItems = myList.querySelectorAll('li');
  listItems.forEach(item => {
    item.addEventListener('click', function() {
      this.classList.toggle('highlight');
    });
  });
}

addEventListenersToItems();

function addTodoItem() {
  const newItemText = newItemInput.value.trim();
  if (newItemText !== '') {
    const newItem = document.createElement('li');
    newItem.textContent = newItemText;
    newItem.addEventListener('click', function() {
      this.classList.toggle('highlight');
    });
    myList.appendChild(newItem);
    newItemInput.value = '';
  } else {
    alert('Please enter a valid todo item!');
  }
}

addItemButton.addEventListener('click', addTodoItem);

newItemInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTodoItem();
  }
});
