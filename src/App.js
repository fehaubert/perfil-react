import './App.css';
import foto from './foto.jpg';
import UserCard from './components/UserCard';

function App() {

  let name = "Heitor Denech"
  let email = "heitordenech@gmail.com"
  let telefone = "51 99699-4595"
  let age = "17"

  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className='App-logo' alt="logo"/>
      <UserCard
        name={name}
        email={email}
        telefone={telefone}
        age={age}
      />
      </header>
    </div>
  );
}


export default App;
