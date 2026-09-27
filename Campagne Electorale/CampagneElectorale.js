const prompt = require("prompt-sync")();
let choix;

let candidats = [
  {
    cin: "AB123456",
    nom: "Haiker",
    prenom: "Abdessamad",
    partiPolitique: "PJD",
    age: 48,
    electeurs: [
      "KA102938",
      "MA881234",
      "EE554433",
      "HA991122",
      "TA334411",
      "CD345678",
    ],
  },
  {
    cin: "BH234567",
    nom: "Gharib",
    prenom: "Hammouda",
    partiPolitique: "RNI",
    age: 46,
    electeurs: ["EE112233", "ZT445566", "BK778899", "XA123987"],
  },
  {
    cin: "CD345678",
    nom: "Belassal",
    prenom: "Chaoui",
    partiPolitique: "UC",
    age: 51,
    electeurs: ["AA987654", "BB123890", "CC456123"],
  },
  {
    cin: "DE456789",
    nom: "Bouhssini",
    prenom: "Abdelaziz",
    partiPolitique: "Istiqlal",
    age: 44,
    electeurs: ["DD789456", "FF321654", "GG654987"],
  },
  {
    cin: "EF567890",
    nom: "Ibrahimi",
    prenom: "Al Mostapha",
    partiPolitique: "PJD",
    age: 53,
    electeurs: ["HH147258", "JJ258369", "KK369147", "LL741852"],
  },
  {
    cin: "FG678901",
    nom: "Gharras",
    prenom: "Mohamed",
    partiPolitique: "MDS",
    age: 49,
    electeurs: ["MM852963", "NN963852"],
  },
  {
    cin: "GH789012",
    nom: "Rokai",
    prenom: "Hatim",
    partiPolitique: "RNI",
    age: 41,
    electeurs: ["PP159357", "QQ357159", "RR753951"],
  },
  {
    cin: "HJ890123",
    nom: "Rahouia",
    prenom: "El Houcine",
    partiPolitique: "UC",
    age: 47,
    electeurs: ["SS951753", "TT159753"],
  },
  {
    cin: "JK901234",
    nom: "Hammia",
    prenom: "M'barek",
    partiPolitique: "Istiqlal",
    age: 55,
    electeurs: ["UU357951", "VV753159", "WW852147", "XX963258"],
  },
  {
    cin: "KL012345",
    nom: "Yanja",
    prenom: "El Khattat",
    partiPolitique: "PAM",
    age: 50,
    electeurs: [
      "YY147369",
      "ZZ258147",
      "BA369258",
      "CA741963",
      "DA852741",
      "EA963852",
    ],
  },
  {
    cin: "LM123456",
    nom: "Bensaid",
    prenom: "Mehdi",
    partiPolitique: "PAM",
    age: 39,
    electeurs: ["FA159264", "GA357486", "HA753198"],
  },
  {
    cin: "MN234567",
    nom: "Akhannouch",
    prenom: "Aziz",
    partiPolitique: "RNI",
    age: 63,
    electeurs: ["JA951824", "KA159630", "LA357246", "MA753802"],
  },
  {
    cin: "NO345678",
    nom: "Baraka",
    prenom: "Nizar",
    partiPolitique: "Istiqlal",
    age: 60,
    electeurs: ["NA951357", "PA159802"],
  },
  {
    cin: "OP456789",
    nom: "Benkirane",
    prenom: "Abdelilah",
    partiPolitique: "PJD",
    age: 70,
    electeurs: ["QA357913", "RA753824", "SA951602"],
  },
  {
    cin: "PQ567890",
    nom: "Benabdallah",
    prenom: "Nabil",
    partiPolitique: "PPS",
    age: 65,
    electeurs: ["TA159380", "UA357291"],
  },
  {
    cin: "QR678901",
    nom: "Lachgar",
    prenom: "Driss",
    partiPolitique: "USFP",
    age: 69,
    electeurs: ["VA753614", "WA951803", "XA159427"],
  },
  {
    cin: "RS789012",
    nom: "Ouzzine",
    prenom: "Mohamed",
    partiPolitique: "MP",
    age: 55,
    electeurs: ["YA357819", "ZA753204"],
  },
  {
    cin: "ST890123",
    nom: "Sajid",
    prenom: "Mohamed",
    partiPolitique: "UC",
    age: 71,
    electeurs: ["AB951462", "CB159307"],
  },
  {
    cin: "TU901234",
    nom: "Sekkouri",
    prenom: "Younes",
    partiPolitique: "PAM",
    age: 43,
    electeurs: ["DB357820", "EB753194", "FB951628"],
  },
  {
    cin: "UV012345",
    nom: "Fihri",
    prenom: "Abdelmajid",
    partiPolitique: "Istiqlal",
    age: 45,
    electeurs: ["GB159473", "HB357206"],
  },
];

function menu() {
  console.log("-------------------------------------------");
  console.log("1. Ajouter un nouveau candidat");
  console.log("2. Ajouter plusieurs candidats à la fois");
  console.log("3. Afficher la liste des candidats");
  console.log("4. Voter pour un candidat");
  console.log("5. Modifier les informations d'un candidat");
  console.log("6. Supprimer un candidat");
  console.log("7. Rechercher des candidats");
  console.log("8. Statistiques de l'élection");
  console.log("0. Quitter");
  console.log("-------------------------------------------");
}

function Ajouter() {
  let cin = prompt("Entrez la CIN du candidat : ");
  for (let i = 0; i < candidats.length; i++) {
    if (candidats[i].cin === cin) {
      console.log("CIN deja utilise");
      return false;
    }
  }
  let nom = prompt("Entrez le nom : ");
  let prenom = prompt("Entrez le prénom : ");
  let partiPolitique = prompt(
    "Entrez le parti politique (ou laisser vide pour 'Indépendant') : ",
  );
  if (partiPolitique === "") {
    partiPolitique = "Indépendant";
  }

  let age = +prompt("Entrez l'âge : ");
  if (age < 18) {
    console.log("Age minimum pour etre candidat : 18 ans");
    return false;
  } else {
    let nouveauCandidat = {
      cin: cin.toUpperCase(),
      nom: nom,
      prenom: prenom,
      partiPolitique: partiPolitique,
      age: age,
      electeurs: [],
    };

    candidats.push(nouveauCandidat);
    return true;
  }
}

function Ajouterplus() {
  let nombre = +prompt("Combien de candidats souhaitez-vous ajouter : ");
  let i = 0;
  let ajoutes = 0;
  while (i < nombre) {
    console.log(`------------------ Candidat ${i + 1} ------------------`);
    let ok = Ajouter();
    if (ok) {
      ajoutes = ajoutes + 1;
    }
    i++;
  }
  console.log(ajoutes + " candidat(s) ajoute(s).");
}

function afchliste() {
  let sousChoix;
  do {
    console.log("1. Afficher la liste brute");
    console.log("2. Trier par nombre de votes (ordre décroissant)");
    console.log("3. Filtrer par parti politique");
    console.log("0. Retourner");

    sousChoix = prompt("Choisissez une option : ");

    switch (sousChoix) {
      case "1":
        for (let i = 0; i < candidats.length; i++) {
          console.log(
            `------------------ Candidat ${i + 1} ------------------`,
          );
          console.log(`CIN : ${candidats[i].cin}`);
          console.log(`Nom : ${candidats[i].nom}`);
          console.log(`Prénom : ${candidats[i].prenom}`);
          console.log(`Parti Politique : ${candidats[i].partiPolitique}`);
          console.log(`Age : ${candidats[i].age}`);
          console.log(`Nombre de votes : ${candidats[i].electeurs.length}`);
        }
        break;
      case "2":
        let décroicandidats = [...candidats];
        for (let i = 0; i < décroicandidats.length; i++) {
          for (let j = i + 1; j < décroicandidats.length; j++) {
            if (
              décroicandidats[i].electeurs.length <
              décroicandidats[j].electeurs.length
            ) {
              let temp = décroicandidats[i];
              décroicandidats[i] = décroicandidats[j];
              décroicandidats[j] = temp;
            }
          }
        }
        for (let i = 0; i < décroicandidats.length; i++) {
          console.log(
            `------------------ Candidat ${i + 1} ------------------`,
          );
          console.log(`CIN : ${décroicandidats[i].cin}`);
          console.log(`Nom : ${décroicandidats[i].nom}`);
          console.log(`Prénom : ${décroicandidats[i].prenom}`);
          console.log(`Parti Politique : ${décroicandidats[i].partiPolitique}`);
          console.log(`Age : ${décroicandidats[i].age}`);
          console.log(
            `Nombre de votes : ${décroicandidats[i].electeurs.length}`,
          );
        }
        break;
      case "3":
        let uniqueParties = [];
        for (let i = 0; i < candidats.length; i++) {
          if (!uniqueParties.includes(candidats[i].partiPolitique)) {
            uniqueParties.push(candidats[i].partiPolitique);
          }
        }
        console.log("Partis disponibles :");
        for (let i = 0; i < uniqueParties.length; i++) {
          console.log("- " + uniqueParties[i]);
        }
        let partiChoisi = prompt("Choisir un nom de parti : ");

        let trouve = false;
        for (let i = 0; i < candidats.length; i++) {
          if (
            candidats[i].partiPolitique.toUpperCase() ===
            partiChoisi.toUpperCase()
          ) {
            console.log(
              `------------------ Candidat ${i + 1} ------------------`,
            );
            console.log(`CIN : ${candidats[i].cin}`);
            console.log(`Nom : ${candidats[i].nom}`);
            console.log(`Prénom : ${candidats[i].prenom}`);
            console.log(`Parti Politique : ${candidats[i].partiPolitique}`);
            console.log(`Age : ${candidats[i].age}`);
            console.log(`Nombre de votes : ${candidats[i].electeurs.length}`);
            trouve = true;
          }
        }
        if (trouve === false) {
          console.log("Aucun candidat dans ce parti.");
        }
        break;
      case "0":
        break;
      default:
        console.log("Option invalide, réessayez.");
    }
  } while (sousChoix !== "0");
}

function votercin() {
  let cinElecteur = prompt("Entrez la CIN pour voter : ").toUpperCase();

  for (let i = 0; i < candidats.length; i++) {
    if (candidats[i].electeurs.includes(cinElecteur)) {
      console.log("Vous avez déjà voté");
      return false;
    }
  }

  let cincan = prompt("Entrer la CIN du candidat ciblé : ").toUpperCase();

  for (let i = 0; i < candidats.length; i++) {
    if (candidats[i].cin === cincan) {
      candidats[i].electeurs.push(cinElecteur);
      return true;
    }
  }

  console.log("Aucun candidat ne possède ce CIN");
  return false;
}

function Modifier() {
  let cinmodi = prompt("Veuillez entrer la CIN : ").toUpperCase();
  let trouve = false;
  for (let i = 0; i < candidats.length; i++) {
    if (cinmodi === candidats[i].cin) {
      trouve = true;
      console.log(`------------------------------------`);
      console.log(`Votre parti politique est : ${candidats[i].partiPolitique}`);
      console.log(`Votre age est : ${candidats[i].age}`);
      console.log(`------------------------------------`);
      let nvparti = prompt("Entrez le nouveau parti politique : ");
      let nvage = +prompt("Entrez le nouvel age : ");
      if (nvage < 18) {
        console.log("Age minimum pour etre candidat : 18 ans");
      } else {
        candidats[i].age = nvage;
        candidats[i].partiPolitique = nvparti;
        return true;
      }
    }
  }
  if (trouve === false) {
    console.log("Candidat introuvable.");
  }
}

function Supprimer() {
  let cinsup = prompt("Veuillez entrer la CIN pour Supprimer : ").toUpperCase();
  let trouve = false;
  let position = 0;
  for (let i = 0; i < candidats.length; i++) {
    if (cinsup === candidats[i].cin) {
      position = i;
      trouve = true;
    }
  }
  if (trouve === false) {
    console.log("Candidat introuvable.");
    return false;
  }
  console.log("-------------------------------------------");
  console.log(
    `Vous allez supprimer le candidat : ${candidats[position].nom} ${candidats[position].prenom}`,
  );

  candidats[position] = candidats[candidats.length - 1];
  candidats.length = candidats.length - 1;

  for (let i = 0; i < candidats.length; i++) {
    let newcan = [];
    for (let j = 0; j < candidats[i].electeurs.length; j++) {
      if (candidats[i].electeurs[j] !== cinsup) {
        newcan.push(candidats[i].electeurs[j]);
      } else {
        console.log(
          `Ce candidat est un electeur pour :  ${candidats[i].nom} ${candidats[i].prenom}`,
        );
      }
    }
    candidats[i].electeurs = newcan;
  }

  return true;
}

function Rechercher() {
  let nomrech = prompt("Entrez le nom : ");
  if (nomrech === "") {
    console.log("Veuillez entrer un nom");
    return;
  }

  let nomforma = nomrech[0].toUpperCase();
  for (let i = 1; i < nomrech.length; i++) {
    nomforma += nomrech[i].toLowerCase();
  }
  let trouve = false;
  for (let i = 0; i < candidats.length; i++) {
    if (nomforma === candidats[i].nom) {
      trouve = true;
      console.log(`------------------ Candidat ${i + 1} ------------------`);
      console.log(`CIN : ${candidats[i].cin}`);
      console.log(`Nom : ${candidats[i].nom}`);
      console.log(`Prénom : ${candidats[i].prenom}`);
      console.log(`Parti Politique : ${candidats[i].partiPolitique}`);
      console.log(`Age : ${candidats[i].age}`);
      console.log(`Nombre de votes : ${candidats[i].electeurs.length}`);
    }
  }
  if (trouve === false) {
    console.log("Candidat introuvable");
  }
}

function Statistiques() {
  let statsChoix;
  do {
    console.log("1. Afficher le nombre total de candidats");
    console.log(
      "2. Afficher le nombre total de votes exprimés dans toute l'élection",
    );
    console.log("3. Afficher le Top 3 des candidats ayant le plus de votes");
    console.log("4. Afficher le nombre de candidats par parti politique");
    console.log("0. Retourner");

    statsChoix = prompt("Choisissez une option : ");

    switch (statsChoix) {
      case "1":
        console.log(
          `Le nombre total de candidats est : ${candidats.length} candidats`,
        );
        break;
      case "2":
        let total = 0;
        for (let i = 0; i < candidats.length; i++) {
          total += candidats[i].electeurs.length;
        }
        console.log(
          `Le nombre total de votes exprimés dans toute l'élection est : ${total} votes`,
        );
        break;
      case "3":
        let décroicandidats = [...candidats];
        for (let i = 0; i < décroicandidats.length; i++) {
          for (let j = i + 1; j < décroicandidats.length; j++) {
            if (
              décroicandidats[i].electeurs.length <
              décroicandidats[j].electeurs.length
            ) {
              let temp = décroicandidats[i];
              décroicandidats[i] = décroicandidats[j];
              décroicandidats[j] = temp;
            }
          }
        }
        console.log(`Le Top 3 des candidats ayant le plus de votes : `);
        for (let i = 0; i < 3; i++) {
          console.log(
            `------------------ Candidat ${i + 1} ------------------`,
          );
          console.log(`CIN : ${décroicandidats[i].cin}`);
          console.log(`Nom : ${décroicandidats[i].nom}`);
          console.log(`Prénom : ${décroicandidats[i].prenom}`);
          console.log(`Parti Politique : ${décroicandidats[i].partiPolitique}`);
          console.log(`Age : ${décroicandidats[i].age}`);
          console.log(
            `Nombre de votes : ${décroicandidats[i].electeurs.length}`,
          );
        }
        break;
      case "4":
        let uniqueParties = [];
        for (let i = 0; i < candidats.length; i++) {
          if (!uniqueParties.includes(candidats[i].partiPolitique)) {
            uniqueParties.push(candidats[i].partiPolitique);
          }
        }
        for (let i = 0; i < uniqueParties.length; i++) {
          let compteur = 0;
          for (let j = 0; j < candidats.length; j++) {
            if (candidats[j].partiPolitique === uniqueParties[i]) {
              compteur += 1;
            }
          }
          console.log(uniqueParties[i] + " : " + compteur);
        }
        break;
      case "0":
        break;
      default:
        console.log("Option invalide, réessayez.");
    }
  } while (statsChoix !== "0");
}

do {
  menu();
  choix = prompt("Choisissez une option (0-8) : ");

  switch (choix) {
    case "1":
      let ok1 = Ajouter();
      if (ok1) {
        console.log("Candidat ajouté avec succès !");
      }
      break;
    case "2":
      Ajouterplus();
      break;
    case "3":
      afchliste();
      break;
    case "4":
      let ok2 = votercin();

      if (ok2) {
        console.log("Vote ajouté avec succès !");
      }
      break;

    case "5":
      let ok3 = Modifier();

      if (ok3) {
        console.log("Candidat modifié avec succès !");
      }
      break;
    case "6":
      let ok4 = Supprimer();

      if (ok4) {
        console.log("Candidat supprimé avec succès !");
      }
      break;
    case "7":
      Rechercher();
      break;
    case "8":
      Statistiques();
      break;
    case "0":
      console.log("Au revoir !");
      break;
    default:
      console.log("Option invalide, réessayez.");
  }
} while (choix !== "0");
