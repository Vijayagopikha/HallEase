const currentDate=document.querySelector(".current-date");
daysTag=document.querySelector(".days");
prevNextIcon=document.querySelectorAll(".icons i");


let date=new Date(),
currYear=date.getFullYear(),
currMonth=date.getMonth();

const months =["January","February","March","April","May","June","July","August","September","October","November","December"];

const renderCalendar = () => {
    let lastDateOfMonth=new Date(currYear,currMonth+1,0).getDate();
    let liTag="";
    for(let i=0;i<=lastDateOfMonth;i++)
    {
        liTag+=`<li>${i}</li>`;
    }
 currentDate.innerText= `${months[currMonth]} ${currYear}` ;
 daysTag.innerHTML=liTag;
}

renderCalendar();

prevNextIcon.foreach(icon =>{
    icon.addEventListener("click",()=>{
        console.log(icon);
    });
});




