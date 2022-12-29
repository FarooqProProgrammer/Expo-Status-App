import {View,Text,StyleSheet,Image} from "react-native"
import {useSelector} from "react-redux"
import {useEffect, useState} from "react"

export default function Status () {

    const images = useSelector(state => state.theme);
    
    let [counter,setCounter] = useState(0); 
    let [width,setWidth] = useState(1)

       useEffect(()=>{
        setInterval(()=>{
            if(counter === images.length){
                setCounter(0)
            }else {
                setWidth(width + 100)
             
                    setCounter(counter + 1)
                
            }
            
        },10000)
       },[counter])


    

    return (
        <View style={styles.container}>
                <View style={styles.first}>
                    <Text style={styles.firstText}>Your Beautifull Status</Text>
                </View>
                <View style={{width:width,height:4,backgroundColor:"red"}}>

                </View>
                <View style={styles.Second}>
                 <Image  style={styles.Image} source={{uri:images[counter]}}/>

                </View>
                <View style={styles.Third}></View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    first:{
        flex:0.1,
        borderWidth:3,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#3498db"
    },firstText:{
        fontSize:25,
        fontWeight:"bold",
        color:"white"
    }
    ,Second:{
        flex:1,
        borderWidth:3
    },
    Third:{
        flex:0.1,
        borderWidth:3
    },
    Image:{
        flex:1
    }
}) 