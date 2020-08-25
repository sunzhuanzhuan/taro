import React, { Component } from 'react'
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
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {
    console.log(11111);

    Taro.request({
      url: 'http://v.juhe.cn/joke/content/list.php?sort=asc&page=&pagesize=&time=1418816972&key=b10e53b87653fa56232316737b278227', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.result.data)
      }
    })
   }

  componentDidHide () { }

  render () {
    return (
      <ScrollView
        className='scrollview'
      >
      {this.state.data.map((item,index)=>{
        return  <View key={index}>
        <View>{item.content}</View>
        <View>{item.updatetime}</View>
        </View>
      })}
      </ScrollView>
    )
  }
}

export default Index

