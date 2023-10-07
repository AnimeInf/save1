

console.log('Hello, World!')


let BurgerBtm = document.querySelector('.burger-btm');
let burger = document.querySelector('.burger');

BurgerBtm.addEventListener('click', function(){
    BurgerBtm.classList.toggle('active');
    burger.classList.toggle('active');
}) 
// let name;
// name = prompt("Ваше имя", [""])
// alert(`Здравствуйте,${name}!`)


// let age = prompt("сколько вам лет?", [""])
    
// if (age < 8){
//    let message = ("Посоветовать контент для детей от 3 лет...");
// }
//     else if (age < 14){
//     message = ("Посоветовать контент для детей от 8 лет...");
//     }
//     else if (age < 16){
//     message = ("Посоветовать контент для детей от 14 лет...");
//     }
//     else if (age < 18){
//     message = ("Посоветовать контент для детей от 16 лет...");
//     }
//     else if (age > 17){
//     message = ("Вам доступен весь контент нашего ресурса!");
//     }
//     else{
//         message = ("Введите ваш возраст")
//         age = prompt("сколько вам лет?", [""])
//         if (age < 8){
//             let message = ("Посоветовать контент для детей от 3 лет...");
//          }
//              else if (age < 14){
//              message = ("Посоветовать контент для детей от 8 лет...");
//              }
//              else if (age < 16){
//              message = ("Посоветовать контент для детей от 14 лет...");
//              }
//              else if (age < 18){
//              message = ("Посоветовать контент для детей от 16 лет...");
//              }
//              else if (age > 17){
//              message = ("Вам доступен весь контент нашего ресурса!");
//              }
//     }
// alert(message);

let login = prompt("Введите логин", [""]);


if(login === "console"){
    let pass = prompt("Введите пароль")

if (pass === "kU9p~IwH%aeSs8zmYjI??IC{35ajH2lTPNRHMXEnUiG1#I%cg4BB9ugoA%I$Fvm{X5{#G7Hl*o9JGNjG") {
  alert( 'Здравствуйте!' );
} else if (pass === '' || pass === null) {
  alert( 'Неверный пароль' );
}
}
        else{
            login = ("Пользователь не известен")
}

alert(login)

