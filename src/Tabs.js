import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import User from './User';

const userName = User.firstName;

const TabsComponent = () => {
	return (
		<Tabs defaultActiveKey="user" className="mb-3">
			<Tab eventKey="user" title={userName}>
				<span>Anyone have any food</span>
			</Tab>
			<Tab eventKey="person2" title="Person 2">
				<span>Howdy ya lint licker!</span>
			</Tab>
			<Tab eventKey="person3" title="Person 3">
				<span>Hey how are you</span>
			</Tab>
		</Tabs>
	);
};

export default TabsComponent;
