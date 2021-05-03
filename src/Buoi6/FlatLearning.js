import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

export default class FlatLearning extends Component {
    listItem = [
        { id: 1, data: 1 },
        { id: 2, data: 2 },
        { id: 3, data: 3 },
        { id: 4, data: 4 },
        { id: 5, data: 5 },
        { id: 6, data: 6 },
        { id: 7, data: 7 },
        { id: 8, data: 8 },
        { id: 9, data: 9 }
    ]
    renderItem = (item) => {
        return (
            <View style={{
                borderRadius: 10,
                height: 100,
                marginHorizontal: 20,
                marginVertical: 10,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: `#${Math.floor(Math.random() * 16777215,).toString(16)}`
            }}>
                <Text>Item {item.data}</Text>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.listItem}
                    renderItem={this.renderItem}
                    keyExtractor={item=>item.id.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 50
    },

})

