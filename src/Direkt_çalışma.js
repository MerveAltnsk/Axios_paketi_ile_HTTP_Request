import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Button,FlatList } from 'react-native';
import axios from 'axios';
import UserCard from './src/components/UserCard/UserCard';


const URL = 'https://jsonplaceholder.typicode.com/users'

function App() {

    const [loading, setLoading] = useState(true);
    const [userList, setUserList] = useState([]);

    async function fetchData() {     

        //const responce = await axios.get(URL);
        //setLoading(false);
        //setUserList(responce.data)

        axios.get(URL).then(response => {   //  then catch yapısıyla da bu şekilde veri çekilebilinir
            setLoading(false);
            setUserList(response.data);
        })

    }

    const renderUser = ({item}) => <UserCard name={item.name} email={item.email} username={item.username} />


    useEffect(() => {
        fetchData(); //fetchData adlı fonksiyonu çağrıyoruz
    }, []);


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


            </View>
  
        </View>
    );
}




export default App;
