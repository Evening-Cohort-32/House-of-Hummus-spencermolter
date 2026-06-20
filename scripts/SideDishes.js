import { sideChoice } from "./TranState.js"

const handleSideChoice = (changeEvent) => {
  if (changeEvent.target.name === "sideDish") {
    const convertedToInt = parseInt(changeEvent.target.value)
    sideChoice(convertedToInt)
  }
}

document.addEventListener("change", handleSideChoice)

export const Sides = async () => {
  const response = await fetch("http://localhost:8088/sides")
  const sides = await response.json()

  let html = "<h2>Sides</h2>"
  const sideStringArray = sides.map((item) => {
    return `
            <label class="radios">
                <input type="radio" name="sideDish" value="${item.id}" /> ${item.title}
            </label>
            `
  })

  html += sideStringArray.join("")
  return html
}
