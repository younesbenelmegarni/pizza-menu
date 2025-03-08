import './index.css';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  // Function to get the current time in 24-hour format
  function getFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // Ensures 2 digits (e.g., "03" instead of "3")
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Optional: include seconds
    return `${hours}:${minutes}:${seconds}`; // e.g., "14:35:42"
  }

  // useEffect to update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000); // Updates every 1000ms (1 second)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means it runs once on mount

  const currentHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = currentHour >= openHour && currentHour < closeHour;
  const message = isOpen ? 'open' : 'closed';

  return (
    <footer className="footer">
      <div className="order">
        <p>We're open until {closeHour}:00. Come visit us or order online.</p>
        <p>The store is {message}</p>
        <p>The current time is {currentTime}</p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}
