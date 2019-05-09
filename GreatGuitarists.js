import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Guitarist from './components/Guitarist';
import styles from './components/Styles';
import guitaristList from './components/guitaristList';

export default class GreatGuitarists extends React.Component {
    render() {
        return (
            <View style={styles.backG}>
                <View style={styles.titleContainer}>
                    <Text style={styles.red}>GREAT GUITARISTS</Text>
                </View>
                <FlatList
                    style={styles.guitaristList}
                    data={guitaristList}
                    renderItem={({item}) => (<Guitarist name={item.name} age={item.age}/>)}
                />                
            </View>
        );
    }    
}
