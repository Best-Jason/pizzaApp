import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Make sure to import your CSS file

function App() {
    return (
        <div className="container">
            <Header />
            <Menu /> {/* Replaced Pizza and Pizza2 with Menu */}
            <Footer />
        </div>
    );
}

function Header() {
    const headerStyle = {
        color: "orange",
        fontSize: "48px",
        textTransform: "uppercase"
    };

    return (
        <h1>
            <p style={headerStyle}>Jason Pizza Co.</p>
            
        </h1>
    );
}



function Menu() {
    const numofPizza = pizzaData.length;
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            {numofPizza > 0 && (
                <>
                <em>Authentic Italian cuisine, all from our stone oven</em>
            <ul className="pizzas">
                {pizzaData.map((pizza,index) => (
                    <Pizza key={index} {...pizza} />
                ))}
        </ul>
        </>
            )}
        </div>
    );
}

// function Pizza() {
//     return (
//         <div>
//             <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
//             <h2>Pizza Spinaci</h2>
//             <p>Tomato, mozzarella, spinach, and ricotta cheese</p>
//             <p>$10.00</p>
//         </div>
//     );
// }

// function Pizza2() {
//     return (
//         <div>
//             <img src="pizzas/salamino.jpg" alt="Pizza Salamino" />
//             <h2>Pizza Salamino</h2>
//             <p>Tomato, salamino, spinach, and ricotta cheese</p>
//             <p>$12.99</p>
//         </div>
//     );
// }

function Footer() {
    const hour = new Date().getHours();
    const isOpen = hour >= 10 && hour < 22;

    return (
        <footer className="footer">
            {isOpen ? (
                <div className="footer-content">
                    <div className="border">We're currently open</div>
                    <button className="btn">Order Now</button>
                </div>
            ) : (
                <p>We are closed</p>
            )}
        </footer>
    );
}


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

// const pizzaList = pizzaData.map((pizza,index) => (
//     <li key={index} className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
//     <img src={pizza.photoName} alt={pizza.name}/>
//     <h2>{pizza.name}</h2>
//     <p>{pizza.ingredients}</p>
//     <p>{pizza.price}</p>
//     <p>{pizza.soldOut ? "Sold Out" : "Available"}</p>
//     </li>
// ));

function Pizza({ name, ingredients, price, photoName, soldOut }) {
    return (
        <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
            <img src={photoName} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>${price.toFixed(2)}</span>
                {soldOut && <p>Sold Out</p>}
            </div>
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
