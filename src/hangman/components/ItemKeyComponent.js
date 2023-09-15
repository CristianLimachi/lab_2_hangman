import React from 'react';

const ItemKeyComponent = (props) => {
  
    return (
    <div className={props.state ? "disablediv" : ""}
        onClick={()=>{props.handlerClick(props.myKey)}}
    >
      {props.myKey}
    </div>
  )
}
export default ItemKeyComponent