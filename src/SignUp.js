import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';

const SignUpForm = () => {
	return (
		<Card body>
			<Card.Title>Sign Up</Card.Title>
			<Card.Subtitle>Happy Holidays!</Card.Subtitle>
			<Form>
				<Form.Group>
					<FloatingLabel>Email</FloatingLabel>
					<Form.Control type="email" />
				</Form.Group>
				<Row>
					<Form.Group as={Col}>
						<FloatingLabel>Password</FloatingLabel>
						<Form.Control type="password" />
					</Form.Group>
					<Form.Group as={Col}>
						<FloatingLabel>Confirm Password</FloatingLabel>
						<Form.Control type="password" />
					</Form.Group>
				</Row>
				<Button variant="primary" type="submit">
					Sign Up!
				</Button>
			</Form>
		</Card>
	);
};

export default SignUpForm;
