import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ChildComponetDemo extends Component {

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
       
    }
    
    render() {
        return (
            <li onClick={this.props.deleteItem.bind(this.props.index)}>{this.props.content}</li>
        );
    }
    handleClcik() {
        this.props.deleteItem(this.props.index)
    }
}

// 参数校验
ChildComponetDemo.propTypes = {
    // 必须是数字类型
    index: PropTypes.number,
    //必须是函数类型且必传(必填项)
    deleteItem: PropTypes.func.isRequired
}

//参数设置默认值
ChildComponetDemo.defaultProps = {
    index : -1
}
export default ChildComponetDemo;