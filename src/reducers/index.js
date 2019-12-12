const reducer = (state = "", action) => {

   switch (action.type) {
   case 'UPDATE_EDITOR': return action.text
   case 'UPDATE_EDITOR_FROM_UPLOAD': return action.text
   case 'RESET' : return ""
   default: return state
   }
}
export default reducer;
