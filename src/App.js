import './App.css';
import Searcher from './components/Searcher/Searcher';
import Profil from './components/Profil/Profil';

const current_url = new URLSearchParams(window.location.search);

function App() {
  const username = current_url.get('username');
  return (
    <div className='App'>
      {username === null ? <Searcher /> : <Profil username={username} />}
    </div>
  );
}

export default App;
