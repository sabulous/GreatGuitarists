import React from 'react';
import { View } from 'react-native';
import styles from './Styles';
import GuitaristPicture from './GuitaristPicture';
import GuitaristDetail from './GuitaristDetail';

export default class Guitarist extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <View style={styles.guitarContainer}>
            <GuitaristPicture name={this.props.name} />
            <GuitaristDetail name={this.props.name} age={this.props.age} />
        </View>
    );}
}