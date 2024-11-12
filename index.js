const players = document.querySelectorAll('.cricketers');
players.forEach(function (i, index) {
  i.addEventListener('mouseenter', function () {
    if (index === 0) {
      i.style.backgroundColor = "blue"
      // i.childNodes[3].style.opacity = 1;
    }
    if (index === 1) {
      i.style.backgroundColor = "skyblue"
      // i.childNodes[3].style.opacity = 1;
    }
    if (index === 2) {
      i.style.backgroundColor = "black"
      // i.childNodes[3].style.opacity = 1;
    }
    if (index === 3) {
      i.style.backgroundColor = "yellow"
      // i.childNodes[3].style.opacity = 1;
    }

    i.childNodes[3].style.opacity = 1;
  })
  i.addEventListener('mouseleave', function () {
    i.style.backgroundColor = "#111"
    i.childNodes[3].style.opacity = 0;
  })
  i.addEventListener('mousemove', function (item) {
    i.childNodes[3].style.left = item.x + "px"
    // i.childNodes[3].style.top = item.y + "px"
  })
});