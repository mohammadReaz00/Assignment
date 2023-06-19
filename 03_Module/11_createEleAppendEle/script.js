const myList = document.getElementById("myList");

function createList() {
  const myList = document.getElementById("myList");

  for (let i = 1; i <= 5; i++) {
    // Create a new list item
    const listItem = document.createElement("li");

    listItem.textContent = i;

    myList.appendChild(listItem);
  }
}

createList();
