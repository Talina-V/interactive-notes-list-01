// ПЕРЕМЕЩЕНИЕ ЭЛЕМЕНТОВ ВНИЗ И ВВЕРХ

function moveUp(element) {
  if (element.previousElementSibling)
    element.parentNode.insertBefore(element, element.previousElementSibling);
}

function moveDown(element) {
  if (element.nextElementSibling)
    element.parentNode.insertBefore(element.nextElementSibling, element);
}

document.querySelector("ul").addEventListener("click", function (e) {
  if (e.target.className === "down") moveDown(e.target.parentNode);
  else if (e.target.className === "up") moveUp(e.target.parentNode);
});

// Add Sublist

document.getElementById("button").addEventListener("click", function addTodo() {
  var value = document.getElementById("input").value;
  var randomId = Math.random();
  const item =
    `
                <li class="col-list progress">

                  <span class="col-list-size">${value}</span>                 
                  <input type="hidden" id="input" placeholder="Add an item"/>
                  <span class="up">up</span>
                  <span class="down">down</span>
   
                  <div class="btn-container">

                  <div class="remove">    
                    <button id="` +
    randomId +
    `" class="todo del" type="button">Remove Sublist</button>
                  </div>    

                    <button id="btn" class="del" type="button">Add</button>

                  </div>
                
                </li> 
                            
                `;

  const position = "beforeend";

  list.insertAdjacentHTML(position, item);

  document
    .getElementById(randomId)
    .addEventListener("click", function removeTodo() {
      var item = this.closest("li");
      item.remove();
    });
});

// Add List

document
  .getElementById("btn-add")
  .addEventListener("click", function addTodoList() {
    var value = document.getElementById("input").value;
    var randomIdList = Math.random();
    const itemList =
      `
                <li class="col-list list-bg">

                  <span class="col-list-size">${value}</span>                 
                  <input type="hidden" id="input" placeholder="Add an item"/>
                  <span class="up">up</span>
                  <span class="down">down</span>
   
                  <div class="btn-container">
                  <button id="button" class="del" type="button">Add Sublist</button>

                  <div class="remove"> 
                    <button id="` +
      randomIdList +
      `" class="del">Remove</button>
                  </div>
 
                    <button id="btn-add" class="del" type="button">Add</button>
                    
                  </div>
                
                </li>      
                       
                `;

    const positionList = "afterend";

    listelement.insertAdjacentHTML(positionList, itemList);

    document
      .getElementById(randomIdList)
      .addEventListener("click", function removeTodoList() {
        var item = this.closest("li");
        item.remove();
      });
  });
