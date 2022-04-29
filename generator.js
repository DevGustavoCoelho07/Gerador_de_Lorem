let btn = document.getElementById('btnLorem').addEventListener('click', (e) => {

    e.preventDefault()

    var loremInput = document.getElementById("loremInput")


    paras = loremInput.value
    axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${paras}&start-with-lorem=1`)
        .then(res => {

            console.log(paras)
            let dt = res.data;
            let paragrafo = document.getElementById("pp")

            console.log(res.paras)
            let item = document.createElement("div")
            // paragrafo.classList.add("p-lorem")

            // item.classList.add("p-lorem")
            paragrafo.innerHTML = ""
            // paragrafo.appendChild(item)

            for (item of res.data) {

                paragrafo.innerHTML = paragrafo.innerHTML + `<p>${item}</p>`

            }

        })
})
