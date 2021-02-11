document.querySelector(".hamburger").addEventListener("click", ()=>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qt").addEventListener("change", priceUpdate)
document.querySelector("#js").addEventListener("change", priceUpdate)
document.querySelector("#layout-yes").addEventListener("change", priceUpdate)
document.querySelector("#layout-no").addEventListener("change", priceUpdate)
document.querySelector("#deadline").addEventListener("change", function () {
    const deadline = document.querySelector("#deadline").value
    document.querySelector("label[for=deadline]").innerHTML = `deadline: ${deadline} weeks`
    priceUpdate()
})

function priceUpdate(){
    const qt = document.querySelector("#qt").value
    const wJS = document.querySelector("#js").checked
    const wLayout = document.querySelector("#layout-yes").checked
    const deadline = document.querySelector("#deadline").value

    let price = qt * 100
    if (wJS) price *= 1.1
    if (wLayout) price =+500
    let urgencyTax = 1 - deadline*0.1;
    price *= 1 + urgencyTax
    

    document.querySelector("#price").innerHTML = `R$ ${price.toFixed(2)}`

}