function addUTM(url) {
    return (
      url + "?utm_source=page&utm_medium=card&utm_campaign=spring_recrutation"
    );
  }
  
  function registerStats() {
    let stats = null;
    try {
      stats = JSON.parse(localStorage.getItem("pageStats"));
    } catch (error) {
      localStorage.removeItem("pageStats");
    }
    if (!stats) {
      stats = {
        entries: 0,
        prevVisit: null,
        currentVisit: null,
      };
    }
    stats.entries += 1;
    stats.prevVisit = stats.currentVisit;
    stats.currentVisit = new Date().toDateString();
    localStorage.setItem("pageStats", JSON.stringify(stats));
  }
  registerStats();

  var content = document.getElementsByTagName('body')[0];
  var darkMode = document.getElementById('dark-change');
  darkMode.addEventListener('click', function(){
      darkMode.classList.toggle('active');
      content.classList.toggle('night');
  })