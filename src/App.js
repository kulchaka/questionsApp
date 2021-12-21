import './App.css';
import Title from "./components/Title";
import Button from "./components/Button";
import Input from "./components/Input";


const App = () => {
  return (
      <div className="App">
        <div className="wrap">
          <div className="card">
            <Title/>
            <Input/>
            <div>
              <Button/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
