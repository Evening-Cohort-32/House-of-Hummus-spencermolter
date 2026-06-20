import { entreeChoice } from "./TranState.js"

const handleEntreeChoice = (changeEvent) => {
  if (changeEvent.target.name === "entree") {
    const convertedToInt = parseInt(changeEvent.target.value)
    entreeChoice(convertedToInt)
  }
}

document.addEventListener("change", handleEntreeChoice)

export const Entrees = async () => {
  const response = await fetch("http://localhost:8088/entrees")
  const entrees = await response.json()

  let html = "<h2>Base Dishes</h2>"
  const entreesStringArray = entrees.map((item) => {
    return `
            <label class="radios">
                <input type="radio" name="entree" value="${item.id}" /> ${item.name}
            </label>
            `
  })

  html += entreesStringArray.join("")
  return html
}
