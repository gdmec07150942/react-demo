import React from 'react';
import ReactDOM from 'react-dom';
export default class BodyIndex extends React.Component {
    render() {
        var username = '';
        var boolInput = false;
        var html = 'www&nbsp;html';
        return (
            <div>
                <h1>这里是内容</h1>
                <p>{username == '' ? '用户还没有登录' : '用户名:' + username}</p>
                <input type="button" value='默认按钮' disabled={boolInput}/>
                <p>{html}</p>{/*如何去解析html语句，可以用unicode转码去解析*/}
                <p dangerouslySetInnerHTML={{__html: html}}></p> {/*并不建议这么做解析HTML，有攻击的漏洞问题，xxs攻击*/}
            </div>
        )
    }
}
