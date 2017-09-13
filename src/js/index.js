var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';
class Index extends React.Component {
    componentWillMount() {
        //这是页面正在加载中的方法，可以在这里写逻辑判断
        console.log('Index -  componentWillMount');
    }

    componentDidMount() {
        //这是页面加载完成之后的方法，也可以在这里写逻辑
        console.log('Index -  componentDidMount');
    }

    render() {
        return (
            <div>
                <ComponentHeader/>
                <BodyIndex userid={123456} />
                <ComponentFooter/>
            </div>
        );
    }
}
ReactDOM.render(<Index/>, document.getElementById('example'));
