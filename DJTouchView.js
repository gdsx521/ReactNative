//单击双击事件

import React, {Component, PureComponent} from 'react';
import {
    View,
    TouchableHighlight,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';


export default class BannerCell extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false, //0.1记录一次双击
            clickedTimeout: 300,//手机点击间隔
        };
    }

    //属性
    static  defaultProps = {
        onceClick: () => {
        },//单击
        doubleClick: () => {
        },//双击,
        chidrenView: {},
        activeOpacity: 1,
        keyStr:'',
    }


    //单击或者双击
    clickItem() {
        if (this.state.clicked) {
            //双击
            this.doubleClickF()
            this.setState({clicked: false})
            return
        }

        this.setState({clicked: true})
        setTimeout(() => {
            if (this.state.clicked) {
                //单击
                this.clickOnceF()
                this.setState({clicked: false})
            } else {
                //已经判断为双击
            }
        }, this.state.clickedTimeout)
    }

    //单击
    clickOnceF() {
       this.props.onceClick && this.props.onceClick()
    }

    //双击
    doubleClickF() {
        this.props.doubleClick && this.props.doubleClick()
    }

    render() {
        if (this.props.chidrenView) {
            return (
                <TouchableOpacity
                    onPress={() => {
                        this.clickItem()
                    }}
                    activeOpacity={this.props.activeOpacity}
                    key={this.props.keyStr}
                >
                    {this.props.chidrenView}
                </TouchableOpacity>
            )
        } else {
            return null
        }

    }
}

const styles = StyleSheet.create({});
