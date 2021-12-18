import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import UserList from './User';
import CardComponent from './Card';

const TabsComponent = () => {
	const users = UserList;
	return (
		<Tabs defaultActiveKey={0} className="mb-3">
			{users.map((user, index) => {
				console.log(user.firstName, index);
				return (
					<Tab eventKey={index} title={user.firstName}>
						{user.wishListItems.map((wishListItem) => {
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
					</Tab>
				);
			})}
		</Tabs>
	);
};

export default TabsComponent;
