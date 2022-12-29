import {View,TouchableOpacity,Text,StyleSheet} from "react-native"

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.btn}
          onPress={() => navigation.navigate('Image')}
  
        >
          <Text style={styles.Text}>From Image</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={styles.btn}
            onPress={()=> navigation.navigate("camera")}
        >
          <Text style={styles.Text}>From Camera</Text>
        </TouchableOpacity>  
      
      </View>
    );
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