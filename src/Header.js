const Header = (props) => {
	const { preferredName, fullName } = props;

	switch (preferredName) {
		case 'Christmas':
			return <h1>{`${preferredName} List for ${fullName}`}</h1>;
		case 'Xmas':
			return <h1>{`${preferredName} List for ${fullName}`}</h1>;
		case 'Yule':
			return <h1>{`${preferredName} List for ${fullName}`}</h1>;
		default:
			return <h1>Wish List</h1>;
	}
};

export default Header;
