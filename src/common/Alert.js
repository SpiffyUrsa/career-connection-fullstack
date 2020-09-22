import React from "react";

function Alert({ messages }){
  
  const messageList = messages ?  messages.map(message =>
    <p className="alert alert-danger" key={message}>
      {message.slice(message.indexOf('.')+1)}
    </p>) : null

  return messageList
}

export default Alert