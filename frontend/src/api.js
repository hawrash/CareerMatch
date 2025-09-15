import { useState, useEffect } from "react";
import API from "./api"; 
import { Link } from "react-router-dom";

function Home() {
  const [majors, setMajors] = useState([]);

  useEffect(() => {
    API.get("majors/") 
      .then(res => setMajors(res.data))
      .catch(err => console.error(err));
  }, []);


  const suggestedMajors = majors
    .sort((a, b) => b.fields.employment_rate - a.fields.employment_rate)
    .slice(0, 5);

  return (
    <div>
      <h1>Suggested Majors</h1>
      <ul>
        {suggestedMajors.map(major => (
          <li key={major.pk}>
            <Link to={`/majors/${major.pk}`}>{major.fields.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
