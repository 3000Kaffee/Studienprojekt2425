window.addEventListener("scroll", function() {
    var footer = document.getElementById("footer");
    // Überprüfen, ob der Benutzer das Ende der Seite erreicht hat
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      footer.style.display = "block"; // Footer anzeigen
    } else {
      footer.style.display = "none"; // Footer verstecken
    }
  });