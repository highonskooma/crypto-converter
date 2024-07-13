import logo from './logo.svg';
import './App.css';
import FetchData from './services/FetchData';
import CurrencyConverter from './components/CurrencyConverter'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<CurrencyConverter />
			</header>
		</div>
		);
}

export default App;
