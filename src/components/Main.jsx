import React from 'react';
import Constants from 'expo-constants';
import { View } from 'react-native'; 
import RepositoryList from './RepositoryList.jsx';

const Main = () =>{
    return(
        <View style={{ marginTop: Constants.statusBarHeight, flexGorw:1 }}>
            <RepositoryList />
        </View>
    )
}
export default Main