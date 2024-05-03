// Решить следующие задачи:
// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50(т.е. 100, 90, 80, 70, 60, 50).Добавить созданные параграфы в div с классом numbers.
let numbersP = document.querySelector(".numbers");
for (let i = 100; i >= 50; i = i - 10) {
    let newP = document.createElement("p")
    newP.innerText = i
    numbersP.append(newP)
}
// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container.Строки взять произвольные.
const arrayStr = ["Mischa", "Mascha", "Nikol", "Max", "Olia"]
let divStr = document.querySelector(".strings_container")
for (let i = 0; i < arrayStr.length; i++) {
    let strP = document.createElement("p")
    strP.innerText = arrayStr[i]
    divStr.append(strP)
}
// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age(данные взять произвольные) - и создает карточки только для совершеннолетних пользователей.Карточка должна содержать информацию об имени, фамилии и возрасте пользователя.Добавить все карточки в div с классом users_container.
const listP = [
    {
        first_name: "Mischa",
        last_name: "Dovgan",
        age: 12
    },
    {
        first_name: "Matvey",
        last_name: "Skvorzov",
        age: 25
    },
    {
        first_name: "Lisa",
        last_name: "Koliada",
        age: 20
    },
    {
        first_name: "Anna",
        last_name: "Mudra",
        age: 14
    },
    {
        first_name: "Artur",
        last_name: "Schwonder",
        age: 36
    },
]
let usersKont = document.querySelector(".users_container")
for (let i = 0; i < listP.length; i++) {
    if (listP[i].age >= 18) {
        let div_kart = document.createElement("div")
        let first_name_P = document.createElement("p")
        first_name_P.innerText = `first_name:  ${listP[i].first_name}`
        let last_name_P = document.createElement("p")
        last_name_P.innerText = `last_name:  ${listP[i].last_name}`
        let age_P = document.createElement("p")
        age_P.innerText = `age:  ${listP[i].age}`
        div_kart.append(first_name_P, last_name_P, age_P)
        usersKont.append(div_kart)
    }
}
