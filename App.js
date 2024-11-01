import React, { useState } from 'react';
import { View, Text, Button,FlatList } from 'react-native';
import axios from 'axios';
import UserCard from './src/components/UserCard/UserCard';

function App() {

    const [userList, setUserList] = useState([]);

    async function fetchData() {     

        const responce = await axios.get('https://jsonplaceholder.typicode.com/users');

        setUserList(responce.data)
        
   
    }

    const renderUser = ({item}) => <UserCard name={item.name} email={item.email} username={item.username} />

    return(
        <View>

            <FlatList
            data={userList}
            renderItem={renderUser}
            />

            <Button title="Fetch Data" onPress={fetchData} />
        </View>
    );
}




export default App;
