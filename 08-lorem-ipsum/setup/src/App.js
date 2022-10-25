import React, { useState } from "react";
import data from "./data";
function App() {
  const [value, setValue] = useState(0);
  const [lorem, setLorem] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(value);
    if (value <= 0) {
      amount = 1;
    }
    if (value > data.length) {
      amount = data.length;
    }
    setLorem(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="para">Paragraphs:</label>
        <input
          type="number"
          name="para"
          id="para"
          value={value}
          onChange={handleChange}
        ></input>
        <button className="btn">GENERATE</button>
      </form>
      <article className="lorem-text">
        {lorem.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
