import './index.css';

export default function Pizza({
  name,
  ingredients,
  photoName,
  price,
  soldOut,
}) {
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'Sold Out' : `$${price + 3}`}</span>
      </div>
    </li>
  );
}
