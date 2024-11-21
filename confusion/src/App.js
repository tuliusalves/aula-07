import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      {/*Deletado a tag "header" e o conteúdo. Inserindo a navbar e a div "container" */}
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            <div>Aluno: Túlius Alves</div>
          </div>
        </Navbar>
    
    </div>
  );
}

export default App;
