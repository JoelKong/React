import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      //Display error page
      return <h1>Error!!</h1>;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  const { company, dates, duties, title } = data[value];
  return (
    <main>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {data.map((dat, index) => {
              return (
                <button
                  key={dat.id}
                  onClick={() => setValue(index)}
                  className={
                    value === index ? "job-btn active-btn" : "job-btn false"
                  }
                >
                  {dat.company}
                </button>
              );
            })}
          </div>

          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
        <button className="btn">More info</button>
      </section>
    </main>
  );
}

export default App;
