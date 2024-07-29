function magic8Ball() {
  const responses = [
    "Mukavaa",
    "Hienoa",
    "No",
    "Niin",
    "Totta",
    "Valitettavasti",
    "Kyllä.",
    "Ei.",
  ];

  let randomIndex = Math.floor(Math.random() * responses.length);

  let response;
  switch (randomIndex) {
    case 0:
      response = responses[0];
      break;
    case 1:
      response = responses[1];
      break;
    case 2:
      response = responses[2];
      break;
    case 3:
      response = responses[3];
      break;
    case 4:
      response = responses[4];
      break;
    case 5:
      response = responses[5];
      break;
    case 6:
      response = responses[6];
      break;
    case 7:
      response = responses[7];
      break;
    case 7:
      response = responses[8];
      break;
    default:
      response = "Virhe: Yritä uudelleen.";
  }

  console.log("Magic 8-Ball sanoo: " + response);
}

let question = prompt("Kysy kyllä-tai-ei -kysymys:");

if (question == "kyllä") {
  magic8Ball();
} else {
  console("Ohjelmointi valmistettu.");
}
