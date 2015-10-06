var buttons = document.querySelectorAll('button');
console.log('buttons = ' + buttons);
for(var i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
  buttons[i].addEventListener('click', input);
}

function input(){
  var input = this.getInnerHTML;
};
