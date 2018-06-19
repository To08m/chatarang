import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { NavLink } from 'react-router-dom'

const RoomLink = ({room ,user,users, rooms}) => {
  if( rooms.length !== 0){
    if(users.includes(user.uid)){
  return (
    <li className={css(styles.item)}>
      <NavLink
        to={`/rooms/${room.name}`}
        className={css(styles.link)}
      >
        { room.name }
      </NavLink>
    </li>
  )
  }
  else{
    return(
    <li className={css(styles.item)}>
      private
    </li>
    )
  }
  }
  else{
    return(
    <li className={css(styles.item)}>
      
    </li>
    )
  }
}

const styles = StyleSheet.create({
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

export default RoomLink