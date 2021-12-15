import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Header = () => {
    return (
        <View style = {styles.container}>
        <TouchableOpacity>
            <Text style = {{fontFamily:"Baskerville-BoldItalic", color:"white", fontSize: 20}}>Instagram</Text>
        
            {/* <Image style = {styles.logo} source = {require("../../assets/header.png")}/> */}
        </TouchableOpacity>
        <View style = {styles.iconsContainer}>
            <TouchableOpacity> 
            <Image source = {{uri: "https://img.icons8.com/small/50/ffffff/plus-2-math.png",}}
            style = {styles.icon} />
            </TouchableOpacity>
            
            <TouchableOpacity> 
            <Image source = {{uri: "https://img.icons8.com/small/50/ffffff/like.png",}}
            style = {styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity> 
            <View style = {styles.unreadBadge}>
            <Text style = {styles.unreadBadgeText}>11</Text>
            </View>
            <Image source = {{uri: "https://img.icons8.com/small/50/ffffff/facebook-messenger.png",}}
            style = {styles.icon} />
            </TouchableOpacity>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        marginHorizontal:20,
    },
    iconsContainer:{
        flexDirection:"row",
    },
    logo: {
        width:100,
        width:50,
        resizeMode:"contain",
        },
        icon: {
            width:30, 
            height:30,
            marginLeft:10,
            resizeMode:"contain"
    },
    unreadBadge: {
        backgroundColor:"#FF3250",
        position: "absolute",
        left:20,
        bottom:18,
        width:25,
        height:18,
        borderRadius:25,
        alignItems:"center",
        justifyContent:"center",
        zIndex:100,
    },
    unreadBadgeText: {
        color:"white",
        fontWeight:"600",
    }
})
export default Header