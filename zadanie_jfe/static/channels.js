"use strict"

fetch("./channels.json")
.then(response => 
    response.json())
.then(channels => {

const page = channels
.map( channel => {
    return `
    <div class="channels_container">
       <img src="${channel.thumbnails.default.url}"></img>
       <h1>${channel.title}</h1>
       <div class="channels_data">
       <div>
       <h3>SUBSCRIBERS</h3>
       <h2>${channel.statistics.subscriberCount}</h2>
       </div>
       <div>
       <h3>VIDEOS</h3>
       <h2>${channel.statistics.videoCount}</h2>
       </div>
       <div>
       <h3>VIEWS</h3>
       <h2>${channel.statistics.viewCount}</h2>
       </div>
       </div>
    </div>
    `

})    .join(" ")
    document.querySelector(".js-content").insertAdjacentHTML("afterbegin", page)
})
