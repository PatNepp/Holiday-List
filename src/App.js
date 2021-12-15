import './App.css';
import Header from './Header.js';
import User from './User';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabsComponent from './Tabs';

function App() {
	return (
		<div className="App">
			<Header preferredName={User.preferredHolidayName} fullName={User.firstName + ' ' + User.lastName} />
			<TabsComponent />
		</div>
	);
}

export default App;
