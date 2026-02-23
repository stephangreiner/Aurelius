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

  // Event-Listener für alle Übersetzungsbuttons (robust gegen Lücken/Vertipper in IDs)
  const translationPrefixMap = {
    g: { keyPrefix: "g", className: "greek" },
    l: { keyPrefix: "l", className: "long" },
    h: { keyPrefix: "h", className: "hilaire" },
    c: { keyPrefix: "c", className: "casaubon" }
  };

  document.querySelectorAll('button[id]').forEach((button) => {
    const match = button.id.match(/^b([glhc])(\d+)_(\d+)$/);
    if (!match) return;

    const [, language, book, section] = match;
    const config = translationPrefixMap[language];
    if (!config) return;

    button.addEventListener("click", (e) => {
      const target = e.currentTarget.closest("article")?.querySelector(".xx");
      const content = window[`${config.keyPrefix}${book}_${section}`];
      toggleText(target, content, config.className, e.currentTarget);
    });
  });


});

// Text ein-/ausblenden mit Farbänderung am Button
function toggleText(targetElement, content, className, button) {
  if (!targetElement || !button) return;

  // Prüfen, ob der Button aktuell aktiv ist
  const isActive = button.dataset.active === "true";

  if (isActive) {
    // Text ausblenden
    targetElement.innerHTML = "";
    button.dataset.active = "false";
    // Button Style zurücksetzen
    button.style.backgroundColor = "";
    button.style.color = "";
    return;
  }

  // Alle Sprachbuttons derselben Zeile deaktivieren, damit nur eine Übersetzung aktiv ist
  const buttonContainer = button.closest("article");
  if (buttonContainer) {
    buttonContainer.querySelectorAll('button[id^="bg"], button[id^="bl"], button[id^="bh"], button[id^="bc"]').forEach((btn) => {
      btn.dataset.active = "false";
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });
  }

  // Nur Text anzeigen, wenn Inhalt vorhanden ist
  if (!content) {
    targetElement.innerHTML = "";
    return;
  }

  // Text einblenden
  targetElement.innerHTML = `<span class="${className}">${content}</span>`;
  button.dataset.active = "true";

  // Button einfärben
  const colors = activeColors[className];
  if (colors) {
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
