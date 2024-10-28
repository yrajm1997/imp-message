import "./App.css";
import Confetti from "./Confetti";

const shareMessage = "I just ran my first container using Docker";
const shareLink = "https://docker.com/";

const App = () => {
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>Wishing you a very happy and prosperous Diwali!</h1>
        <p style={{ marginTop: "10px", marginBottom: "50px" }}>
        May the light of the diyas guide you towards the path of happiness and success.
        </p>
      </header>
    </div>
  );
};

export default App;
