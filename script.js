let listContainer = document.querySelector("#listContainer");

const addListFun = (list) => {
  let mylist = document.createElement("div");
  mylist.classList.add("list-items");
let id = Math.floor(Math.random()*10000000+10000000)
  mylist.innerHTML = ` <div class="check-items">
                    <input type="checkbox" id="${id}">
                    <label for="${id}">${list}</label>
                </div>
                <i class="fa-solid fa-xmark" onclick="deleteList(this)" ></i>`;

  listContainer.appendChild(mylist);
};

let todoForm = document.querySelector('.todo-form')
todoForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  let todolist = document.querySelector('#todolist').value;
  addListFun(todolist)
})

function deleteList(icon){
  icon.parentElement.remove()
}