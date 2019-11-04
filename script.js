const inputs = document.querySelectorAll("input[type='text']");
 if(inputs){
   const regExp = [[/foo/gi, "bar"],[/cat/gi,"dog"],
                   [/helo/gi,"hello"], [/heldp/gi, "help"]];
    inputs.forEach(e => e.addEventListener("keydown", event => {
          if(event.code == "Space"){
            let input = event.target.value.slice()
            regExp.forEach((e, i) => {
              input = input.replace(e[0], e[1])

            });
            event.target.value = input;
    }
 }));
}
