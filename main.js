var input = document.getElementById("input");
var createButton = document.getElementById("create_button");
var todolist = document.getElementById("todo_list");

var createToDo = () => {
    if (!input.value.trim()) return alert("Напиши что-нибудь");

    var div = document.createElement("div");
    var text = document.createElement('h3');
    var deleteButton = document.createElement('button');
    var editButton = document.createElement('button');

    div.setAttribute("class", "block_text");
    text.innerHTML = input.value;

    deleteButton.innerHTML = 'Delete';
    deleteButton.setAttribute("class", "delete_button");
    deleteButton.addEventListener("click", () => {
        div.remove();
    });

    editButton.innerHTML = 'Edit';
    editButton.setAttribute("class", "edit_button");
    editButton.addEventListener("click", () => {
        var newText = prompt("Измените текст задачи:", text.innerHTML);
        if (newText) {
            text.innerHTML = newText;
        }
    });

    div.append(text);
    div.append(editButton);
    div.append(deleteButton);

    todolist.append(div);

    input.value = "";
};

createButton.addEventListener("click", createToDo);

window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") createToDo();
});
