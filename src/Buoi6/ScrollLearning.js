import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class ScrollLearning extends Component {
    listItem = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 10, 11, 12, 13, 14]
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.listItem.map((i) => (
                        <View key={i} style={[
                            { backgroundColor: `#${Math.floor(Math.random() * 16777215,).toString(16)}` },
                            styles.item

                        ]}>
                            <Text>Item {i}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 50
    },
    item: {
        borderRadius: 10,
        height: 100,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

