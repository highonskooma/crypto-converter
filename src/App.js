import logo from './logo.svg';
import './App.css';
import FetchData from './services/FetchData';
import CurrencyConverter from './components/CurrencyConverter'
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="App">
				<Header />
				<CurrencyConverter />
				<Footer />
		</div>
		);
}

export default App;
