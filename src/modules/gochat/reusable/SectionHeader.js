import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles.js';

class SectionHeader extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style={styles.SectionHeaderContainer}>
				<Text style={styles.SectionHeaderText}>{this.props.section.character}</Text>
			</View>
		);
	}
}

export default SectionHeader;