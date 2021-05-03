import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'

export default class Icons extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.buttonChangeImage} onPress={()=>this.props.changeMainIcon(this.props.iconPath)} >
                <Image style={styles.subImage} source={this.props.iconPath}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonChangeImage:{
        marginHorizontal:7
    },
    subImage:{
        width:50,
        height:50,
    }
})
