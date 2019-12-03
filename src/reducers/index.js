var md = require('markdown-it')();

const reducer = (state = "", action) => {

   switch (action.type) {
   case 'UPDATE_EDITOR': return md.render(action.text)
      case 'RESET' : return ""
      default: return state
   }
}
export default reducer;
