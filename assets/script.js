const monthYear = document.getElementById("month-year");
const calendarDays = document.getElementById("calendar-days");
let currentDate = new Date();
function renderCalendar() {
    calendarDays.innerHTML = "";
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    monthYear.textContent = currentDate.toLocaleString("default", { month: "long", year: "numeric" });
    const startDay = (firstDay === 0) ? 6 : firstDay - 1;
    for (let i = 0; i < startDay; i++) {
        calendarDays.innerHTML += `<div></div>`;
    }
    for (let day = 1; day <= lastDate; day++) {
        const isToday = day === new Date().getDate() && currentDate.getMonth() === new Date().getMonth() && currentDate.getFullYear() === new Date().getFullYear();
        calendarDays.innerHTML += `<div class="day ${isToday ? 'current-day' : ''}">${day}</div>`;
    }
}
function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}
function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}
renderCalendar();