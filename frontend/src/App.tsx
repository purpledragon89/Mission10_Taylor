import './App.css';
import BowlerList from './BowlerList';

function Header() {
  return <h1>Bowler Database</h1>;
}

function App() {
  return (
    <>
      <Header />
      <BowlerList />
    </>
  );
}

export default App;
