let day=+Number(prompt("Введите номер сегодняшнего дня"));
switch (day) {
    case 1:
    day="Сегодня понедельник";
    break;
  case 2:
    day="Сегодня вторник";
    break;
  case 3:
    day="Сегодня среда";
    break;
  case 4:
    day="Сегодня четверг";
    break;
  case 5:
    day="Сегодня пятница";
    break;
  case 6:
    day="Сегодня суббота";
    break;
  case 7:
    day="Сегодня воскресенье";
    break;
  default:
    day="Вы ввели не то число";
}
document.querySelector('.heading').innerHTML = day;


let b = Number( prompt("Введите цикл"))
let x =0;
while (b<10) {
  x+=b;
  b++;
}
alert('Сума чилсла'+ '   ' + x)


let a = Number( prompt("Введите цикл"))
let s =0;
while (b>10) {
  s+=a;
  a--;
}
alert('Убывание чилсла'+ '   ' + s)
