import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './App.css'
import Form from './Form'
import Item from './Item'

import * as itemActions from './actions/itemActions.js'

class App extends Component {

  handleCreateItem = item => {
    this.props.Item.createItem(item)
    alert("joss")
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.handleCreateItem}/>
        <Item />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Item: bindActionCreators(itemActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
