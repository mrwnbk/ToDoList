let btnAdd = document.querySelector(".btnAdd")
let parentTache = document.querySelector(".parentTache")
let input = document.querySelector('input')

btnAdd.addEventListener("click", function () {
    let tache = document.createElement("div")

    tache.className = "tache"
    tache.innerHTML = `
    <h2 class="textTache">${input.value}</h2>
    <div class="divBtnTache">
        <button class="btnFini">Fini</button>
        <button class="btnModifier">Modifier</button>
        <button class="btnSupprimer">Supprimer</button>
    </div>
    `
    parentTache.append(tache)



    let fini = document.querySelector('.fini')
    let modifier = document.querySelector('.modifier')
    let supprimer = document.querySelector('.supprimer')
})