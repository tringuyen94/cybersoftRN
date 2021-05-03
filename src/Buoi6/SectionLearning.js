import React, { Component } from 'react'
import { Text, StyleSheet, View, SectionList } from 'react-native'

export default class SectionLearning extends Component {
    listItem = [
        {
            title: 'Header 1',
            data: [
                { id: 1.1, item: 1.1 },
                { id: 1.2, item: 1.2 },
                { id: 1.3, item: 1.3 },
            ]
        },
        {
            title: 'Header 2',
            data: [
                { id: 2.1, item: 2.1 },
                { id: 2.2, item: 2.2 },
                { id: 2.3, item: 2.3 },
            ]
        },
        {
            title: 'Header 3',
            data: [
                { id: 3.1, item: 3.1 },
                { id: 3.2, item: 3.2 },
                { id: 3.3, item: 3.3 },
            ]
        },
        {
            title: 'Header 4',
            data: [
                { id: 4.1, item: 4.1 },
                { id: 4.2, item: 4.2 },
                { id: 4.3, item: 4.3 },
            ]
        },
    ]
    renderItem = ({ item }) => {
        return (
            <View style={{
                borderRadius: 10,
                height: 50,
                borderWidth: 1,
                marginVertical: 10,
                marginHorizontal: 20,
                padding: 10
            }}>
                <Text>Item {item.item}</Text>
            </View>
        )
    }

    renderSectionHeader = ({ section }) => (
        <View style={[
            { backgroundColor: `#${Math.floor(Math.random() * 16777215,).toString(16)}` },
            styles.header
        ]}>
            <Text> {section.title}</Text>
        </ View>
    )
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={this.listItem}
                    stickyHeaderIndices={false}
                    keyExtraction={(item, i) => item.id}
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical:10
    },
    header: {
        height: 50,
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 20,
        justifyContent:'center',
        padding: 10
    },
    item: {
        borderRadius: 10,
        height: 50,
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 10
    }
})
