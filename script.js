const regExp = [[/\bfoo\b/gi, "bar"],[/\bcat\b/gi,"dog"],
                [/\bhelo\b/gi,"hello"], [/\bheldp\b/gi, "help"]];
function textRaplcer(event, input){
  let text;

  if(input){
    let posStart = event.target.selectionStart,
        posEnd = event.target.selectionEnd;
    text = event.target.value.slice();

    if(checkWord(text)){
      regExp.forEach((e, i) => text = text.replace(e[0], e[1]));
      event.target.value = text;
      event.target.setSelectionRange(posStart, posEnd);
    }

  } else {
      let sel = document.getSelection(),
          range = document.createRange(),
          pos = sel.getRangeAt(0).startOffset,
          elemFocus = sel.focusNode;
      text = elemFocus.textContent.slice();

      if(checkWord(text)){
        regExp.forEach((e, i) => text = text.replace(e[0], e[1]));
        elemFocus.textContent = text;
        range.setStart(elemFocus, pos);
        range.setEnd(elemFocus, pos);
        sel.removeAllRanges();
        sel.addRange(range);
      }
  }

  function checkWord(value){
    if(regExp.some(e => value.match(e[0]))) return true;
    return false;
  }
}
document.body.addEventListener("keyup", event => {
  if(event.code == "Space"){
    if(event.target.tagName == "INPUT" && event.target.type == "text"){
      textRaplcer(event, true);
    }
    else if(event.target.hasAttribute("contenteditable")){
      textRaplcer(event);
    }
  }

}, false);
