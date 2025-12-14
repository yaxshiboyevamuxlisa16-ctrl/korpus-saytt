let data = [];

fetch("data/korpus.json")
  .then(res => res.json())
  .then(json => data = json);

function search() {
  const q = document.getElementById("search").value.toLowerCase();
  const results = data.filter(
    item => item.word.includes(q) || item.lemma.includes(q)
  );

  const box = document.getElementById("results");
  box.innerHTML = "";

  results.forEach(r => {
    box.innerHTML += `
      <div class="result">
        <b>So‘z:</b> ${r.word}<br>
        <b>Lemma:</b> ${r.lemma}<br>
        <b>Kontekst:</b> ${r.text}
      </div>
    `;
  });
}
