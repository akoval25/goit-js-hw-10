import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { countryData, countryList } from './templates/country';

const BASE_URL = 'https://restcountries.com/v3.1/name/';
const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');
const infoRef = document.querySelector('.country-info');
const renderCountryInfo = data => infoRef.innerHTML = data;

inputRef.addEventListener('input', debounce(onInput, `${DEBOUNCE_DELAY}`));

function onInput(e) {
  let name = e.target.value;
  const fetchCountries = name => {
    name = e.target.value;
    return fetch(`${BASE_URL}${name}?fields=name,capital,flags,population,languages`)
      .then(response => {
        if (!response.ok) {
          const incorrectInput = '';
          renderCountryInfo(incorrectInput);
          Notiflix.Notify.failure('😈 Oops, there is no country with that name');

          throw response;
        }
        return response.json();
      })
      .then(response => {
        return response;
      });
  };

  fetchCountries()
    .then(countries => {
      const dataCountryInfo = createCountry(countries);
      renderCountryInfo(dataCountryInfo);
    })
    .catch(error => console.log(error));

  function createCountry(countries) {
    if (countries.length === 1) {
      return countries.map(country => countryData(country)).join('');
    } else if (countries.length >= 2 && countries.length <= 10) {
      return countries.map(country => countryList(country)).join('');
    } else {
      Notiflix.Notify.info('😲 Too many matches found. Please enter a more specific name.');
      return '';
    }
  }
}