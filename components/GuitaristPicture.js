import React from 'react';
import { View, Image } from 'react-native';
import styles from './Styles';
import imageList from '../images/imageList';

export default class GuitaristPicture extends React.Component {
    render() {        
        return (
            <View style={styles.guitaristPictureContainer}>
                <Image style={{width: 'auto', resizeMode:'contain'}} source={imageList[this.props.name]} />
            </View>
        );
    }
}