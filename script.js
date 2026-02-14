let greekLoaded = false;
let longLoaded = false;
let hilaireLoaded = false;
let casaubonLoaded = false;

// Farbdefinitionen für aktive Buttons (einfach hier anpassen)
const activeColors = {
  greek: { background: "#f8d7da", color: "darkred" },
  long: { background: "#d1ecf1", color: "darkblue" },
  hilaire: { background: "#d4edda", color: "darkgreen" },
  casaubon: { background: "#fff3cd", color: "darkorange" }
}
document.addEventListener('DOMContentLoaded', () => {
  // Greek JSON laden
  fetch('greek.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(greek => {
      for (let i = 1; i <= 17; i++) {
        window[`g1_${i}`] = greek[`g1_${i}`] || "";
      }
      for (let i = 1; i <= 17; i++) {
        window[`g2_${i}`] = greek[`g2_${i}`] || "";
      }
      for (let i = 1; i <= 16; i++) {
        window[`g3_${i}`] = greek[`g3_${i}`] || "";
      }
      for (let i = 1; i <= 51; i++) {
        window[`g4_${i}`] = greek[`g4_${i}`] || "";
      }
      for (let i = 1; i <= 37; i++) {
        window[`g5_${i}`] = greek[`g5_${i}`] || "";
      }
      for (let i = 1; i <= 59; i++) {
        window[`g6_${i}`] = greek[`g6_${i}`] || "";
      }
      greekLoaded = true;
    })
    .catch(error => {
      console.error('Could not load greek.json:', error);
    });

  // Long JSON laden
  fetch('long.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(long => {
      for (let i = 1; i <= 17; i++) {
        window[`l1_${i}`] = long[`l1_${i}`] || "";
      }
      for (let i = 1; i <= 17; i++) {
        window[`l2_${i}`] = long[`l2_${i}`] || "";
      }
      for (let i = 1; i <= 16; i++) {
        window[`l3_${i}`] = long[`l3_${i}`] || "";
      }
      for (let i = 1; i <= 51; i++) {
        window[`l4_${i}`] = long[`l4_${i}`] || "";
      }
            for (let i = 1; i <= 37; i++) {
        window[`l5_${i}`] = long[`l5_${i}`] || "";
      }
   for (let i = 1; i <= 59; i++) {
        window[`l6_${i}`] = long[`l6_${i}`] || "";
      }


      longLoaded = true;
    })
    .catch(error => {
      console.error('Could not load long.json:', error);
    });

  // Hilaire JSON laden
  fetch('hilaire.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(hilaire => {
      for (let i = 1; i <= 17; i++) {
        window[`h1_${i}`] = hilaire[`h1_${i}`] || "";
      }
      for (let i = 1; i <= 17; i++) {
        window[`h2_${i}`] = hilaire[`h2_${i}`] || "";
      }
      for (let i = 1; i <= 16; i++) {
        window[`h3_${i}`] = hilaire[`h3_${i}`] || "";
      }
         for (let i = 1; i <= 51; i++) {
        window[`h4_${i}`] = hilaire[`h4_${i}`] || "";
      }
                  for (let i = 1; i <= 37; i++) {
        window[`h5_${i}`] = hilaire[`h5_${i}`] || "";
      }
   for (let i = 1; i <= 59; i++) {
        window[`h6_${i}`] = hilaire[`h6_${i}`] || "";
      }

      hilaireLoaded = true;
    })
    .catch(error => {
      console.error('Could not load hilaire.json:', error);
    });

  // Casaubon JSON laden
  fetch('casaubon.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(casaubon => {
      for (let i = 1; i <= 17; i++) {
        window[`c1_${i}`] = casaubon[`c1_${i}`] || "";
      }
      for (let i = 1; i <= 17; i++) {
        window[`c2_${i}`] = casaubon[`c2_${i}`] || "";
      }
      for (let i = 1; i <= 16; i++) {
        window[`c3_${i}`] = casaubon[`c3_${i}`] || "";
      }
               for (let i = 1; i <= 51; i++) {
        window[`c4_${i}`] = casaubon[`c4_${i}`] || "";
      }
                  for (let i = 1; i <= 37; i++) {
        window[`c5_${i}`] = casaubon[`c5_${i}`] || "";
      }
   for (let i = 1; i <= 59; i++) {
        window[`c6_${i}`] = casaubon[`c6_${i}`] || "";
      }

      casaubonLoaded = true;
    })
    .catch(error => {
      console.error('Could not load casaubon.json:', error);
    });

  // Event-Listener für Buch 1
  for (let i = 1; i <= 17; i++) {
    document.getElementById(`bg1_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x1_${i}`, window[`g1_${i}`], "greek", e.currentTarget)
    );
    document.getElementById(`bl1_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x1_${i}`, window[`l1_${i}`], "long", e.currentTarget)
    );
    document.getElementById(`bh1_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x1_${i}`, window[`h1_${i}`], "hilaire", e.currentTarget)
    );
    document.getElementById(`bc1_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x1_${i}`, window[`c1_${i}`], "casaubon", e.currentTarget)
    );
  }

  // Event-Listener für Buch 2
  for (let i = 1; i <= 17; i++) {
    document.getElementById(`bg2_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x2_${i}`, window[`g2_${i}`], "greek", e.currentTarget)
    );
    document.getElementById(`bl2_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x2_${i}`, window[`l2_${i}`], "long", e.currentTarget)
    );
    document.getElementById(`bh2_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x2_${i}`, window[`h2_${i}`], "hilaire", e.currentTarget)
    );
    document.getElementById(`bc2_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x2_${i}`, window[`c2_${i}`], "casaubon", e.currentTarget)
    );
  }

  // Event-Listener für Buch 3
  for (let i = 1; i <= 16; i++) {
    document.getElementById(`bg3_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x3_${i}`, window[`g3_${i}`], "greek", e.currentTarget)
    );
    document.getElementById(`bl3_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x3_${i}`, window[`l3_${i}`], "long", e.currentTarget)
    );
    document.getElementById(`bh3_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x3_${i}`, window[`h3_${i}`], "hilaire", e.currentTarget)
    );
    document.getElementById(`bc3_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x3_${i}`, window[`c3_${i}`], "casaubon", e.currentTarget)
    );
  }

  // Event-Listener für Buch 4
  for (let i = 1; i <= 51; i++) {
    document.getElementById(`bg4_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x4_${i}`, window[`g4_${i}`], "greek", e.currentTarget)
    );
    document.getElementById(`bl4_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x4_${i}`, window[`l4_${i}`], "long", e.currentTarget)
    );
    document.getElementById(`bh4_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x4_${i}`, window[`h4_${i}`], "hilaire", e.currentTarget)
    );
    document.getElementById(`bc4_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x4_${i}`, window[`c4_${i}`], "casaubon", e.currentTarget)
    );
  }
  // Event-Listener für Buch 5
  for (let i = 1; i <= 37; i++) {
    document.getElementById(`bg5_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x5_${i}`, window[`g5_${i}`], "greek", e.currentTarget)
    );
    document.getElementById(`bl5_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x5_${i}`, window[`l5_${i}`], "long", e.currentTarget)
    );
    document.getElementById(`bh5_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x5_${i}`, window[`h5_${i}`], "hilaire", e.currentTarget)
    );
    document.getElementById(`bc5_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x5_${i}`, window[`c5_${i}`], "casaubon", e.currentTarget)
    );
  }

    // Event-Listener für Buch 5
  for (let i = 1; i <= 59; i++) {
    document.getElementById(`bg6_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x6_${i}`, window[`g6_${i}`], "greek", e.currentTarget)
    );
    document.getElementById(`bl6_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x6_${i}`, window[`l6_${i}`], "long", e.currentTarget)
    );
    document.getElementById(`bh6_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x6_${i}`, window[`h6_${i}`], "hilaire", e.currentTarget)
    );
    document.getElementById(`bc6_${i}`)?.addEventListener("click", (e) =>
      toggleText(`x6_${i}`, window[`c6_${i}`], "casaubon", e.currentTarget)
    );
  }


});

// Text ein-/ausblenden mit Farbänderung am Button
function toggleText(id, content, className, button) {
  const e = document.getElementById(id);
  if (!e) return;

  // Prüfen, ob der Button aktuell aktiv ist
  const isActive = button.dataset.active === "true";

  if (isActive) {
    // Text ausblenden
    e.innerHTML = "";
    button.dataset.active = "false";
    // Button Style zurücksetzen
    button.style.backgroundColor = "";
    button.style.color = "";
  } else {
    // Text einblenden
    e.innerHTML = `<span class="${className}">${content}</span>`;
    button.dataset.active = "true";
    // Button einfärben
    const colors = activeColors[className];
    button.style.backgroundColor = colors.background;
    button.style.color = colors.color;
  }
}

// Deutsch ein-/ausblenden
function de_an_aus() {
  toggleClassDisplay("de");
}

// Sprachbuttons ein-/ausblenden
function lang_an_aus() {
  toggleClassDisplay("bu_lang");
}

// Beliebige Klasse umschalten
function toggleClassDisplay(className) {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach(el => {
    el.style.display = (el.style.display === "none") ? "inline-block" : "none";
  });
}

// Buchabschnitte ein-/ausblenden
function buchAnAus(id) {
  const e = document.getElementById(id);
  e.style.display = (e.style.display === "none") ? "block" : "none";
}

// Scrollposition beim Verlassen der Seite speichern
window.addEventListener("beforeunload", () => {
  localStorage.setItem("scrollPosition", window.scrollY);
});

// Scrollposition beim Laden der Seite wiederherstellen
window.addEventListener("load", () => {
  const scrollPos = localStorage.getItem("scrollPosition");
  if (scrollPos !== null) {
    window.scrollTo(0, parseInt(scrollPos, 10));
  }
});
