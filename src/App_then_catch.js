import React from 'react';
import { View, Text, Button  } from 'react-native';
import axios from 'axios';

function App() {

    function fetchData() {      //get demek bana git şu adresten verileri çek demek, ana işlevi verdiğimiz url den verileri çekmektir
        axios
        .get('https://jsonplaceholder.typicode.com/users') 
        .then(cevap => console.log(cevap))  // then olumlu olursa bu kısım çalışır.
        .catch(hata => console.log(hata));  //catch hata oluşursa bu kısım çalışır.

        console.log(responce);  

    }


    return(
        <View>
            <Text>Hello World!</Text>
            <Button title="Fetch Data" onPress={fetchData} />
        </View>
    )
}




export default App;
