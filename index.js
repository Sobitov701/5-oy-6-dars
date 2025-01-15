//1-misol
//Foydalanuvchi forma maydonlariga o‘z ma’lumotlarini (ism, familiya, email) kiritadi va Qo‘shish tugmasini bosganda, ushbu ma’lumotlar jadvalga qo‘shiladi.

//2-misol
//Formada rang tanlash uchun color turi maydoni va Matn maydoni bo‘lsin.

const style = document.createElement("style");
style.textContent = `
      #colorful-block {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000;
      }
    `;
document.head.appendChild(style);

const colorPicker = document.getElementById("color-picker");
const textInput = document.getElementById("text-input");
const colorfulBlock = document.getElementById("colorful-block");

colorPicker.addEventListener("input", () => {
  colorfulBlock.style.backgroundColor = colorPicker.value;
});

textInput.addEventListener("input", () => {
  colorfulBlock.textContent = textInput.value;
});

//3-misol
//Formada 5 ta majburiy maydon bo‘lsin.

const firstname = document.querySelector("#firstname");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");
const age = document.querySelector("#age");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  validateField(firstname);
  validateField(address);
  validateEmail(email);
  validatePhone(phone);
  validateAge(age);
});

function validateField(field) {
  if (field.value.trim() === "") {
    field.style.outline = "2px solid red";
  } else {
    field.style.outline = "2px solid green";
  }
}

function validateEmail(field) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (field.value.trim() === "" || !emailRegex.test(field.value)) {
    field.style.outline = "2px solid red";
  } else {
    field.style.outline = "2px solid green";
  }
}

function validatePhone(field) {
  const phoneRegex = /^\+998[0-9]{9}$/;
  if (field.value.trim() === "" || !phoneRegex.test(field.value)) {
    field.style.outline = "2px solid red";
  } else {
    field.style.outline = "2px solid green";
  }
}

function validateAge(field) {
  const ageValue = Number(field.value.trim());
  if (
    field.value.trim() === "" ||
    isNaN(ageValue) ||
    ageValue < 18 ||
    ageValue > 200
  ) {
    field.style.outline = "2px solid red";
  } else {
    field.style.outline = "2px solid green";
  }
}

//4-misol
// Foydalanuvchi formadagi Qidiruv maydoniga ma’lumot kiritganda, jadvaldagi qatorlar qidiruv so‘ziga mos ravishda filtrlanadi.

//5-misol
//Foydalanuvchi formadagi Element turi (masalan, <div>, <p>) va Element mazmuni maydonlariga ma’lumot kiritsa, Yaratish tugmasi bosilganda shu element sahifada paydo bo‘lsin.

const elementType = document.getElementById("elementType").value;
const elementContent = document.getElementById("elementContent").value;
const createButton = document.getElementById("createButton");
const outputArea = document.getElementById("outputArea");

createButton &&
  createButton.addEventListener("click", function () {
    if (!elementType || !elementContent) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    const newElement = document.createElement(elementType);
    newElement.textContent = elementContent;

    outputArea.appendChild(newElement);
  });

//6-misl
//Foydalanuvchi formadagi Rasm URL maydoniga rasm linkini kiritib, Qo‘shish tugmasini bossin.

const form = document.getElementById("imageForm");
const imageContainer = document.getElementById("imageContainer");
const btn = document.getElementById("submit");

btn &&
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    const imageUrl = document.getElementById("imageUrl").value;

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Qo'shilgan rasm";
    img.style.maxWidth = "300px";
    img.style.marginTop = "10px";

    imageContainer.appendChild(img);
    form.reset();
  });

//7-misol
// Formada foydalanuvchi bajariladigan ishlarni kiritadi va Qo‘shish tugmasini bossa, ro‘yxatga yangi ish qo‘shiladi.

const form7 = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form7 &&
  form7.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  });

//8-misol
// Formada foydalanuvchi o‘z ismi va jinsini tanlashi kerak.

const form8 = document.getElementById("task-form");
const taskInput8 = document.getElementById("task-input");
const taskList8 = document.getElementById("task-list");

form &&
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = taskInput8.value.trim();
    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;
      taskList8.appendChild(listItem);
      taskInput8.value = "";
    }
  });

//9-misol
//Formada ikkita son kiritish maydoni (Son 1, Son 2) va Operatsiya (masalan, qo‘shish, ayirish) tanlash uchun select bo‘lsin.

const form9 = document.getElementById("calculator-form");
const result = document.getElementById("result");
form9 &&
  form9.addEventListener("submit", function (event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    let output;

    if (operation === "add") {
      output = num1 + num2;
    } else if (operation === "subtract") {
      output = num1 - num2;
    } else if (operation === "multiply") {
      output = num1 * num2;
    } else if (operation === "divide") {
      if (num2 !== 0) {
        output = num1 / num2;
      } else {
        output = "Nolga bolish mumkin emas!";
      }
    }

    result.textContent = output;
  });

//10-misol
//Foydalanuvchi formadagi Mahsulot nomi, Narxi va Soni maydonlarini to‘ldirib, Qo‘shish tugmasini bossa, savatchaga mahsulot qo‘shiladi.
