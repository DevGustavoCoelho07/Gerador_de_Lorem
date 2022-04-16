axios.get('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1')
.then(res => { //fazendo a requisição
    const resData = res.data;
    let emptyP = document.getElementById("pp") 
    emptyP.innerHTML = resData //atribui ao html a requisiçãoF
 }).catch((err)=>{
    console.log(err)
})