document.querySelector(".idkyet").addEventListener("click", () => {
  fetch(`/api/news/:country/:category/q?`, {
    method: "GET",
    headers: {},
  })
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      console.log(typeof body, body);
    })
    .catch((err) => {
      console.log("ERROR: ", err);
    });
});

// const searchBarSection = document.querySelector(".search-section");
// // searchBarSection.textContent = `Insert keywords: "Trump", "Sports", etc `
// searchBarSection.appendChild(searchBar);

const countriesArray = [
  "|Country",
  "ae|United Arab Emirates",
  "ar|Argentina",
  "at|Austria",
  "au|Australia",
  "be|Belgium",
  "bg|Bulgaria",
  "br|Brazil",
  "ca|Canda",
  "ch|Switzerland",
  "cn|China",
  "co|Colombia",
  "cu|Cuba",
  "cz|Czech Republic",
  "de|Germany",
  "eg|Egypt",
  "fr|Frace",
  "gb|United Kingdom",
  "gr|Greece",
  "hk|Hong Kong",
  "hu|Hungary",
  "id|Indonesia",
  "ie|Ireland",
  "il|Israel",
  "in|India",
  "it|Italy",
  "jp|Japan",
  "kr|South Korea",
  "lt|Lithuania",
  "lv|Latvia",
  "ma|Morocco",
  "mx|Mexico",
  "my|Malaysia",
  "ng|Nigeria",
  "nl|Netherlands",
  "no|Norway",
  "nz|New Zealand",
  "ph|Philippines",
  "pl|Poland",
  "pt|Portugal",
  "ro|Romania",
  "rs|Serbia",
  "ru|Russia",
  "sa|South Africa",
  "se|Sweden",
  "sg|Singapore",
  "si|Slovenia",
  "sk|Slovakia",
  "th|Thailand",
  "tr|Turkey",
  "tw|Taiwan",
  "ua|Ukraine",
  "us|United States",
  "ve|Venezuela",
  "za|South Africa",
];

const catergoryArray = [
  "|Category",
  "business|Business",
  "technology|Technology",
  "entertainment|Entertainment",
  "general|General",
  "health|Health",
  "science|Science",
  "sports|Sports",
];

const catDropdownSection = document.querySelector("#category");

const couDropdownSection = document.querySelector("#country");

// creating a function that creates dropdowns
// function takes in two paramenters
function dropdownFunc(arr, section) {
  // looping through the passed in array to create options for each value in the array
  for (let option in arr) {
    // splits the values in the array by the "|" symbol and returns a new array
    let pair = arr[option].split("|");
    // creating a new option and storing the "function" to a variable
    let newOption = document.createElement("option");
    // this takes the first value in the splitted array and adds it to the options value
    newOption.value = pair[0];
    // this takes the second value in the splitted array and adds it to the options inner HTML (what the user see's)
    newOption.innerHTML = pair[1];
    // add the new options to the dropdown
    section.options.add(newOption);
  }
}

// call dropdown function to create the menu
dropdownFunc(countriesArray, couDropdownSection);
dropdownFunc(catergoryArray, catDropdownSection);

let country = "";
let category = "";

// supposed to get the value of the selected country and category the user chose
// const categorySelected = () => {
// let select = document.getElementById("category");
//  category = select.options[select.selectedIndex].value;
//  console.log(category)
// return category
// }

// const countrySelected = () => {
//     let select = document.getElementById("country");
//     let country = select.options[select.selectedIndex].value;
//     return country
//     }

document.querySelector("#category").addEventListener("change", () => {
  let select = document.getElementById("category");
  category = select.options[select.selectedIndex].value;
  return category;
});

console.log(category);
