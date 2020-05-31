
import React, { useState } from 'react';

import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({item, deleteItem, addItems}) => {
    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue)



    return(
       <View>
           <TextInput onChangeText={onChange} style={styles.input} placeholder="Add ..."/>
           <TouchableOpacity onPress={()=>addItems(text)} style={styles.btn}>
            <Text style={styles.btnText}> <Icon name="plus" size={20}/> Add</Text>

           </TouchableOpacity>
       </View>
    )
}


const styles = StyleSheet.create({
    input:{
        height:60,
        padding:8,
        fontSize:16,
    },
    btn:{
        backgroundColor:'#c2bad8',
        padding:20,
        margin:5,
    },
    btnText:{
        textAlign:'center',
        fontSize:20,
        color:'darkslateblue',
    }
})



export default AddItem;