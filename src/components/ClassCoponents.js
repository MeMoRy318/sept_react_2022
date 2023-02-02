import {Component} from "react";

class ClassCoponents extends Component{

    constructor(props) {
        super(props);
        this.state = {a:0,b:25};
    }
    componentDidMount() {
        console.log('componentDidMount')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        if (prevState.a === 5){
            return 25
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        console.log('snapshot',snapshot);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    inc(){
        this.setState(prev => ({a:prev.a + 1}))
    }

    render() {
        return (
            <div>
                <div>{this.state.a}</div>
                <div>{this.state.b}</div>
                <div>{this.props.userName}</div>
                <button onClick={()=> this.inc()}>inc</button>
            </div>
        )
    }

}
export {ClassCoponents}