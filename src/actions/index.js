export function update(text) {
   return { type: 'UPDATE_EDITOR', text: text }
}

export function load() {
   return {type: 'LOAD' }
}

export function save() {
   return { type: 'SAVE' }
}

export function setName(name) {
   return { type: 'SET_NAME', name: name }
}

export function reset() {
   return { type: 'RESET' }
}

export function upload(text) {
   return { type: 'UPDATE_EDITOR_FROM_UPLOAD', text: text }
}
