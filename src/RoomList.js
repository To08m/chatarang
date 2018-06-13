import React from 'react'

const RoomList =() =>{
    return(
      <nav className="RoomList" style = {styles.children}>
        <h2 style = {styles.h2}>Rooms</h2>
        <ul style = {styles.ul}>
          <li style = {styles.li}><a href="#" style = {styles.a}># general</a></li>
          <li style = {styles.li}><a href="#" style = {styles.a}># random</a></li>
        </ul>
      </nav>
    )
}

const styles = {
    h2 :{
        fontSize: '1rem',
      },
      
     ul :{
        listStyle: 'none',
        marginLeft: 0,
        paddingLeft: 0,
      },
      
     li :{
        marginBottom: '0.5rem',
      },

      a :{
        display: 'block',
        color: 'whitesmoke',
        textDecoration: 'none',
      },

      children: {
        padding: '0 1rem',
      },
}

export default RoomList