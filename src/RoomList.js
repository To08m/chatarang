import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import base from './base'

class RoomList extends Component {
  constructor() {
    super()

    this.state = {
      room: '',
    }
  }
  render(){
  return (
    <nav
      className={`RoomList ${css(styles.nav)}`}
    >
      <h2 className={css(styles.h2)}>Rooms</h2>
      <ul className={css(styles.list)}>
        <li className={css(styles.item)}>
          <a href="#" className={css(styles.link)} onClick={changeRoom()}>general</a>
        </li>
        <li className={css(styles.item)}>
          <a href="#" className={css(styles.link)} onClick={changeRoom()}>random</a>
        </li>
      </ul>
    </nav>
  )
}

 changeRoom = () =>{ //i previously tried putting this in main.js. 
  //My problem was trying to reach down one side of the "tree", getting data, and using that data to manipulate something on the other side
  base.syncState({this.className}'/messages', {
    context: this,
    state: 'messages',
    asArray: true,
  })
}
}

const styles = StyleSheet.create({
  nav: {
    padding: '0 1rem',
  },

  h2: {
    fontSize: '1rem',
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },

  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
  },
})

export default RoomList