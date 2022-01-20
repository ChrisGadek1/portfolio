import '../css/App.css';
import '../css/fontello-f64de2e1/css/fontello.css'
import Menu from "./menu";
import Content from "./Content";

function App() {
  return (
    <div className="App"  data-bs-spy="scroll" data-bs-target="#main-navbar" data-bs-offset="0">
        <Menu />
        <Content/>
    </div>
  );
}

export default App;
