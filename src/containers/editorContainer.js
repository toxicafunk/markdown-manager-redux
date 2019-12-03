import { connect } from 'react-redux'
import Editor from '../components/editor'
import { update, reset } from '../actions';

const mapStateToProps = (state) => {
    console.log("mapStateToProps editor: " + state)
   return {
      input: state
   };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
