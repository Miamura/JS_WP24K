class Auto {
  constructor(rekisterinumero, valmistaja, malli, omistaja, hinta, vari) {
    this.rekisterinumero = rekisterinumero;
    this.valmistaja = valmistaja;
    this.malli = malli;
    this.omistaja = omistaja;
    this.hinta = hinta;
    this.vari = vari;
  }
}

const autot = [];

document
  .getElementById("autoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const rekisterinumero = document.getElementById("rekisterinumero").value;
    const valmistaja = document.getElementById("valmistaja").value;
    const malli = document.getElementById("malli").value;
    const omistaja = document.getElementById("omistaja").value;
    const hinta = document.getElementById("hinta").value;
    const vari = document.getElementById("vari").value;

    const uusiAuto = new Auto(
      rekisterinumero,
      valmistaja,
      malli,
      omistaja,
      hinta,
      vari
    );
    autot.push(uusiAuto);

    paivitaTaulukko();
    document.getElementById("autoForm").reset();
  });

function paivitaTaulukko() {
  const tbody = document
    .getElementById("autoTable")
    .getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  autot.forEach((auto) => {
    const row = tbody.insertRow();
    row.insertCell(0).textContent = auto.rekisterinumero;
    row.insertCell(1).textContent = auto.valmistaja;
    row.insertCell(2).textContent = auto.malli;
    row.insertCell(3).textContent = auto.omistaja;
    row.insertCell(4).textContent = auto.hinta;
    row.insertCell(5).textContent = auto.vari;
  });
}

function etsiAuto() {
  const searchRekisterinumero = document.getElementById(
    "searchRekisterinumero"
  ).value;
  const result = autot.find(
    (auto) => auto.rekisterinumero === searchRekisterinumero
  );
  const searchResultDiv = document.getElementById("searchResult");

  searchResultDiv.innerHTML = "";

  if (result) {
    searchResultDiv.innerHTML = `
      <p>Valmistaja: ${result.valmistaja}</p>
      <p>Malli: ${result.malli}</p>
      <p>Omistaja: ${result.omistaja}</p>
    `;
  } else {
    searchResultDiv.innerHTML = "<p>Autoa ei löytynyt.</p>";
  }
}

function etsiAuto() {
  try {
    const searchRekisterinumero = document.getElementById(
      "searchRekisterinumero"
    ).value;
    if (!searchRekisterinumero) {
      throw new Error("Rekisterinumero on tyhjä");
    }

    const result = autot.find(
      (auto) => auto.rekisterinumero === searchRekisterinumero
    );
    const searchResultDiv = document.getElementById("searchResult");

    searchResultDiv.innerHTML = "";

    if (result) {
      searchResultDiv.innerHTML = `
          <p>Valmistaja: ${result.valmistaja}</p>
          <p>Malli: ${result.malli}</p>
          <p>Omistaja: ${result.omistaja}</p>
        `;
    } else {
      searchResultDiv.innerHTML = "<p>Autoa ei löytynyt.</p>";
    }
  } catch (error) {
    document.getElementById(
      "searchResult"
    ).innerHTML = `<p>Virhe: ${error.message}</p>`;
  }
}
