const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons i");

let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {

    let firstDayOfMonth=new Date(currYear,currMonth,1).getDay();
    lastDateOfMonth=new Date(currYear,currMonth+1,0).getDate();
    lastDayOfMonth=new Date(currYear,currMonth,lastDateOfMonth).getDay();

    lastDateOfLastMonth=new Date(currYear,currMonth,0).getDate();
    
    let liTag="";

    for(let i=firstDayOfMonth; i>0; i--){
        liTag+=`<li class="inactive">${ lastDateOfLastMonth -i +1}</li>`;
    }
    
    for(let i=1;i<=lastDateOfMonth;i++)
    {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag+=`<li class="${isToday}">${i}</li>`;
    }

    for(let i= lastDayOfMonth; i<6; i++){
        liTag+=`<li class="inactive">${i- lastDayOfMonth +1}</li>`;
    }

 currentDate.innerText= `${months[currMonth]} ${currYear}` ;
 daysTag.innerHTML=liTag;
 attachDateClickEvent(); // Attach click event to each date

}

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        renderCalendar();
    });
});

function attachDateClickEvent() {
    const dates = document.querySelectorAll(".date");
    dates.forEach(date => {
        date.addEventListener("click", () => {
            const selectedDate = date.innerText;
            const selectedMonth = currMonth + 1; // Month is zero-based index, so add 1
            const selectedYear = currYear;
            // Redirect to the booking form page with selected date parameters
            window.location.href = `book.html?date=${selectedYear}-${selectedMonth}-${selectedDate}`;
        });
    });
}
