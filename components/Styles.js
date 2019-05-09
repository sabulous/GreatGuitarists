import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    backG: {
        flex: 1,
        backgroundColor: '#D7F4D8',
    },
    titleContainer: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        justifyContent: 'space-around'
    },
    guitaristList: {
        paddingTop: 8
    },
    guitarContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '95%',
        height: 200,
        backgroundColor: 'white',
        alignSelf: 'center',
        
    },
    guitaristPictureContainer: {
        flex:2,
        width: 50,
        borderWidth:1,
        backgroundColor: '#D6C0C9',
        justifyContent: "space-around",  
        padding: 2,
        margin: 2
    },
    guitaristDetailContainer: {
        flex:3,
        borderWidth:1,
        justifyContent: 'flex-start',  
        backgroundColor: '#DAEFEC',
        padding: 10,
        margin: 2
    },
    guitaristDetail: {
        fontSize: 20
    },
    red: {
        color: 'black',
        fontSize: 24,
        alignSelf: 'center',
    },
    centered: {
        alignSelf: 'center',
    },
});