const regExp = [[/foo/gi, "bar"],[/cat/gi,"dog"],
                [/helo/gi,"hello"], [/heldp/gi, "help"]];
function textRaplcer(event, input){
  let text;
  if(input){
    text = event.target.value.slice();
    regExp.forEach((e, i) => text = text.replace(e[0], e[1]));
    event.target.value = text;
  } else {
    text = event.target.textContent.slice();
    regExp.forEach((e, i) => text = text.replace(e[0], e[1]));
    event.target.textContent = text;
  }
}

document.body.addEventListener("keydown", event => {
  if(event.code == "Space"){
    if(event.target.tagName == "INPUT" && event.target.type == "text"){
      textRaplcer(event, true);
    }
    else if(event.target.getAttribute("contenteditable")){
      textRaplcer(event);
    }
  }
});
