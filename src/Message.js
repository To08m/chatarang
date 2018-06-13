import React from 'react'

const Message = (props) => {
    return(
        <div className="Message" style = {styles.message}>
            <div className="title" style = {styles.meta}>
                <div style={styles.metauser}>
                    {props.message.userName}  
                </div>
                <div styles={styles.metatime}>
                    {props.message.id}
                </div>
            </div>
            <div className="contents" style = {styles.message}>
                {props.message.body}
            </div>
        </div>
    )
}

const styles = {
    message: {
        display: 'flex',
        marginTop: '1rem',
        padding: '0 1rem',
      },
      
      details: {
        flex: 1,
        paddingLeft: '0.5rem',
      },

      meta: {
        display: 'flex',
        alignItems: 'baseline',
      },
      
      metauser: {
        fontWeight: 'bold',
        marginRight: '0.5rem',
      },
      
      metatime: {
        color: '#999',
        fontSize: '0.8rem',
      },
}
export default Message