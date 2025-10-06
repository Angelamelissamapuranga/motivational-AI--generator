function displayMotivation(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function motivation(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0b13ta29a8716f0b00944ca581adofd4";
  let prompt = `user instructions: give motivational qoute about ${instructionsInput.value}`;
  let context =
    "You are a motivational expert, you push people by giving them uplifting qoutes, your mission is to generate qoutes less than 4 lines, seperate each line with <br />, do not show the html words on the screen only show the format, sign off at the end of the poem 'Angela Mapuranga'in <strong />";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let motivationElement = document.querySelector("#poem");
  motivationElement.classList.remove("hidden");
  motivationElement.innerHTML = `⏳generating motivational qoute about ${instructionsInput.value}`;

  axios.get(apiUrl).then(displayMotivation);
}

let motivationalQouteElement = document.querySelector("#motivational-qoute");
motivationalQouteElement.addEventListener("submit", motivation);
