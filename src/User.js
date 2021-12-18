const UserList = [
	{
		accountInfo: {
			username: 'pnepp',
			password: 'Test1234!',
			personId: '198237645'
		},
		firstName: 'Patrick',
		lastName: 'Nepp',
		preferredHolidayName: 'Yule',
		wishListItems: [
			{
				name: 'Tent',
				text: '4 person red color tent',
				cost: '$109.87',
				link: 'https://www.rei.com/product/147958/rei-co-op-kingdom-6-tent',
				isTaken: false,
				starred: true
			},
			{
				name: 'Kayak',
				text: 'I like to float on the river',
				cost: '$500.67',
				link: 'www.kayak.com',
				isTaken: true,
				starred: false
			},
			{
				name: 'Cat Tree',
				text: 'I want it to be big',
				cost: '50 - 60',
				link: 'www.petco.com',
				isTaken: false,
				starred: false
			}
		]
	},
	{
		accountInfo: {
			username: 'rstuk',
			password: 'Test1234!',
			personId: '912873465'
		},
		firstName: 'Rachel',
		lastName: 'Stukenburg',
		preferredHolidayName: 'Xmas',
		wishListItems: [
			{
				name: 'Snake Plant',
				text: 'I want a smaller one',
				cost: '$10.00',
				link: 'www.earlmay.com',
				isTaken: false,
				starred: false
			},
			{
				name: 'Aquarium',
				text: 'I want it to be the size of my living room',
				cost: '$40',
				link: 'www.aquarium.com',
				isTaken: false,
				starred: false
			}
		]
	}
];

export default UserList;
