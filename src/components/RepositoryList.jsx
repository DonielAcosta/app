import React from "react";
import { View,Text } from "react-native";
import repositories from "./data/repositories.js"

const RepositoryList = () =>{
    return(
        <View>
            {repositories.map(repo =>{
                <View key={repo.id}>
                    <Text>id:{repo.id}</Text>
                    <Text>FullName:{repo.fullName}</Text>
                    <Text>{repo.description}</Text>
                    <Text>{repo.forksCount}</Text>
                    <Text>{repo.lenguaje}</Text>
                </View>
            })}
        </View>
    )
}

export default RepositoryList