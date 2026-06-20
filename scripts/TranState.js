const tState = {
  entreeId: 0,
  vegetableId: 0,
  sideId: 0,
}

export const entreeChoice = (id) => {
  tState.entreeId = id
  console.log(tState)
}
export const vegChoice = (id) => {
  tState.vegetableId = id
  console.log(tState)
}
export const sideChoice = (id) => {
  tState.sideId = id
  console.log(tState)
}

export const orderPlaced = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tState),
  }

  const response = await fetch("http://localhost:8088/purchases", postOptions)

  tState.entreeId = 0
  tState.vegetableId = 0
  tState.sideId = 0

  const customEvent = new CustomEvent("stateChanged")
  document.dispatchEvent(customEvent)
}
