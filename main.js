const minVal = document.getElementById("minVal");
const maxVal = document.getElementById("maxVal");
const amount = document.getElementById("amount");
const randomList = document.getElementById("randomList");
const btn = document.getElementById("btn");
 
// Генерирует целые числа в заданном диапазоне (min, max)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
 
// Возвращает строку (результат)
function generateRandom(min, max, amount) {
  let res = "";
  for (let index = 0; index < amount; index++) {
    res += getRandomInt(min, max) + ", ";
  }
  res = res.trim(); // удалить лишние пробелы
  // удалить последнюю запятую в списке
  return res.substring(0, res.length - 1);
}
 
function addRandomList() {
  // Введенные значения в форму
  const min = minVal.value;
  const max = maxVal.value;
  const am = amount.value;
 
  // Если значения не введены, выводит ошибку
  if (!min || !max || !am) {
    let liElem = document.createElement("li");
    liElem.className = "list-group-item";
    liElem.style = "font-size: 14px; color: red; padding: 7px 15px;";
    liElem.textContent = "No data entered";
    randomList.appendChild(liElem);
    return;
  }
 
  // Добавить результат на страницу
  let strResult = generateRandom(min, max, am);
  let liElem = document.createElement("li");
  liElem.className = "list-group-item";
  liElem.style = "font-size: 14px; padding: 7px 15px;";
  liElem.textContent = strResult;
  randomList.appendChild(liElem);
}
 
// Обработчик нажатия на кнопку
btn.addEventListener("click", addRandomList);