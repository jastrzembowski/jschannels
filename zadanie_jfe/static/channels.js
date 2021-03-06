"use strict";

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
let allChannels = [];
let visibleChannels = [];
let order = 1;

fetch("./channels.json")
  .then((response) => response.json())
  .then((channels) => {
    drawChannels(channels);
    allChannels = channels;
  })
  .catch((error) => {
    alert("Sorry!\nWe couldn't load any channel.\nTry refreshing your page");
  });


function drawChannels(channels) {
  const page = channels
    .map((channel) => {
      return `
       <a href="${addUTM(
         channel.customUrl
       )}" target="_blank"> <div class="channels_container">
           <img srcset="${channel.thumbnails.medium.url} 240w, ${
        channel.thumbnails.high.url
      } 800w, ${channel.thumbnails.default.url}"
           sizes="(max-width: 650px) 88px,
           240px"
           src="${channel.thumbnails.default.url}"></img>
           <h1 class="channel__title">${channel.title}</h1>
           <div class="channels_data">
           <div>
           <h3>SUBSCRIBERS</h3>
           <h2>${formatNumber(channel.statistics.subscriberCount)}</h2>
           </div>
           <div>
           <h3>VIDEOS</h3>
           <h2>${formatNumber(channel.statistics.videoCount)}</h2>
           </div>
           <div>
           <h3>VIEWS</h3>
           <h2>${formatNumber(channel.statistics.viewCount)}</h2>
           </div>
           </div>
        </div>
        </a>
        `;
    })
    .join(" ");
  document.querySelector(".js-content").innerHTML = page;
  visibleChannels = channels;
}

function filterChannels() {
  let input = "";
  input = document.querySelector(".filter__input").value.toLowerCase();
  let filteredChannels = allChannels.filter((channel) =>
    channel.title.toLowerCase().includes(input)
  );
  drawChannels(filteredChannels);
  sort();
}

function normalizeNumber(any) {
  if (!any) {
    return any;
  }
  return Number(any.toString().replace(/\D/g, ""));
}

function sort() {
  let radio = document.querySelector("input[type='radio']:checked");
  if (!radio) {
    return;
  }
  const sortedChannels = [...visibleChannels]
    .sort((a, b) => {
      if (radio.id === "sort-title") {
        return a.title.localeCompare(b.title);
      }
      if (radio.id === "sort-subscribers") {
        return (
          normalizeNumber(b.statistics.subscriberCount) -
          normalizeNumber(a.statistics.subscriberCount)
        );
      }
      if (radio.id === "sort-videos") {
        return (
          normalizeNumber(b.statistics.videoCount) -
          normalizeNumber(a.statistics.videoCount)
        );
      }
      if (radio.id === "sort-views") {
        return (
          normalizeNumber(b.statistics.viewCount) -
          normalizeNumber(a.statistics.viewCount)
        );
      }
      return 0;
    })
    .sort(() => order);
  drawChannels(sortedChannels);
}

function changeOrder() {
  order = order * -1;
  sort();
}

function clearFilter() {
  document.querySelectorAll("input[type='radio']").forEach((input) => {
    input.checked = false;
  });
  document.querySelector(".filter__input").value = "";
  order = 1;
  filterChannels();
}


var input = document.getElementById("filter__input");
autocomplete({
  input: input,
  fetch: function(text, update) {
      text = text.toLowerCase();
      var suggestions = allChannels.filter(channel => channel.title.toLowerCase().includes(text))
      update(suggestions);
  },
  onSelect: function(channel) {
      input.value = channel.title;
  }      
});