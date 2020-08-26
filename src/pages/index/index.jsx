import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { connect } from 'react-redux'
import { View, ScrollView } from '@tarojs/components'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[]
    }

  }

  componentWillUnmount () { }

  componentDidShow () {
    Taro.request({
      url: '/api/homepage-v3',
      mode: 'no-cors',
      data:{
        platform:'wap',
        rent_mode: 2,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        console.log(res)
      }
    })
   }

  componentDidHide () { }

  render () {
    return (
      <ScrollView
        className='scrollview'
      >33
      {this.state.data.map((item,index)=>{
        return  <View key={index}>
        <View>{item.content}11</View>
        <View>{item.updatetime}22</View>
        </View>
      })}
      </ScrollView>
    )
  }
}

export default Index

