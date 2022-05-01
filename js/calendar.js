const day = document.querySelectorAll('.calendar__day')

day.forEach(item => {
    if (item.classList.contains('calendar__day-available')) {
        const timeHtml = `<span class="calendar__day-available-time">
                            <span class="calendar__day-available-time-start">06:00-</span>
                            <span class="calendar__day-available-time-end">20:00</span>
                        </span>`;
                        
        item.insertAdjacentHTML("beforeend", timeHtml)
    }
})