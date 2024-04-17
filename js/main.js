// DOM. Классная работа

// Задание №1
//  Всем <h3> поставьте текст '!!!'.
let h3 = document.querySelectorAll("h3");
h3.forEach((elem) => {
  elem.innerText += "!!!";
});
// Задание №2
//  Всем <h3> сделайте текст зеленого цвета.
h3.forEach((elem) => {
  elem.style.color = "green";
});
// Задание №3
//  Создайте маркированный список,
// При помощи цикла добавьте в маркированный
// список 30 li - элементов с текстом:
// “1 - овечка”, “2 - овечка”,
// “3 - овечка”,
// и так до “30-овечка”;
let task3 = document.createElement("ul");
for (let i = 1; i <= 30; i++) {
  let newLi = document.createElement("li");
  newLi.textContent = i + " - овечка";
  task3.append(newLi);
}
document.body.append(task3);
// Задание №4
// В css создайте класс .active в
// котором пропишите цвет текста blue.
// Добавьте всем span элементам класс active
// через document.getElementsByTagName.
let span = document.getElementByTagName("span");
for (let i = 0; i < span.length; i++){
  span[i].className = "active";
});
