const timeConatiner = document.querySelector(".timeConatiner");
let time = new Date();
timeConatiner.append(time.toLocaleTimeString());

const list = document.querySelectorAll("li");
 switch(time.getDay()){
  case 0:
    list[0].innerText ="Sunday";
    break;
  case 1:
    list[0].innerText ="Monday";
  case 2:
    list[0].innerText ="Tuesday";
    break;
  case 3:
    list[0].innerText ="Wednesday";
    break;
  case 4:
    list[0].innerText ="Thursday";
    break;
  case 5:
    list[0].innerText ="Friday";
    break;
  case 6:
    list[0].innerText ="Saturday";
    break;
  default:
    list[0].innerText ="Inavlid value";
    break;
}
list[1].innerText = time.toLocaleDateString()