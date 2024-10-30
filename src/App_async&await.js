import React from 'react';
import { View, Text, Button  } from 'react-native';
import axios from 'axios';

function App() {

    async function fetchData() {      // await kullanırsak cevap geldiğinde devam eder yani çıktı 1 2 3 şeklinde olur
                                     // await kullanabilmek için async kullanmalıyız 
        console.log('1');           // cevabı beklemek istiyorsak await kullanırız cevabı beklemek istemiyorsak then catch yapısını kullaanırız

        const responce = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        console.log('2');
        
        console.log(responce);  
        
        console.log('3');
    }


    return(
        <View>
            <Text>Hello World!</Text>
            <Button title="Fetch Data" onPress={fetchData} />
        </View>
    )
}




export default App;
