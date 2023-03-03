import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="projects">
        <div className="project">
          Quiz
        </div>
        <div className="project">
          Reaction test
        </div>
        <div className="project">
          Joker
        </div>
      </div>

      <div className="experiences">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Github</li>
        </ul>
        <ul>
          <li>MySQL</li>
          <li>React</li>
          <li>Python</li>
          <li>Adobe</li>
        </ul>
      </div>

      <div className="jobs">
        <div className="job">
          Kolbotn svømmeskole
        </div>
        <div className="job">
          Huddly AS
        </div>
      </div>

      <div className="educations">
        <div className="education">
          Drømtorp VG1 IT og Medieproduksjon
        </div>
        <div className="education">
          Drømtorp VG2 IT
        </div>
      </div>

    </div>
  );
}

export default App;
