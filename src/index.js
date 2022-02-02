// СКРЫТЬ КНОПКИ, ПОКА ПОЛЬЗОВАТЕЛЬ НЕ ВВЕЛ ТЕКСТ

function success() {
  // success() вызывается в HTML -> input
  if(document.getElementById("input").value === "") { 
  // if(!document.getElementById("input").value.length) { 
    document.getElementById('button').disabled = true; 
    document.getElementById('btn-add').disabled = true; 
  } else { 
    document.getElementById('button').disabled = false;
    document.getElementById('btn-add').disabled = false;
  } 
}


// ОЧИСТИТЬ ИНПУТ ПОСЛЕ ВВОДА ТЕКСТА

// document.getElementById("btn-add").onclick = function() {
//   document.getElementById("input").value = "";
// };

// document.getElementById("button").onclick = function() {
//   document.getElementById("input").value = "";
// };

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


// ДОБАВЛЕНИЕ СПИСКА Sublist

function addTodo(event) {
  var value = document.getElementById('input').value;
  var randomId = Math.random();
  const item = `
                <li class="col-list progress" id=${randomId}>

                  <span class="col-list-size">${value}</span>                 
                  <input type="text" id="input" success() placeholder="Add an item"/>
                  
   
                  <div class="btn-container">
                  <span class="up">up</span>
                  <span class="down">down</span>
                  <div class="remove">    
                    <button class="todo del btn-del" type="button">Remove Sublist</button>
                  </div>    

                  <button id="btn-add" class="del btn-add" type="button">Add</button>

                  </div>
                
                </li> 
                            
                `;
                
  const position = "afterend";

  event.target.closest('li').insertAdjacentHTML(position,item);
  
  document.getElementById(randomId).getElementsByClassName('btn-del')[0].addEventListener('click', removeTodoList)
  document.getElementById(randomId).getElementsByClassName('btn-add')[0].addEventListener('click', addTodoList);
};

document.getElementById('button').addEventListener('click', addTodo);

function removeTodoList(){
    var item = this.closest( 'li' );
      item.remove();
};

// ДОБАВЛЕНИЕ СПИСКА list


function addTodoList(event) {
  let value = document.getElementById('input').value;
  let randomIdList = Math.random();
  const itemList = `
                <li class="col-list list-bg" id="${randomIdList}">

                  <span class="col-list-size">${value}</span>                 
                  <input type="hidden" id="input" placeholder="Add an item"/>
                  <span class="up">up</span>
                  <span class="down">down</span>
   
                  <div class="btn-container">
                  <button id="button" class="del btn-add-sublist" type="button">Add Sublist</button>

                  <div class="remove"> 
                    <button class="del btn-del">Remove</button>
                  </div>
 
                    <button id="btn-add" class="del btn-add" type="button">Add</button>
                    
                  </div>
                
                </li>      
                       
                `;
                
  const positionList = "afterend";
  
  parentElement = event.target.classList.contains('initial') ? listelement : event.target.closest('li');
  parentElement.insertAdjacentHTML(positionList,itemList);

  document.getElementById(randomIdList).getElementsByClassName('btn-add-sublist')[0].addEventListener('click', addTodo);  
  document.getElementById(randomIdList).getElementsByClassName('btn-del')[0].addEventListener('click', removeTodoList);
  document.getElementById(randomIdList).getElementsByClassName('btn-add')[0].addEventListener('click', addTodoList);
};

document.getElementById('btn-add').addEventListener('click', addTodoList);






