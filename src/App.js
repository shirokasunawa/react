import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import * as fromActions from './actions'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.value}</p>
        <button onClick={() => this.props.addOne()}>ADD ONE</button>
        <button onClick={() => this.props.addX(12)}>ADD X</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.add.value,
})

const mapDispatchToProps = dispatch => ({
  addOne: () => dispatch(fromActions.addOne()),
  addX: (x) => dispatch(fromActions.addX(x))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

