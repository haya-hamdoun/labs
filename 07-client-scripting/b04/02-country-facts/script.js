document.addEventListener("DOMContentLoaded", async function () {
  // let data = [];
  // fetch("https://restcountries.com/v3.1/all")
  //   .then((res) => res.json())
  //   .then((d) => {
  //     data = d;
  //   })
  //   .catch((e) => {});

  // try {
  const res = await fetch("https://restcountries.com/v3.1/all");
  let data = [];
  if (res.ok) {
    data = await res.json();
  }
  // } catch (e) {}

  // console.log(res);
  // console.log(data);

  // const hierarchy = {
  //   Africa: {},
  //   Asia: {},
  //   Antarctic: {},
  //   Asia: {},
  //   ...
  // };

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

  // build an array with distinct regions
  // const regions = data
  // .map((obj) => obj.region)
  // .filter((o, i, a) => a.indexOf(o) === i)
  // .sort();
  // const regions = Object.keys(hierarchy).sort();
  // document.querySelector("#regions").innerHTML = regions
  //   .map((r) => `<option value="${r}">${r}</option>`)
  //   .join("");

  // const subregions = data
  //   .filter((obj) => obj.region === document.querySelector("#regions").value)
  //   .map((obj) => obj.subregion)
  //   .filter((o, i, a) => a.indexOf(o) === i)
  //   .sort();

  // const subregions = Object.keys(
  //   hierarchy[document.querySelector("#regions").value]
  // ).sort();
  // document.querySelector("#subregions").innerHTML = subregions
  //   .map((r) => `<option value="${r}">${r}</option>`)
  //   .join("");

  // const countries = Object.keys(
  //   hierarchy[document.querySelector("#regions").value][
  //     document.querySelector("#subregions").value
  //   ]
  // ).sort();
  // document.querySelector("#countries").innerHTML = countries
  //   .map((r) => `<option value="${r}">${r}</option>`)
  //   .join("");

  const regions = document.querySelector("#regions");
  const subregions = document.querySelector("#subregions");
  const countries = document.querySelector("#countries");
  const facts = document.querySelector("#facts");

  function updateRegions() {
    document.querySelector("#regions").innerHTML = Object.keys(hierarchy)
      .sort()
      .map((r) => `<option value="${r}">${r}</option>`)
      .join("");
  }

  function updateSubregions(region) {
    document.querySelector("#subregions").innerHTML = Object.keys(
      hierarchy[region]
    )
      .sort()
      .map((r) => `<option value="${r}">${r}</option>`)
      .join("");
  }

  function updateCountries(region, subregion) {
    document.querySelector("#countries").innerHTML = Object.keys(
      hierarchy[region][subregion]
    )
      .sort()
      .map((r) => `<option value="${r}">${r}</option>`)
      .join("");
  }

  function updateFacts(region, subregion, country) {
    const info = hierarchy[region][subregion][country];
    facts.innerHTML = `
  <h2>Facts about ${info.name.common} ${info.flag}</h2>
  <div id="country-flag">
    <img src="${info.flags.svg}" alt="Flag of ${info.name.common}" />
  </div>
  <table>
    <tbody>
      <tr>
        <th scope="row">Official Name</th>
        <td>State of Qatar (دولة قطر)</td>
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
        <td>Arabic</td>
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
