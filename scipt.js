const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dateItem = document.querySelector(".date");

function addTask() {
  if (inputBox.value == "") {
    alert(" You have to write a task");
  } else {
    var li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.append(li);

    var span = document.createElement("span");
    span.innerHTML = "x";
    li.append(span);
  }
  inputBox.value = "";
  saveTask();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTask();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTask();
    }
  },
  false
);

function saveTask() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function getTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
const today = new Date();
const f = new Intl.DateTimeFormat("en-us", {
  dateStyle: "full",
});
dateItem.innerHTML = f.format(today);
getTask();
