const buttons = document.querySelectorAll(".num__container");

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    // Partie changement de couleur
    buttons.forEach((button) => {
      button.style.backgroundColor = "#323c47";
    });
    button.style.backgroundColor = "orange";

    // Partie text display
    const title = document.querySelector(".card-body__layout > .title");
    const paragraph = document.querySelector(".card-body__layout > .paragraph");

    title.textContent = sections[i].title;
    paragraph.textContent = sections[i].paragraph;

    // Finish reading and ready for submit
    const submitButton = document.querySelector("button");

    if (i == sections.length - 1) {
      submitButton.style.backgroundColor = "white";
      submitButton.style.color = "orange";

      submitButton.addEventListener("click", () => {
        const card = document.querySelector(".card");
        const hiddenCard = document.querySelector(".hidden-card");

        card.style.display = "none";
        hiddenCard.style.display = "flex";

        document
          .getElementById("final-button")
          .addEventListener("click", () => {
            window.location.reload();
          });
      });
    } else {
      submitButton.style.backgroundColor = "orange";
      submitButton.style.color = "white";
    }
  });
});

const sections = [
  {
    title: "How did we do?",
    paragraph:
      "Please let us know how we did your support request. All feeback is appreciated to help us to improve our offering!",
  },
  {
    title: "How are we?",
    paragraph:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour",
  },
  {
    title: "We are we from?",
    paragraph:
      " calibrer une mise en page, lon utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Wikipédia!",
  },
  {
    title: "In what we work?",
    paragraph:
      "improve our offering! improve our offering! improve our offering! improve our offering! improve our offering!",
  },
  {
    title: "Already clear?",
    paragraph:
      "Please let us know  to help us to improve our  offering! improve our offering!  offering! improve our offering!",
  },
];
