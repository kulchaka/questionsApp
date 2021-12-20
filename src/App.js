import './App.css';
import Title from "./components/Title";
import Button from "./components/Button";


const App = () => {
  return (
      <div className="App">
        <div className="wrap">
          <div className="card">
            <Title/>
            <input type="text"/>
            <div>
              <Button/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
