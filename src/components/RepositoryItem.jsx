import { View,Text,StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5
    }
})

const RepositoryItem = (props) =>(
    <View key={repo.id} style={styles.container}>
        <Text style={{ fontWeight:'bold',marginBottom:1 }}>id:{props.id}</Text>
        <Text>FullName:{props.fullName}</Text>
        <Text>description:{props.description}</Text>
        <Text>forksCount:{props.forksCount}</Text>
        <Text>lenguaje:{props.lenguaje}</Text>
    </View>
)
export default RepositoryItem