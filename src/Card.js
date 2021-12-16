import Card from 'react-bootstrap/Card';

const CardComponent = (props) => {
	const { name, cost, text, link, isTaken } = props;
	let borderColor;
	if (isTaken) {
		borderColor = 'warning';
	} else {
		borderColor = 'secondary';
	}

	return (
		<Card body bg="#" border={borderColor}>
			<Card.Body>
				<Card.Title>
					{name} {cost}
				</Card.Title>
				<Card.Text>{text}</Card.Text>
				<Card.Link href={link}>{name}</Card.Link>
			</Card.Body>
		</Card>
	);
};

export default CardComponent;
