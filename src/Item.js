import React, { Component } from 'react'
import { connect } from 'react-redux'

class Item extends Component {
  render() {
    const {items} = this.props.items
    console.log(items)
    return (
      <>
        {items.map((item, index) => (
          <li key={index}>
            <div>club name => {item.clubName}</div>
            {item.members.map((member, index) => (
              <>
                <div>first name =>{member.firstName}</div>
                <div>last name => {member.lastName}</div>
                <div>hobbies => {member.hobbies}</div>
              </>
            ))}
          </li>
        ))}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Item)
