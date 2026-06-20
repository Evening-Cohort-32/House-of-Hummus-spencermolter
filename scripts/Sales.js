export const Sales = async () => {
  const response = await fetch(
    "http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side",
  )
  const sales = await response.json()

  let salesPrice = sales.map((purchase) => {
    const totalPrice =
      purchase.entree.price + purchase.vegetable.price + purchase.side.price

    return `<div>Receipt #${purchase.id} = $${totalPrice.toFixed(2)}</div>`
  })

  salesPrice = salesPrice.join("")

  return salesPrice
}