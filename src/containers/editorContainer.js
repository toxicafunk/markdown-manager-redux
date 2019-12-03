import { connect } from 'react-redux'
import Editor from '../components/editor'
import { update, reset } from '../actions';


/*
 * This is the only way to trigger a state change.
 * lets you create functions that dispatch when called, and pass those functions as props to your component.
 */
const mapDispatchToProps = (dispatch) => {
   return {
       update: (text) => dispatch(update(text) ),
       reset: () => dispatch(reset())
   };
};

export default connect(null, mapDispatchToProps)(Editor);
