import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Pizza(props) {
  return (
    <li className={props.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={props.img} alt="" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>${props.price}</span>
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>
        {/* <Pizza
          name="Spinachi Pizza"
          ingredients="Tomato, mozarella, spinach and ricotta cheese"
          img="pizzas/spinaci.jpg"
        />
        <Pizza
          name="Focaccia Pizza"
          ingredients="Tomato, mozarella, spinach and ricotta cheese"
          img="pizzas/focaccia.jpg"
        /> */}
        <ul className="pizzas">
          {pizzaData.map((e, index) => {
            return (
              <Pizza
                key={index}
                name={e.name}
                ingredients={e.ingredients}
                img={e.photoName}
                price={e.price}
                soldOut={e.soldOut}
              />
            );
          })}
        </ul>
      </main>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  return hour >= openHour && hour <= closeHour ? (
    <footer className="footer">
      <div className="order">
        <p>We're currently open.</p>
        <button className="btn">Order</button>
      </div>
    </footer>
  ) : (
    <footer className="footer">
      <p>Sorry We're Closed!</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
