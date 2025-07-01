"use client";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        {/* <p>Текущее значение: {count}</p> */}
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
        {/* <button onClick={() => setCount(0)}>Renew</button> */}
      </div>

      <div>
        {/* <p>Текущее значение: {count}</p> */}
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
        {/* <button onClick={() => setCount(0)}>Renew</button> */}
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago were `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
