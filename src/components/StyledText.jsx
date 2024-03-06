import React from "react";
import { Text,StyleSheet } from "react-native";
import theme from '../theme.js'


const styles = StyleSheet.create({
    text:{
        fontSize:theme.fontSizes.body,
        color:theme.colors.textPrimary,
        fontFamily:theme.fonts.main,
        fontWeight:theme.fontWeights.normal
    },
    colorPrimary:{
        color:theme.colors.primary
    },
    colorSecundary:{
        color:theme.colors.textSecundary
    },
    bold:{
        fontWeight:theme.bold
    },

    subheading:{
        fontSize:theme.fontSizes.subheading,
    },
    small:{
        fontSize:10
    }
})
export default function StyledText({children,color,fontSize,fontWeight,style,...restOfProps}){
    const textStyles =[
        styles.text,
        color ==='primary' && styles.colorPrimary,
        color === 'secundary' && styles.colorSecundary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold
    ]
    return(
        <Text style ={textStyles}{...restOfProps}>
            {children}
        </Text>
    )
}