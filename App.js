import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ZaloChat from './src/Buoi6/ZaloChat'
import ScrollLearning  from "./src/Buoi6/ScrollLearning"

export default class 
 extends Component {
  render() {
    return (
      <Fragment>
        < ScrollLearning/>
        {/* <ZaloChat/> */}
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({})
