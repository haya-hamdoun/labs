document.addEventListener("DOMContentLoaded", async function () {
  const res = await fetch("https://restcountries.com/v3.1/all");
  let data = [];
  if (res.ok) {
    data = await res.json();
  }

  const hierarchy = {};

  data.forEach((obj) => {
    if (!obj.subregion) {
      obj.subregion = "—";
    }

    if (!(obj.region in hierarchy)) {
      hierarchy[obj.region] = {};
    }
    if (!(obj.subregion in hierarchy[obj.region])) {
      hierarchy[obj.region][obj.subregion] = {};
    }
    hierarchy[obj.region][obj.subregion][obj.name.common] = obj;
  });

  // console.log(hierarchy);

  function updateRegions() {
    const regions = document.querySelector("#regions");
    regions.innerHTML = Object.keys(hierarchy)
      .sort()
      .map((r) => `<option value=${r}>${r}</option>`)
      .join("");

    updateSubregions(regions.value);
  }

  function updateSubregions(region) {
    const subregions = document.querySelector("#subregions");
    subregions.innerHTML = Object.keys(hierarchy[regions.value])
      .sort()
      .map((r) => `<option value="${r}">${r}</option>`)
      .join("");

    updateCountries(region, subregions.value);
  }

  function updateCountries(region, subregion) {
    const countries = document.querySelector("#countries");
    countries.innerHTML = Object.keys(
      hierarchy[regions.value][subregions.value]
    )
      .sort()
      .map((r) => `<option value="${r}">${r}</option>`)
      .join("");

    updateFacts(region, subregion, countries.value);
  }

  function updateFacts(region, subregion, country) {
    const info = hierarchy[region][subregion][country];
    const facts = document.querySelector("#facts");
    facts.innerHTML = `<h2>Facts about ${info.name.common} ${info.flag}</h2>
        <div id="country-flag">
          <img src="${info.flags.svg}" alt="Flag of ${info.name.common}" />
        </div>
        <table>
          <tbody>
            <tr>
              <th scope="row">Official Name</th>
              <td>${info.name.official} (${info.translations.ara.official})</td>
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

  // const hierarchy = {
  //   Africa: {
  //     "Eastern Africa": {
  //       "British Indian Ocean Territory": {},
  //       Burundi: {},
  //     },
  //   },
  //   Asia: {},
  // };

  regions.addEventListener("change", function (e) {
    updateSubregions(regions.value);
  });

  subregions.addEventListener("change", function (e) {
    updateCountries(regions.value, subregions.value);
  });

  countries.addEventListener("change", function (e) {
    updateFacts(regions.value, subregions.value, countries.value);
  });

  updateRegions();

  // window.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   console.log(e.target);
  // });
  // document.querySelector("body").addEventListener("click", function (e) {
  //   console.log(e.target);
  // });
});
