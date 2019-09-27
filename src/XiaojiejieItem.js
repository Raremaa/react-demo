import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
       
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.props.title} ~ {this.props.content}
            </div>
        );
    }

    handleClick() {
        // this.props.deleteItem(this.props.index)
        console.log(this.props.index)
    }

    // 这个方法要注意 父组件状态state改变会导致重新render 也就重新传参 会导致这个方法被激活；第一次访问时不会触发
    componentWillReceiveProps() {
        console.log("妈妈我收到参数了!")
    }
}

XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    title: PropTypes.string.isRequired
}

XiaojiejieItem.defaultProps = {
    title: "yuyuyu"
}
export default XiaojiejieItem;