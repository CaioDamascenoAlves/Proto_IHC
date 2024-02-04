import "./App.css";
import Header from "./components/Header";
import FormPessoa from "./components/FormPessoa";
import Login from "./components/Login";
import Rotas from "./Router";

function App() {
  return (
    <Rotas>
      <div className="App">
        <Header />
      </div>
    </Rotas>
  );
}

export default App;
