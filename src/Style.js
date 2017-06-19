import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');

const Style = StyleSheet.create({
	rootContainer: {
		flex: 1,
		flexDirection: 'column'
	},
	logo: {
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	menuContainer: {
		height: 53,
		flexDirection: 'row',
		backgroundColor: 'white',
	},
	dataContainer: {
		flex: 1,
		flexDirection: 'row',
		resizeMode: 'center',
		width: win.width,
		height: win.height,
	},
	menuLeft: {
		flex: 8,
		backgroundColor: 'white',
	},
	menuRight: {
		flex: 2,
		backgroundColor: 'white',
	},
	menuButtons: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white',
	},
	searchButton: {
		textAlign: 'center',
		fontSize: 20,
		color: 'white',
		backgroundColor: '#123123',
		flex: 1,
		paddingTop: 15,
	},
	filterButton: {
		textAlign: 'center',
		fontSize: 20,
		color: 'white',
		backgroundColor: '#123123',
		flex: 1,
		paddingTop: 15,
	}
});

export default Style;