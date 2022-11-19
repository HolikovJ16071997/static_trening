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






// let number = prompt("Введите число!!!");
// switch (number) {
//   case '':
//     alert( 'Маловато' );
//     break;
//   case '2':
//     alert( 'Маловато' );
//     break;
//   case '3':
//     alert( 'Маловато' );
//     break;
//   case '4':
//     alert( 'В точку!' );
//     break;
//   case '5':
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }