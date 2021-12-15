import React, {useState}from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
export const bottomTabIcons = [
    {
        name:"Home",
        active:"https://img.icons8.com/ios-glyphs/30/ffffff/home-page--v1.png",
        inactive:"https://img.icons8.com/ios/30/ffffff/dog-house.png",
    },
    {
        name:"Search",
        active:"https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png",
        inactive:"https://img.icons8.com/ios-glyphs/30/ffffff/google-web-search.png",
    },
    {
        name:"Reels",
        active:"https://img.icons8.com/ios-glyphs/30/ffffff/cinema---v1.png",
        inactive:"https://img.icons8.com/ios-glyphs/30/ffffff/clips-apperance.png",
    },
    {
        name:"Shop",
        active:"https://img.icons8.com/ios-glyphs/30/ffffff/shopping-bag-full.png",
        inactive:"https://img.icons8.com/wired/30/ffffff/shopping-bag-full.png",
    },
    {
        name:"Profile",
        active:"https://ogre.natalie.mu/artist/62456/20160209/yamazakikento_201509.jpg?imwidth=640",
        inactive:"https://ogre.natalie.mu/artist/62456/20160209/yamazakikento_201509.jpg?imwidth=640",
    },
]
const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState("Home")
    const Icon = ({icon}) =>(
        <TouchableOpacity onPress ={()=>setActiveTab(icon.name)}>
            <Image source = {{uri:icon.inactive}} style = {styles.icon}/>
        </TouchableOpacity>
    )
     return (
         <View styles = {styles.wrapper}>
         <Divider width = {1} orientation ="vertical"/>
        <View style = {styles.container}>
            {icons.map((icon,index)=>(
                <Icon key = {index} icon = {icon}/>
            ))}
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    icon: {
        width:30,
        height:30
    },
    container:{
        flexDirection:"row",
        justifyContent:"space-around",
        height:50,
        paddingTop:10
    },
    wrapper:{}
})
export default BottomTabs
