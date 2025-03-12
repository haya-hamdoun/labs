document.addEventListener("DOMContentLoaded", async function () {
  let data = [];
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (res.ok) {
    data = await res.json();
  }
  // console.log(data);

  const hierarchy = {};
  data.forEach((obj) => {
    if (!("subregion" in obj)) {
      obj.subregion = "—";
    }

    if (!(obj.region in hierarchy)) {
      // for example, is Asia in hierarchy
      hierarchy[obj.region] = {};
    }

    if (!(obj.subregion in hierarchy[obj.region])) {
      // for example, is Central Asia in hierarchy[Asia]
      hierarchy[obj.region][obj.subregion] = {};
    }

    hierarchy[obj.region][obj.subregion][obj.name.common] = obj;
  });

  // console.log(hierarchy);

  const regions = document.querySelector("#regions");
  const subregions = document.querySelector("#subregions");
  const countries = document.querySelector("#countries");
  const facts = document.querySelector("#facts");

  function updateRegions() {
    // Object.keys(hierarchy) -> an array of reginos
    regions.innerHTML = Object.keys(hierarchy)
      .sort()
      .map((region) => `<option value="${region}">${region}</option>`)
      .join();

    updateSubregions();
  }

  function updateSubregions() {
    subregions.innerHTML = Object.keys(hierarchy[regions.value])
      .sort()
      .map((subregion) => `<option value="${subregion}">${subregion}</option>`)
      .join();

    updateCountries();
  }

  function updateCountries() {
    countries.innerHTML = Object.keys(
      hierarchy[regions.value][subregions.value]
    )
      .sort()
      .map((country) => `<option value="${country}">${country}</option>`)
      .join();

    // localStorage.setItem("country", countries.value);

    updateFacts();
  }

  function updateFacts() {
    const info = hierarchy[regions.value][subregions.value][countries.value];
    facts.innerHTML = `<h2>Facts about ${info.name.common} ${info.flag}</h2>
        <div id="country-flag">
          <img src="${info.flags.svg}" alt="Flag of ${info.name.common}" />
        </div>
        <table>
          <tbody>
            <tr>
              <th scope="row">Official Name</th>
              <td>${info?.name?.official ?? "N/A"} (${
      info.translations.ara.official
    })</td>
            </tr>
            <tr>
              <th scope="row">Capital City</th>
              <td>${info.capital}</td>
            </tr>
            <tr>
              <th scope="row">Population</th>
              <td>${info.population}</td>
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

  regions.addEventListener("change", updateSubregions);
  subregions.addEventListener("change", updateCountries);
  countries.addEventListener("change", () => {
    updateFacts();
    localStorage.setItem("country", countries.value);
  });

  updateRegions();

  // if (localStorage.getItem("country")) {
  //   data.find(obj => obj.name.common === localStorage.getItem("country"));
  //   subregions.value = obj.subregion;
  //   region.value = obj.region;
  // }
});

// hierarchy[region][subregion][country] -> facts about the country
// hierarchy["Africa"]["Eastern Africa"]["British Indian Ocean Territory"] -> facts about it
