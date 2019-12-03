export function update(text) {
   return { type: 'UPDATE_EDITOR', text: text }
}

export function reset() {
   return { type: 'RESET' }
}
