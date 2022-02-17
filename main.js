const countries = [
  "ae",
  "ar",
  "at",
  "au",
  "be",
  "bg",
  "br",
  "ca",
  "ch",
  "cn",
  "co",
  "cu",
  "cz",
  "de",
  "eg",
  "fr",
  "gb",
  "gr",
  "hk",
  "hu",
  "id",
  "ie",
  "il",
  "in",
  "it",
  "jp",
  "kr",
  "lt",
  "lv",
  "ma",
  "mx",
  "my",
  "ng",
  "nl",
  "no",
  "nz",
  "ph",
  "pl",
  "pt",
  "ro",
  "rs",
  "ru",
  "sa",
  "se",
  "sg",
  "si",
  "sk",
  "th",
  "tr",
  "tw",
  "ua",
  "us",
  "ve",
  "za",
];

const userContries = [
  "United Arab Emirates",
  "Argentina",
  "Austria",
  "Australia",
  "Belgium",
  "Bulgaria",
  "Brazil",
  "Canda",
  "Switzerland",
  "China",
  "Colombia",
  "Cuba",
  "Czech Republic",
  "Germany",
  "Egypt",
  "Frace",
  "United Kingdom",
  "Greece",
  "Hong Kong",
  "Hungary",
  "Indonesia",
  "Ireland",
  "Israel",
  "India",
  "Italy",
  "Japan",
  "South Korea",
  "Lithuania",
  "Latvia",
  "Morocco",
  "Mexico",
  "Malaysia",
  "Nigeria",
  "Netherlands",
  "Norway",
  "New Zealand",
  "Philippines",
  "Poland",
  "Portugal",
  "Romania",
  "Serbia",
  "Russia",
  "South Africa",
  "Sweden",
  "Singapore",
  "Slovenia",
  "Slovakia",
  "Thailand",
  "Turkey",
  "Taiwan",
  "Ukraine",
  "United States",
  "Venezuela",
  "South Africa",
];

// function categoryFilter() {
//   var selectCategory = document.getElementById("category");
//   var userInputCategory =
//     selectCategory.options[selectCategory.selectedIndex].value;
//   return userInputCategory;
// }

// function categoryFilter() {
//   var selectCountry = document.getElementById("country");
//   var userInputCountry =
//     selectCountry.options[selectCountry.selectedIndex].value;
//   return userInputCountry;
// }

//make button
//fetch

document.querySelector(".idkyet").addEventListener("click", () => {
  fetch(`127.0.0.1:8000/api/news/jp/business/bitcoin`).then((response) => {
    console.log(response);
  });
});
