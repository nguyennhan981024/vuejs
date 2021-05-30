//JSON.parse > dung bien doi string sang JSON (Object,Array)
//JSON.stringtify > bien doi object,array sang string
// localStorage.setItem(tencualist,gia tri nhuwng phai laf string);
//localStorage.getItem(tencuacailist);
let todoList = localStorage.getItem('todolist') ? JSON.parse(localStorage.getItem('todolist')) : [];

const form = document.querySelector('#form');
const inputs = form.getElementsByTagName('input');
const add = document.querySelector('#addButton');
const renderSection = document.querySelector('#renderSection');
const search = document.querySelector('#search');

let idsData = todoList.map(item => {
    return item.id;
})
let maxId = todoList.length ? Math.max.apply(Math, idsData) : 0;
add.addEventListener('click', addTodo);
function render(array) {
    let trs = array.map((item, index) => {
        return `<tr>
            <td>${index + 1}</td>
            <td>${item.todoname}</td>
            <td>${item.startDate}</td>
            <td>${item.endDate}</td>
            <td>${item.createby}</td>
            <td><button class="btn btn-warning editButton" data-id=${item.id}>Edited</button></td>
            <td><button class="btn btn-danger deleteButton"  data-id=${item.id}>Deleted</button></td>
        </tr>`
    })

    renderSection.innerHTML = trs.join('');
}
render(todoList);
function emptyInput() {
    [...inputs].forEach(item => item.value = '');
}
function addTodo() {
    const newObject = [...inputs].reduce((obj, item) => {
        obj[item.name] = item.value;
        return obj;
    }, {})

    if (newObject.id === '') {
        maxId += 1;
        newObject['id'] = maxId;
        console.log(Math.max.apply(Math, idsData));
        todoList.push(newObject);

        localStorage.setItem('todolist', JSON.stringify(todoList));
        emptyInput();
        render(todoList);
    } else {
        todoList = todoList.map(item => {
            return Number(item.id) === Number(newObject.id) ? item = newObject : item
        })
        localStorage.setItem('todolist', JSON.stringify(todoList));
        emptyInput();
        render(todoList);
    }


}
renderSection.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteButton')) {
        let dataid = event.target.getAttribute('data-id');
        deleteTodo(dataid);
    }
    if (event.target.classList.contains('editButton')) {
        let dataid = event.target.getAttribute('data-id');
        editTodo(dataid);
    }
})
function deleteTodo(id) {
    let index = todoList.findIndex(item => Number(item.id) === Number(id));
    todoList.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(todoList));
    render(todoList);
}
function editTodo(id) {
    let editItem = todoList.find(item => Number(item.id) === Number(id));ste
    [...inputs].forEach(item => {
        item.value = editItem[item.name]
    })
}

search.oninput = (event) => {
    let searchTodo = [...todoList];
    searchTodo = todoList.filter(item => {
        for (let key in item) {
            if (item[key].toString().toLowerCase().includes(event.target.value.toLowerCase())) {
                return item;
            }
        }
    })
    render(searchTodo);
}



