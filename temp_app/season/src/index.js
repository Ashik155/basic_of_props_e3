import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './loading';


class App extends React.Component {

    state = { lat : null, errMsg:''}

    componentDidMount(){
       
        window.navigator.geolocation.getCurrentPosition(
            suc => {
                this.setState({ lat : suc.coords.latitude})
            }
            ,
            err => {
                this.setState({ errMsg: err.message})
            }
        );
    }

   
    render() {
   
        if(!this.state.errMsg && this.state.lat){
            return  <SeasonDisplay lat={this.state.lat}/>
        }
        if(this.state.errMsg && !this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Loading />
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))
