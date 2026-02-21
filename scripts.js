const form = document.querySelector("form") 
const amount = document.getElementById("amount")
const expense = document.getElementsByClassName("expanse")
const category = document.getElementById("category")

amount.oninput = () => {
    let value = amount.value.replace(/\D/g, "")

    value = Number(value) / 100

    amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
    value = value.toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL"
    })

    return value
}

form.onsubmit = (event) => {
    event.preventDefault()

}