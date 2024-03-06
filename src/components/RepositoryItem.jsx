import React from "react";
import { View,StyleSheet} from "react-native";
import StyledText from "./StyledText.jsx";

const RepositoryStats = props =>{
    <View style={{ flexDirection:'row',justifyContent: 'space-around'}}>
        <StyledText>forksCount:{props.forksCount}</StyledText>
        <StyledText>ratingAverage:{props.ratingAverage}</StyledText>
        <StyledText>reviewCount:{props.reviewCount}</StyledText>
    </View>
}


const RepositoryItem = (props) =>(
    <View key={props.id} style={styles.container}>
        <StyledText fontSize='subheading' fontWeight='bold'>{props.fullName}</StyledText>
        <StyledText >{props.description}</StyledText>
        <StyledText>{props.lenguaje}</StyledText>
        <RepositoryStats{...props}/>
    </View>
)

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5
    }
})
export default RepositoryItem