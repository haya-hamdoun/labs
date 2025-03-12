document.addEventListener("DOMContentLoaded", async function () {
  const res = await fetch("https://restcountries.com/v3.1/all");
  let data = [];
  if (res.ok) {
    data = await res.json();
  }

  // console.log(res);
  // console.log(data);

  // const regions = data
  //   .map((c) => c.region)
  //   .filter((r, i, a) => a.indexOf(r) === i)
  //   .sort(); // array of region names with no duplicates

  // console.log(regions);

  const hierarchy = {};
  data.forEach((country) => {
    if (!("subregion" in country)) {
      country.subregion = "—";
    }

    if (!(country.region in hierarchy)) {
      hierarchy[country.region] = {};
    }
    if (!(country.subregion in hierarchy[country.region])) {
      hierarchy[country.region][country.subregion] = {};
    }

    hierarchy[country.region][country.subregion][country.name.common] = country;
  });

  // console.log(hierarchy);

  function updateRegions() {
    regions.innerHTML = Object.keys(hierarchy)
      .map((r) => `<option value="${r}">${r}</option>`)
      .sort()
      .join("");
  }

  function updateSubregions(region) {
    subregions.innerHTML = Object.keys(hierarchy[region])
      .map((r) => `<option value="${r}">${r}</option>`)
      .sort()
      .join("");
  }

  function updateCountries(region, subregion) {
    countries.innerHTML = Object.keys(hierarchy[region][subregion])
      .map((r) => `<option value="${r}">${r}</option>`)
      .sort()
      .join("");
  }

  function updateFacts(region, subregion, country) {
    const info = hierarchy[region][subregion][country];
    facts.innerHTML = `<h2>Facts about ${info.name.common} ${info.flag}</h2>
          <div id="country-flag">
            <img src="${info.flags.svg}" alt="Flag of ${info.name.common}" />
          </div>
          <table>
            <tbody>
              <tr>
                <th scope="row">Official Name</th>
                <td>${info.name.official} (${
      info.translations.ara.official
    })</td>
              </tr>
              <tr>
                <th scope="row">Capital City</th>
                <td>${info.capital}</td>
              </tr>
              <tr>
                <th scope="row">Population</th>
                <td>${Number(info.population).toLocaleString()}</td>
              </tr>
              <tr>
                <th scope="row">Languages</th>
                <td>${Object.values(info.languages).join(",")}</td>
              </tr>
              <tr>
                <th scope="row">Currencies</th>
                <td>Qatari riyal (ر.ق)</td>
              </tr>
              <tr>
                <th scope="row">TLD</th>
                <td>.qa</td>
              </tr>
            </tbody>
          </table>`;
  }

  const regions = document.querySelector("#regions");
  const subregions = document.querySelector("#subregions");
  const countries = document.querySelector("#countries");
  const facts = document.querySelector("#facts");

  updateRegions();
  updateSubregions(regions.value);
  updateCountries(regions.value, subregions.value);
  updateFacts(regions.value, subregions.value, countries.value);

  regions.addEventListener("change", function () {
    updateSubregions(regions.value);
    updateCountries(regions.value, subregions.value);
    updateFacts(regions.value, subregions.value, countries.value);
  });

  subregions.addEventListener("change", function () {
    updateCountries(regions.value, subregions.value);
    updateFacts(regions.value, subregions.value, countries.value);
  });

  countries.addEventListener("change", function () {
    updateFacts(regions.value, subregions.value, countries.value);
  });
});

// async function f () {
//   await
// }

// const r = f()
