import './App.css';
import Header from './Header.js';
import User from './User';

function App() {
	return (
		<div className="App">
			<Header preferredName={User.preferredHolidayName} fullName={User.firstName + ' ' + User.lastName} />
		</div>
	);
}

export default App;
