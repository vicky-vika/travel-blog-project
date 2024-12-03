const form = document.getElementById("suggestionForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value;
  const time = document.getElementById("time").value;
  const landmarks = document.getElementById("landmarks").value;

  alert(
    `Suggested Location:\nCountry: ${country}\nCity: ${city}\nBest Time to Visit: ${time}\nLandmarks: ${landmarks}`
  );
});

// \n separates info into separate lines
