document.addEventListener('DOMContentLoaded', function() {
    const months =[  //1- an array for the months
        {name:'January', days:31},
        {name:'February', days:28},
        {name:'March', days:31},
        {name:'April', days:30},
        {name:'May', days:31},
        {name:'June', days:30},
        {name:'July', days:31},
        {name:'August', days:31},
        {name:'September', days:30},
        {name:'October', days:31},
        {name:'November', days:30},
        {name:'December', days:31},
    ]

    const loadWeekContent = async() =>{ //2- load for each month
        const content = await fetch('week.html');
        const contentText = await content.text();
        return contentText;
    }

    const insertMonthContent = async() => {
        const weekContent = await loadWeekContent(); //load the week template
        let previousMonthLastDay = 2; 

        months.forEach (month =>{
            const monthDiv = document.getElementById(month.name);   //select the month div
            const weekContainer = monthDiv.querySelector('.week-container');    //find the week container in month div
            weekContainer.innerHTML = weekContent //insert the week template in week div

            const dayContainer = weekContainer.querySelector('#days');  //find the days in the week template

            let day = 1; //first day of the month
            let weekRow = document.createElement('tr'); // Create a new table row for the week

            const firstDay = previousMonthLastDay;

            //create empty cells to align the days and dates correctly
            for (let i = 0; i < (firstDay < 0 ? 6 : firstDay); i++) {   //if sunday(-1) 6 empty cells otherwise the amount of firstday
                const emptyCell = document.createElement('td');
                weekRow.appendChild(emptyCell);
            }

            //insert the days
            while (day <= month.days) {
                const dayCell = document.createElement('td');
                dayCell.textContent = day;
                weekRow.appendChild(dayCell);

                //if the week is full create a new week row
                if (weekRow.children.length === 7) {
                    dayContainer.appendChild(weekRow);
                    weekRow = document.createElement('tr');
                }
                day++;
            }
            // If any remaining days in the last week, append to the days container
            if (weekRow.children.length > 0) {
                dayContainer.appendChild(weekRow);
            }
            previousMonthLastDay = (firstDay + month.days) % 7;
        });
    };

    insertMonthContent();
});