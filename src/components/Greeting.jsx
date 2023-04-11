import React, { useState, useEffect } from "react";
import "../Greeting.css";

function Greeting() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hours = time.getHours();

  let greeting;

  if (hours >= 5 && hours < 12) {
    greeting = "Good morning!";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  return <h3 className="greeting">{greeting}</h3>;
}

export default Greeting;