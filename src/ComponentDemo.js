import React, { Component, Fragment } from 'react';
import ChildComponetDemo from './ChildComponetDemo'

class ComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '初始值', //input中的值
            list: ['我是小一', '我是小二', '我是小三']
        };
        this.handleChange = this.handleChange.bind(this)
    }
    render() {

        //JSX
        // return (
        //     <div>Hello, World!</div>
        // );

        //not JSX
        //return React.createElement('div', null, 'Hello, World!');

        //ternary operator with JSX
        // return (
        //     <div>{false ? '' : "Hello, World!"}</div>
        // );

        // 组件外层包裹原则 --0
        // return (
        //     <div>我是一号</div>
        //     <div>我是二号</div>
        // );
        // 组件外层包裹原则 --1 保留外层包括标签
        // return (
        //     <div>
        //         <div>我是一号</div>
        //         <div>我是二号</div>
        //     </div>
        // );
        // 组件外层包裹原则 --2 不需要外层包裹标签，记得引入Fragment组件
        // return (
        //     <Fragment>
        //         <div>我是一号</div>
        //         <div>我是二号</div>
        //     </Fragment>
        // );

        //条件渲染 -0
        let divContent;
        if (this.state.list.length % 2 === 0) {
            divContent = <div>list长度为偶数</div>
        } else {
            divContent = <div>list长度为奇数</div>
        }

        return (
            <Fragment>
                <input value={this.state.inputValue} onChange={this.handleChange} ref={(input) => { this.inputComponet = input }} />
                <div>{this.state.inputValue}</div>
                <ul>
                    {/* 子组件写法 */}
                    {
                        this.state.list.map(
                            (item, index) => (
                                <ChildComponetDemo
                                    key = {index}
                                    deleteItem={this.deleteItem.bind(this)}
                                    content={item}
                                    index={index}
                                />
                            )
                        )
                    }

                    {/* 
                        直接写法 
                        {
                            this.state.list.map(
                                //设置key值
                                (item, index) => (
                                    <li
                                        key={index}
                                        onClick={this.deleteItem.bind(this, index)}
                                    >
                                        {item}
                                    </li>
                                )
                            )
                        }
                    */}
                </ul>
                {divContent}
            </Fragment>
        );
    }

    handleChange(e) {
        this.setState({
            //使用.target方法
            //inputValue: e.target.value

            //使用ref的语义化方式
            inputValue: this.inputComponet.value,
            //ES6 Spread syntax
            list: [...this.state.list, this.inputComponet.value]
        })
    }

    deleteItem(index) {
        //这里注意不要直接操作state
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default ComponentDemo;