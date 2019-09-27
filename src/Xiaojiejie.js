import React, { Component, Fragment } from 'react'
import XiaojiejieItem from './XiaojiejieItem';
import axios from 'axios'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'TWT',
            list: ['一个优秀的java程序员', '不可能不会前端']
        }
    }

    render() {
        return (
            <Fragment>
                {/* 这是JSX的注释 */}
                <div>
                    <label htmlFor="temp">start</label>
                    <input
                        id="temp"
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={(input) => { this.input = input }}
                    />
                    <button onClick={this.addList.bind(this)}> 增加服务</button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>
                    {
                        this.state.list.map((item, index) =>
                            <XiaojiejieItem
                                key={item}
                                content={item}
                                index={index}
                                //title = "啦啦啦啦"
                                deleteItem={this.deleteItem.bind(this)} />
                        )
                    }
                </ul>
            </Fragment>
        );
    }


    addList(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        }, () => {
            console.log(this.ul.querySelectorAll('div').length)
        })
    }

    componentDidMount() {
        var config = {
            // headers: {'Access-Control-Allow-Origin': '*'},
            // proxy: {
            //     host: 'http://freeapi.ipip.net/118.28.8.8',
            //     port: 80
            //   }
            crossdomain: true
        };
        axios.get("http://freeapi.ipip.net/118.28.8.8 ", config)
            .then((res) => {
                console.log(JSON.stringify(res))
            })
            .catch((error) => {
                console.log(JSON.stringify(error))
            })
    }

    inputChange(e) {
        this.setState({
            inputValue: this.input.value
        })
    }

    deleteItem(index) {
        let list = this.state.list;
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie;