import React from 'react'
import { View,Text,StyleSheet } from 'react-native';

const UserCard = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.username}> {props.username} </Text>

            <View style={styles.inner_container}>
                <Text style={styles.name}> {props.name} </Text>
                <Text style={styles.email}> {props.email} </Text>
            </View>

        </View>
    )
}

export default UserCard;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#eceff1',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    username: {
        fontWeight: 'bold',
        color: 'black'
    },
    name:{
        fontWeight: 'bold',
    },
    email: {
        fontSize: 12,
        fontStyle: 'italic',
        color: 'grey',
        marginBottom: 5,
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

})