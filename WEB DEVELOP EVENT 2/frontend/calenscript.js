const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons i");

let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
    lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li>${lastDateOfLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        liTag += `<li class="date">${i}</li>`;
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
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
            window.location.href = `bookingform.html?date=${selectedYear}-${selectedMonth}-${selectedDate}`;
        });
    });
}
