function ellipsis(text){
  if(text.length > 38){
      let result = text.slice(0,38)
      return `${result}...`
  }  else{
      return text
  }
}

export default ellipsis