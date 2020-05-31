import React,{useState} from 'react';
import uuid from 'uuid4'
import {View, FlatList, Image, Text, StyleSheet, Alert} from 'react-native';

import Header from './Header';
import ListItem from './ListItem';
import AddItem from './AddItem';

const App = () => {

  const [items, setItems] = useState([]);

  const deleteItem = (id) => {
    
    setItems(res=>{
      return res.filter(r => r.id != id)
    });
  }

  const addItems = (title) => {
    if(!title){
      Alert.alert("Error", "Please enter any text")
    }else{
      setItems(prevItem=>{
        return [{id:uuid(), title}, ...prevItem];
      });
    }
  }

  const title="Shopping List"
  return (
    <View style={styles.container}>
      
      <Header title={title}/>
      <AddItem addItems={addItems}/>
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} /> }
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})



export default App;