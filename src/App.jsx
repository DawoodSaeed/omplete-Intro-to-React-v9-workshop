import { createRoot } from "react-dom/client";
import Order from "./Order";
import { StrictMode } from "react";
import PizzaOfTheDay from "./PizzaOfTheDay";

// import Pizza from "./Pizza";

const App = function () {
  return (
    <StrictMode>
      <div>
       <h1 className="logo">Padre Gino's Pizza</h1>
      {/* < <Pizza
        name="Pepperoni"
        description="Mozzarella Cheese, Pepperoni"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
        image={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="The Big Meat Pizza"
        description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
        image={"/public/pizzas/big_meat.webp"}
      /> */}

        <h1>Pizza Order</h1>
        <Order />
        <PizzaOfTheDay />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
