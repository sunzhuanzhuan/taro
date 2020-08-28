import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { connect } from 'react-redux'
import { View, ScrollView,Image } from '@tarojs/components'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'
import api from '../../api'

class Index extends Component {
  state={
    data:[]
  }


  componentWillUnmount () { }

  componentDidShow () {
   let that = this;
    let params={
      url:'/joke/content/list.php',
      data:{
        sort:'asc',
        page:1,
        pagesize:20,
        time:1418816972,
        key:'b10e53b87653fa56232316737b278227'
      }
    }
    api.get(params)
    let obj ={
      url:'/toutiao/index',
      data:{
        key:'a61227231b675e6097a1de4716456294'
      }
    }
    api.get(obj).then((res)=>{
      that.setState({
        data:res.data.result.data
      })
    })

   }

  componentDidHide () { }
  ScrollToLower=()=>{
    console.log(11111)
  }
  ScrollToUpper(){
    console.log(22222)
  }
  render () {
    return (
      <ScrollView
        scrollY
        refresherEnabled
        className='scrollview'
        onScrollToLower={this.ScrollToLower}
        onScrollToUpper={this.ScrollToUpper}
      >
      {this.state.data.map((item,index)=>{
        return  <View className='listItem' key={index}>
        <Image src={item.thumbnail_pic_s} className='imgIcon' mode='scaleToFill'></Image>
        <View className className='titleIcon'>{item.title}</View>
        </View>
      })}
      </ScrollView>
    )
  }
}

export default Index

