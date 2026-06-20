import { vegChoice } from "./TranState.js"

const handleVegChoice = (changeEvent) => {
  if (changeEvent.target.name === "vegetable") {
    const convertedToInt = parseInt(changeEvent.target.value)
    vegChoice(convertedToInt)
  }
}

document.addEventListener("change", handleVegChoice)

export const Veggies = async () => {
  const response = await fetch("http://localhost:8088/vegetables")
  const vegetables = await response.json()

  let html = "<h2>Vegetables</h2>"
  const vegStringArray = vegetables.map((item) => {
    return `
            <label class="radios">
                <input type="radio" name="vegetable" value="${item.id}" /> ${item.type}
            </label>
            `
  })

  html += vegStringArray.join("")
  return html
}
