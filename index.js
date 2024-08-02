const month =[  //1- an array for the months
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

const loadWeekContent = async() =>{ //2-load for each month
    const content = await fetch('week.html');
    const contentText = await content.text();
    return contentText;
}

const insertMonthContent = async() => {
    const weekContent = await loadWeekContent();
    month.forEach (month =>{
        const monthDiv = document.getElementById(month.name);
        const weekContainer = monthDiv.querySelector('.week-container');
    })
}