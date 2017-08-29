// Import libraries for making component

import React from 'react';
import { Text, View } from 'react-native';

//Make a component

const Header = (props) => {

	const {textStyle, viewStyle} = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.text}</Text>
		</View>
	);

};

const styles = {

	viewStyle :{
		backgroundColor : "#F8F8F8",
		justifyContent : "center",
		alignItems : "center",
		height : 60,
		paddingTop : 15,
		shadowColor : "#000",
		shadowOffset : { width : 0, height :200},
		shadowOpacity : 0.9,
		elevation : 2,
		position : "relative"
	},

	textStyle : {
		fontSize : 20
	}
};

//Make the component to other part of the app
export { Header };
