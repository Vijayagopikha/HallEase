const currentDate=document.querySelector(".current-date");

let date=new Date(),
currYear=date.getFullYear(),
currMonth=date.getMonth();

const months =["January","February","March","April","May","June","July","August","September","October","November","December"];

const renderCalendar = () => {
    let lastDateOfMonth=new Date(currYear,currMonth+1,0).getDate();
 currentDate.innerText= `${months[currMonth]} ${currYear}` ;
}
renderCalendar();

