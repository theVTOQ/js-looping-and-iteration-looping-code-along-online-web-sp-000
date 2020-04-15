// Code your solutions in this file
function writeCards(names, event) {
  messages = [];
  for(let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${}, for the wonderful ${event} gift!`)
  }
  return messages;
}
