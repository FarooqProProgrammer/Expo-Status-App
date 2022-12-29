import {View,TouchableOpacity,Text,StyleSheet, Button, Image} from "react-native"
import { useState,useEffect } from "react"
import * as  ImagePicker from "expo-image-picker"
export default function ImagePick({navigation}){
    const [hasGalleryPermission,sethasGalleryPermission] = useState(null);
    const [Gallery,setGallery] = useState([]);

    useEffect(()=>{
        (async()=>{
            const gallery = await ImagePicker.requestMediaLibraryPermissionsAsync();
            sethasGalleryPermission(gallery.status === "granted");
        })();
    },[]);
    const pickerImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            
            aspect:[4,3],
            allowsMultipleSelection: true,
            quality:1
        })

       
     
        if(!result.canceled){
            const list = [...Gallery]
            for(let i = 0;i< result.assets.length;i++) {

                list.push(result.assets[i].uri)
            }
            setGallery(list)
            
        }
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button title="Check Status" onPress={()=> navigation.navigate("Status")} style={{marginTop:30}}/>
        <Button title="Pick Image" onPress={()=> pickerImage()} style={{marginTop:30}}/>
        
            {Gallery && 
                <View>
                    {Gallery.map((item,index)=>{
                        return <Image key={index} source={{uri:item}} style={{width:90,height:90,flexDirection:"row"}}/>
                    })}
                     
                </View>
           
            }
      </View>
    )
  }

  const styles = StyleSheet.create({
    btn:{
      width:300,
      height:60,
      borderWidth:4,
      justifyContent:"center",
      alignItems:"center",
      marginTop:10,
      backgroundColor:"#2980b9"
    },Text:{
      fontSize:25,
      color:"white",
      fontWeight:"bold"
    }
})