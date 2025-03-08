import pizzaData from './data';
import Pizza from './Pizza';

export default function Menu() {
	const numPizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map(pizza => (
            <Pizza
              key={pizza.name} // Unique key for React
              name={pizza.name}
              ingredients={pizza.ingredients}
              photoName={pizza.photoName}
              price={pizza.price}
              soldOut={pizza.soldOut} // Adding soldOut prop
            />
          ))}
        </ul>
      )}
    </main>
  );
}
