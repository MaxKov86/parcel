var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.createElement('ul');
document.body.appendChild(countriesList);
var input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Enter country name';
document.body.appendChild(input);
var button = document.createElement('button');
button.innerHTML = 'Search';
document.body.appendChild(button);
button.addEventListener('click', searchCountries);
function searchCountries() {
  var countryName = input.value;
  if (!countryName.length) countryName = 'Poland';
  fetch(url + countryName)
    .then(function (resp) {
      return resp.json();
    })
    .then(showCountriesList);
}
function showCountriesList(resp) {
  countriesList.innerHTML = '';
  resp.forEach(function (item) {
    var liEl = document.createElement('li');
    liEl.innerHTML = item.name;
    countriesList.appendChild(liEl);
  });
}
