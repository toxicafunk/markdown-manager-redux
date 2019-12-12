export function update(text) {
   return { type: 'UPDATE_EDITOR', text: text }
}

export function reset() {
   return { type: 'RESET' }
}

export function upload(text) {
   return { type: 'UPDATE_EDITOR_FROM_UPLOAD', text: text }
}
