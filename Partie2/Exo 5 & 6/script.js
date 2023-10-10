function showHide() {
    var x = document.getElementById("monparagraphe");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  const btn = document.getElementById('btn');

  btn.addEventListener('click', function onClick(event) {
    const box = document.getElementById('monparagraphe');
    if (box.style.color === "black") {
        box.style.color = 'red';
      } else {
        box.style.color = 'black';
      }
  });
