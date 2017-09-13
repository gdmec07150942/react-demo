import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';

const defaultProps = {
    username: '这是默认的用户名',
}
export default class BodyIndex extends React.Component {
    componentWillMount() {
        //这是页面正在加载中的方法，可以在这里写逻辑判断
        console.log('BodyIndex -  componentWillMount');
    }

    componentDidMount() {
        //这是页面加载完成之后的方法，也可以在这里写逻辑
        console.log('BodyIndex -  componentDidMount');
    }

    constructor() {
        super();//调用基类的初始化方法
        this.state = {username: 'taotao', age: 20};  //初始化赋值
    }

    UserInfo() {
        this.setState({age: 50});
    }

    handleChildValueChange(event) {
        this.setState({age: event.target.value});
    }

    render() {
        setTimeout(() => {
            this.setState({username: '你们好'});
        }, 4000);

        var username = '';
        var boolInput = false;
        var html = 'www&nbsp;html';
        return (
            <div>
                <h1>这里是内容</h1>
                <p>{username == '' ? '用户还没有登录' : '用户名:' + username}</p>
                <p>{this.state.username} {this.props.userid} {this.props.username}</p>
                <input type="button" value='默认按钮' disabled={boolInput}/>
                <input type="button" value="提交" onClick={this.UserInfo.bind(this)}/>
                <p>{this.state.age}</p>
                <BodyChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
                <p>{html}</p>{/*如何去解析html语句，可以用unicode转码去解析*/}
                <p dangerouslySetInnerHTML={{__html: html}}></p> {/*并不建议这么做解析HTML，有攻击的漏洞问题，xxs攻击*/}
            </div>
        )
    }
}


