import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';

export default class GuitaristDetail extends React.Component {
    render() {
        return (
            <View style={styles.guitaristDetailContainer} >
                <Text style={styles.guitaristDetail}>
                    {this.props.name} is a guitarist at age {this.props.age}
                </Text>
            </View>
        );
    }
}