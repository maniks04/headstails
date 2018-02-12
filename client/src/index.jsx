import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'
//import HeadsTails from './headstails.jsx'
// import AnyComponent from './components/filename.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      string: [],
      postValue: ''
    }
    this.headsOrTails = this.headsOrTails.bind(this)
    this.post = this.post.bind(this)
    this.getList = this.getList.bind(this)
  }


  getList() {
    var that = this
    axios.get('/list')
    .then(function(res) {
      console.log(res.data)
      that.setState({string: res.data});
    })
  }

  headsOrTails() {
    var that = this;
    axios.get('/heads/tails')
    .then(function(res) {
      console.log(res.data)
      that.getList()
    })
  }



 post() { 
  axios.post('/heads/tails', {
    someThing: this.state.postValue
  }).then(function(res) {
    console.log(res)
  })
 }


  componentDidMount() {
    console.log('app has started')
  }

  render () {
  	return (
    <div>
      <input onChange={(event) => {this.setState({postValue:event.target.value})}}/>
      <button onClick={this.headsOrTails}>heads/tails</button>
      <button onClick={this.post}>send post</button>
      {this.state.string.map((result, i) => 
        <div key={i}>{result.result}</div>
      )}
      {this.state.postValue}
    </div>
  
  )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));