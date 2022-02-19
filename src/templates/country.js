const countryList = countries => {
  const { flags, name } = countries;

  return `
	<div >
      <p style="font-size: 30px; font-weight: bold">
        <img src="${flags.svg}"
          alt="flag ${name.official}" width="70px">
        ${name.official}
      </p>
  </div>
	`;
};

const countryData = countries => {
  const { flags, name, capital, population, languages } = countries;
  const countryLang = Object.values(languages).join(', ');

  return `
	<div>
      <p style="font-size: 30px; font-weight: bold">
        <img src="${flags.svg}"
          alt="flag ${name.official}" width="70px">
        ${name.official}
      </p>
      <p style="font-size: 20px; font-weight: bold">
        <span style="font-size: 30px; font-weight: bold">Capital: </span>${capital}</p>
      <p style="font-size: 20px; font-weight: bold">
        <span style="font-size: 30px; font-weight: bold">Population: </span>${population}</p>
      <p style="font-size: 20px; font-weight: bold">
        <span style="font-size: 30px; font-weight: bold">Languages: </span>${countryLang}</p>
  </div>
	`;
};

export { countryData, countryList };