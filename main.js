let arrayData

const dashboard = document.querySelector("#dashboard");
let daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");
const buttons = document.querySelectorAll(".button");
const smallCard = document.querySelectorAll(".small-card")


fetch ("./data.json") 
    .then (response => response.json())
    .then((data) => {
        arrayData = data;
        console.log(arrayData);
        loadDataWeekly()
        bnts ()
    })

function bnts () {

    daily.addEventListener("click", () => {
        console.log("daily");
        dashboard.innerHTML = "";
        loadDataDaily()
    })

    weekly.addEventListener("click", () => {
        console.log("weekly");
        dashboard.innerHTML = "";
        loadDataWeekly()
    })

    monthly.addEventListener("click", () => {
        console.log("monthly");
        dashboard.innerHTML = "";
        loadDataMonthly()
    })

}




function loadDataDaily() {

    arrayData.forEach(data => {

        const div = document.createElement("div");
        div.classList.add("small-card")
        let title = data.title.toLowerCase();
        div.classList.add(`${title}-card`)
        
        div.innerHTML = `
                        <div class="card-img-top">
                            <!-- <img src="./images/icon-self-care.svg" alt="icon self care"> -->
                        </div>
                        <div class="card-body-bottom">
                            <div class="title">
                                <h2>${data.title}</h2>
                                <i class="bi bi-three-dots"></i>
                            </div>
                            <div class="hour">
                                <p id="hour">${data.timeframes.daily.current}hrs</p>
                                <small id="past-time">Yesterday: ${data.timeframes.daily.previous}hrs</small>
                            </div>
                        </div>
        `;
        
        dashboard.append(div);

    })
    
};

function loadDataWeekly() {

    arrayData.forEach(data => {
        
        const div = document.createElement("div");
        div.classList.add("small-card")
        let title = data.title.toLowerCase();
        div.classList.add(`${title}-card`)
        
        div.innerHTML = `
                        <div class="card-img-top">
                            <!-- <img src="./images/icon-self-care.svg" alt="icon self care"> -->
                        </div>
                        <div class="card-body-bottom">
                            <div class="title">
                                <h2>${data.title}</h2>
                                <i class="bi bi-three-dots"></i>
                            </div>
                            <div class="hour">
                                <p id="hour">${data.timeframes.weekly.current}hrs</p>
                                <small id="past-time">Last Week: ${data.timeframes.weekly.previous}hrs</small>
                            </div>
                        </div>
        `;
        
        dashboard.append(div);

    })
    
};

function loadDataMonthly() {

    arrayData.forEach(data => {
        
        const div = document.createElement("div");
        div.classList.add("small-card")
        let title = data.title.toLowerCase();
        div.classList.add(`${title}-card`)
        
        div.innerHTML = `
                        <div class="card-img-top">
                            <!-- <img src="./images/icon-self-care.svg" alt="icon self care"> -->
                        </div>
                        <div class="card-body-bottom">
                            <div class="title">
                                <h2>${data.title}</h2>
                                <i class="bi bi-three-dots"></i>
                            </div>
                            <div class="hour">
                                <p id="hour">${data.timeframes.monthly.current}hrs</p>
                                <small id="past-time">Last Month: ${data.timeframes.monthly.previous}hrs</small>
                            </div>
                        </div>
        `;
        
        dashboard.append(div);

    })
    
};

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        buttons.forEach(button => {
            button.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
    })
})