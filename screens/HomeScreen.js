import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import BottomTabs, { bottomTabIcons } from '../Components/home/BottomTabs'
import Header from '../Components/home/Header'
import Post from '../Components/home/Post'
import Stories from '../Components/home/Stories'
import { POSTS } from '../data/posts'


 const HomeScreen = () => {
    return (
        <SafeAreaView style = {styles.container}>
        <Header/>
        <Stories/>
        <ScrollView>
        {POSTS.map((post,index) => (
            <Post post={post} key={index} />
        ))}
        
        </ScrollView>
        <BottomTabs icons = {bottomTabIcons}/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"black", flex:1
    }
})
export default HomeScreen