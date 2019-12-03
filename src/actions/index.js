export function update(text) {
   console.log("action: " + text)
   return { type: 'UPDATE_EDITOR', text: text }
}

export function reset() {
   return { type: 'RESET' }
}
