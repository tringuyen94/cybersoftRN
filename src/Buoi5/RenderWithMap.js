import React, { Component } from 'react'
import { Image } from 'react-native'
import { Text, StyleSheet, View } from 'react-native'
import GameData from '../data/GameData'

export default class RenderWithMap extends Component {
    renderGame = () => {
        return GameData.map((game, index) => (
            <View
                key={index}
                style={[
                    {backgroundColor: game.backgroundColor},
                    styles.gameContainer,
                ]}
            >
                <Image
                    source={game.icon}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 8
                    }}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{game.title}</Text>
                    <Text style={styles.subTitle}>{game.subTitle}</Text>
                </View>
            </View>
        ))
    }
    render() {
        return (
            <View style={styles.screenContainer}>
                {this.renderGame()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: "#343434",
        justifyContent: 'center',
        alignItems: 'center'
    },
    gameContainer: {
        width: "90%",
        padding: 10,
        height: 150,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor:'rgba(255,255,255,0.5)',
        margin:8
    },
    titleContainer: {
        flexBasis: '80%'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#fff',
        opacity: 0.6,        
    }
})
