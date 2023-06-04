import React,{useState,useEffect} from "react";
import { View,Text,FlatList,StyleSheet,TouchableOpacity,PermissionsAndroid } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Contacts from 'react-native-contacts'
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
export default function MyContact({navigation}){
    const isFocused = useIsFocused();
    const [myContacts,setMyContacts]=useState([]);
    useEffect(()=>{
        getAllContacts();
    },[isFocused])
    async function getAllContacts(){
        try{
            const permission=await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS
            );
            if(permission==='granted'){
                const contacts = await Contacts.getAll();
                console.log(contacts);
                setMyContacts(contacts);
            }
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <View>
            
<Ionicons name='add-circle'
size={62}
coloe='green'
style={StyleSheet.addIcon}
onPress={()=> navigation.navigate('CreateContact')}
/>
<FlatList 
data={myContacts}
keyExtractor={(item)=>item.recordID}
renderItem={({item})=>(
    <TouchableOpacity onPress={()=>navigation.navigate('Profile',{
        contactInfo:{id: item.recordID}
    })}>
        <ContactCard  contactInfo={item}/>
    </TouchableOpacity>
)}
/>


        </View>
    )
}

const style=StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
      },
      addIcon: {
        bottom: 20,
        right: 20,
        position: 'absolute',
        zIndex: 1,
      }
})
