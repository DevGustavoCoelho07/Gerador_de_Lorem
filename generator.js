async function generator() {
  var loremInput = document.getElementById("loremInput");

  paras = loremInput.value;
  try {
    await axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${paras}&start-with-lorem=1`
      )
      .then((res) => {
        // let dt = res.data;
        let paragrafo = document.getElementById("pp");
        let item = document.createElement("div");
        // paragrafo.classList.add("p-lorem")
        // item.classList.add("p-lorem")
        paragrafo.innerHTML = "";
        // paragrafo.appendChild(item)

        for (item of res.data) {
          paragrafo.innerHTML = paragrafo.innerHTML + `<p>${item}</p>`;
        }
      });
  } catch (err) {
    document.getElementById("pp").innerHTML = `${err}`;
  }
}

generator();
