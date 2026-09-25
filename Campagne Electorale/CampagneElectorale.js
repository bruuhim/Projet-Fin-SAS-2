const prompt = require("prompt-sync")();

const candidats = [
  {
    cin: "AB123456",
    nom: "Haiker",
    prenom: "Abdessamad",
    partiPolitique: "PJD",
    age: 48,
    electeurs: ["KA102938", "MA881234", "EE554433", "HA991122", "TA334411"],
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
    nom: "Fassi Fihri",
    prenom: "Abdelmajid",
    partiPolitique: "Istiqlal",
    age: 45,
    electeurs: ["GB159473", "HB357206"],
  },
];

let choix;

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
    console.log("Vous n'êtes pas éligible pour voter.");
  } else {
    let nouveauCandidat = {
      cin: cin,
      nom: nom,
      prenom: prenom,
      partiPolitique: partiPolitique,
      age: age,
      electeurs: [],
    };

    candidats.push(nouveauCandidat);
  }
}

function Ajouterplus() {
  choix = +prompt("Combien de candidats souhaitez-vous ajouter : ");
  let i = 0;
  while (i < choix) {
    console.log(`------------------ Candidat ${i + 1} ------------------`);
    Ajouter();
    i++;
  }
}

function afchliste() {
  console.log("1. Afficher la liste brute");
  console.log("2. Trier par nombre de votes (ordre décroissant)");
  console.log("3. Filtrer par parti politique");
  console.log("0. Retourner");

  choix = prompt("Choisissez une option : ");

  switch (choix) {
    case "1":
      for (i = 0; i < candidats.length; i++) {
        console.log(`------------------ Candidat ${i + 1} ------------------`);
        console.log(`CIN : ${candidats[i].cin}`);
        console.log(`Nom : ${candidats[i].nom}`);
        console.log(`Prénom : ${candidats[i].prenom}`);
        console.log(`Parti Politique : ${candidats[i].partiPolitique}`);
        console.log(`Age : ${candidats[i].age}`);
        console.log(`Nombre de votes : ${candidats[i].electeurs.length}`);
      }
    case "2":
      let décroicandidats = []
      for (i = 0; i < candidats.length; i++) {
        console.log(`------------------ Candidat ${i + 1} ------------------`);
      }
  }
}

do {
  menu();
  choix = prompt("Choisissez une option (0-8) : ");

  switch (choix) {
    case "1":
      Ajouter();
      console.log("Candidat ajouté avec succès !");
      break;
    case "2":
      Ajouterplus();
      console.log("Candidats ajoutés avec succès !");
      break;
    case "3":
      afchliste();
      break;
    case "4":
      // Voter
      break;
    case "5":
      // Modifier
      break;
    case "6":
      // Supprimer
      break;
    case "7":
      // Rechercher
      break;
    case "8":
      // Statistiques
      break;
    case "0":
      console.log("Au revoir !");
      break;
    default:
      console.log("Option invalide, réessayez.");
  }
} while (choix !== "0");
