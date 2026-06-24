const industryContent = {
  heilpraktiker: {
    eyebrow: "Praxis-KI als Corporate-LLM-Mustercase",
    title: "Aus der eigenen Heilpraktikerpraxis entsteht die Blaupause für sichere KMU-KI.",
    copy:
      "Ein echter KI-Arbeitsplatz für vertrauliche Praxisarbeit: lokal für sensible Patientendaten, flexibel für allgemeine Aufgaben und als Beratungsbeispiel auf andere KMUs übertragbar.",
  },
  steuerberater: {
    eyebrow: "Übertragbarer Beratungsfall für Steuerberater",
    title: "Die Praxis-Blaupause wird zur sicheren Mandanten-KI für kleine Kanzleien.",
    copy:
      "Gleiche Architektur, andere Datenrisiken: lokale Verarbeitung für vertrauliche Unterlagen, Cloud-KI für allgemeine Texte und klare Regeln für Mandatsdaten.",
  },
  kanzlei: {
    eyebrow: "Übertragbarer Beratungsfall für Kanzleien",
    title: "Aus dem Heilpraktiker-Case wird sichere Wissensarbeit für vertrauliche Mandate.",
    copy:
      "Der Mustercase zeigt, wie kleine Organisationen sensible Akten, internes Wissen und KI-Nutzung trennen, steuern und nachvollziehbar machen.",
  },
};

const buttons = document.querySelectorAll("[data-industry]");
const eyebrow = document.querySelector("[data-industry-eyebrow]");
const title = document.querySelector("[data-industry-title]");
const copy = document.querySelector("[data-industry-copy]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const industry = button.dataset.industry;
    const content = industryContent[industry];

    buttons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    eyebrow.textContent = content.eyebrow;
    title.textContent = content.title;
    copy.textContent = content.copy;
  });
});
