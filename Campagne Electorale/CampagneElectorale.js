const prompt = require("prompt-sync")();
const candidats = require("./candidats.js");

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

do {
  menu();
  choix = prompt("Choisissez une option (0-8) : ");

  switch (choix) {
    case "1":
      // Ajouter un candidat
      break;
    case "2":
      // Ajouter plusieurs candidats
      break;
    case "3":
      // Afficher la liste des candidats
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
