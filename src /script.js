function motivation(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: " Roses are required",
    autoStart: true,
    delay: 1
    cursor: ""

});
}

let motivationalQouteElement = document.querySelector("#motivational-qoute");
motivationalQouteElement.addEventListener("submit", motivation);
