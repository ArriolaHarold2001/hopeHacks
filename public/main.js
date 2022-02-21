"use strict";
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
  "fr|France",
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

const selectCategory = document.getElementById("category");
const selectCountry = document.getElementById("country");
const submission = document.querySelector(".res-submission");
const throwawayElement = document.querySelector(".throwaway");
let country = "";
let category = "";

document.querySelector("#category").addEventListener("change", () => {
  category = selectCategory.options[selectCategory.selectedIndex].value;
  // console.log(category);
});
document.querySelector("#country").addEventListener("change", () => {
  country = selectCountry.options[selectCountry.selectedIndex].value;
  // console.log(country);
});

// let url = "";
let resTitle = "";
let resAuthor = "";
let resDescription = "";
let resSource = "";
let resImg = "";
let resContent = "";
let resUrl = "";

document.querySelector("#api-btn").addEventListener("click", (e) => {
  e.preventDefault();
  // window.location = "/news";
  // url = `/api/news/${country}/${category}/`;

  fetch(`/api/news/${country}/${category}/`, {
    method: "GET",
    headers: {},
  })
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      resTitle = body.title;
      resAuthor = body.author;
      resDescription = body.description;
      resSource = body.source.name;
      resImg = body.urlToImage;
      resContent = body.content;
      resUrl = body.url;

      let html = `
      <section class="res-submission">
      <div class="res-title">
        <h2>${resTitle}</h2>
      </div>
      <div class="res-author">
        <h3>${resAuthor}</h3>
        <h3>|</h3>
        <h3>${resSource}</h3>
      </div>
      <div class="res-description">
      <h4>${resDescription}</h4>
      </div>
      <div class="res-img">
        <img src="${body.urlToImage}"/>
      </div>
      <div class="res-content">
        <p>${resContent}  </p>
        <a href="${resUrl}" target="_blank">${resSource} ↗️</a>
      </div>
    </section>
      `;

      throwawayElement.style.display = "none";
      submission.insertAdjacentHTML("afterend", html);
    })
    .catch((err) => {
      throw err;
    });
});

document.querySelector("#api-btn").addEventListener("touchend", (e) => {
  e.preventDefault();
  // window.location = "/news";
  // url = `/api/news/${country}/${category}/`;

  fetch(`/api/news/${country}/${category}/`, {
    method: "GET",
    headers: {},
  })
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      resTitle = body.title;
      resAuthor = body.author;
      resDescription = body.description;
      resSource = body.source.name;
      resImg = body.urlToImage;
      resContent = body.content;
      resUrl = body.url;

      let html = `
      <section class="res-submission">
      <div class="res-title">
        <h2>${resTitle}</h2>
      </div>
      <div class="res-author">
        <h3>${resAuthor}</h3>
        <h3>|</h3>
        <h3>${resSource}</h3>
      </div>
      <div class="res-description">
      <h4>${resDescription}</h4>
      </div>
      <div class="res-img">
        <img src="${body.urlToImage}"/>
      </div>
      <div class="res-content">
        <p>${resContent}  </p>
        <a href="${resUrl}" target="_blank">${resSource} ↗️</a>
      </div>
    </section>
      `;

      throwawayElement.style.display = "none";
      submission.insertAdjacentHTML("afterend", html);
    })
    .catch((err) => {
      throw err;
    });
});
