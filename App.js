import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight, FaTablets } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [people, setPeople] = useState([]);
  const [tab, setTab] = useState({ duties: [] });

  const getFetch = async () => {
    const response = await fetch(url);
    const people = await response.json();
    setPeople(people);
    setTab(people[0]);
    console.log(url);
  };

  useEffect(() => {
    getFetch();
  }, []);

  const handleClick = (id) => {
    const person = people.find((person) => person.id === id);
    setTab(person);
  };
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {people.map((person, index) => {
              const { id, order, duties, company } = person;
              return (
                <>
                  <button
                    key={id}
                    className="job-btn"
                    onClick={() => handleClick(id)}
                  >
                    {company}
                  </button>
                </>
              );
            })}
          </div>
          <article className="job-info">
            <h3>{tab.title}</h3>
            <h4>{tab.company}</h4>
            <p className="job-date">{tab.dates}</p>
            {tab.duties.map((duty) => {
              return (
                <div className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>

        <button type="button" className="btn">
          more info
        </button>
      </section>
    </>
  );
}

export default App;
