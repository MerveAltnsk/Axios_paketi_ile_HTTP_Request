import React, { useState } from 'react';
import { View, ActivityIndicator, Button,FlatList } from 'react-native';
import axios from 'axios';
import UserCard from './src/components/UserCard/UserCard';


const URL = 'https://jsonplaceholder.typicode.com/users'

function App() {

    const [loading, setLoading] = useState(false);
    const [userList, setUserList] = useState([]);

    async function fetchData() {     

        setLoading(true);
        const responce = await axios.get(URL);
        setLoading(false);

        setUserList(responce.data)

    }

    const renderUser = ({item}) => <UserCard name={item.name} email={item.email} username={item.username} />

    return(
        <View>
            <View>
                {
                    loading ? (<ActivityIndicator size = "large " />)       //loading durumu true olduğu yani anda veri geldiği anda spinner dönüyor
                    : (

                        <FlatList
                        data={userList}
                        renderItem={renderUser}
                        />
                        )}


                <Button title="Fetch Data" onPress={fetchData} />
            </View>
  
        </View>
    );
}




export default App;
