import convert from "convert";

console.log("360 s = %d m", convert(360, "seconds").to("minutes"));
console.log("5 km = %f mi", convert(5, "kilometers").to("nautical miles"));
console.log("12 lb = %d oz", convert(12, "pounds").to("ounces"));
console.log("8,192 B = %d KiB", convert(8192, "bytes").to("KiB"));
console.log("10 atm = %f kPa", convert(10, "atmospheres").to("kPa"));
console.log("451 °F = %f °C", convert(451, "fahrenheit").to("celsius"));

if (convert(360, "seconds").to("minutes") === 6) {
  // passed the test
} else {
  // fail
}
