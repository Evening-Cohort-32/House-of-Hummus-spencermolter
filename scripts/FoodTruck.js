import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"
import { orderPlaced } from "./TranState.js"

document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "purchase") {
    orderPlaced()
  }
})
export const FoodTruck = async () => {
  const salesHTML = await Sales()
  const entreesHTML = await Entrees()
  const veggiesHTML = await Veggies()
  const sidesHTML = await Sides()

  return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
            <section class="choices__base options">
            ${entreesHTML}
            </section>
            <section class="choices__veggies options">
                ${veggiesHTML}
            </section>
            <section class="choices__sides options">
                ${sidesHTML}
            </section>
        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
