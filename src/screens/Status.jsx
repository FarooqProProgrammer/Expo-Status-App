import {View,Text,StyleSheet} from "react-native"
export default function Status () {
    return (
        <View style={styles.container}>
                <View style={styles.first}></View>
                <View style={styles.Second}></View>
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
        borderWidth:3
    }
    ,Second:{
        flex:1,
        borderWidth:3
    },
    Third:{
        flex:0.1,
        borderWidth:3
    }
}) 