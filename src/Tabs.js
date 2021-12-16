import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import User from './User';
import CardComponent from './Card';

const userName = User.firstName;
const wishListItems = User.wishListItems;
console.log(wishListItems);

const TabsComponent = () => {
	return (
		<Tabs defaultActiveKey="user" className="mb-3">
			<Tab eventKey="user" title={userName}>
				{wishListItems.map((wishListItem) => {
					return (
						<CardComponent
							name={wishListItem.name}
							cost={wishListItem.cost}
							text={wishListItem.text}
							link={wishListItem.link}
							isTaken={wishListItem.isTaken}
						/>
					);
				})}
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
