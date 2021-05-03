import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import Icons from './Icons'

const iconArray = [
    {
        id: 1,
        iconPath: require('../assets/angry.png')
    },
    {
        id: 2,
        iconPath: require('../assets/haha.png')
    },
    {
        id: 3,
        iconPath: require('../assets/sad.png')
    },
    {
        id: 4,
        iconPath: require('../assets/care.png')
    },
    {
        id: 5,
        iconPath: require('../assets/love.png')
    },
    {
        id: 6,
        iconPath: require('../assets/like.png')
    },
]
export default class Touch extends Component {
    state={
        mainImage:require('../assets/angry.png')
    }
    changeMainIcon = path => {
        this.setState({
            mainImage:path
        })
    }
    renderIcons = () => {
        return iconArray.map(icon => {
            return (
                <Fragment key={icon.id}>
                    <Icons changeMainIcon={this.changeMainIcon} iconPath={icon.iconPath} />
                </Fragment>
            )
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.mainImage} source={this.state.mainImage} />
                <View style={styles.subImageContainer}>
                    {this.renderIcons()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainImage: {
        width: 150,
        height: 150,
        marginVertical: 20
    },
    subImageContainer: {
        marginVertical: 10,
        flexDirection: 'row',
    }
})
