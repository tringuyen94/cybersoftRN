import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import zaloData from '../data/ZaloData'
export default class ZaloChat extends Component {
    renderSuggestItem = ({ item }) => {
        return (
            <Fragment>
                <View style={styles.suggestFriendItem} >
                    <Image style={styles.image} source={item.zaloImage} />
                    <View>
                        <Text style={styles.name}>{item.zaloName}</Text>
                        <Text>{item.mutualFriends} bạn chung</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.addFriendButton}
                    >
                        <Text style={{ fontSize: 16 }}>Kết bạn</Text>
                    </TouchableOpacity>
                </View>
            </Fragment>
        )
    }
    renderSearchItem = ({ item }) => (
        <Fragment >
            <TouchableOpacity style={styles.searchItem}>
                <Image style={styles.image} source={item.zaloImage} />
                <Text style={styles.name}>{item.zaloName}</Text>
            </TouchableOpacity>
        </Fragment>
    )
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon name="history" size={25} />
                    <Text style={styles.title}>Danh sách tìm kiếm gần đây</Text>
                </View>
                <FlatList 
                style={styles.searchList}
                   horizontal
                   showsHorizontalScrollIndicator={true}
                    data={zaloData}
                    renderItem={this.renderSearchItem}
                    />
                <View style={styles.header}>
                    <Icon name="users" size={25} />
                    <Text style={styles.title}>Gợi ý kết bạn</Text>
                </View>
                <FlatList 
                    data={zaloData.reverse()}
                    renderItem={this.renderSuggestItem}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    title: {
        marginHorizontal: 8,
        fontSize: 16,
        fontWeight: 'bold'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        marginRight: 5,
        marginVertical: 5
    },
    searchList: {
        flexDirection: 'row',
        height:180
    },
    searchItem:{
        marginRight:15,
        alignItems:'center'
    },
    suggestFriendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#DDDDDD",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 15,
        borderRadius: 10

    },
    addFriendButton: {
        marginLeft: 70,
        backgroundColor: "#BBBBFD",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 50
    }
})
