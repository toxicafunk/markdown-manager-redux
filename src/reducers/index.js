const initState = JSON.parse(localStorage.getItem("test2"));
console.log(initState);
const reducer = (state = initState, action) => {

   switch (action.type) {
   case 'UPDATE_EDITOR': return {  ...state, typed: action.text }
   case 'UPDATE_EDITOR_FROM_UPLOAD': return { ...state, typed: action.text }
   case 'RESET' : return {typed: "", mdname: ""}
   case 'SET_NAME': return { ...state, mdname: action.name }
   case 'SAVE': {
      localStorage.setItem(state.mdname, JSON.stringify(state));
      return state;
   }
   default: return state
   }
}
export default reducer;
