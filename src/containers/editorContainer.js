import { connect } from 'react-redux'
import Editor from '../components/editor'
import { update, reset, load, save, setName } from '../actions';

const mapStateToProps = (state) => {
   return {
       input: state.typed,
       name: state.mdname
   };
};

/*
 * This is the only way to trigger a state change.
 * lets you create functions that dispatch when called, and pass those functions as props to your component.
 */
const mapDispatchToProps = (dispatch) => {
   return {
       update: (text) => dispatch(update(text) ),
       reset: () => dispatch(reset()),
       load: () => dispatch(load()),
       save: () => dispatch(save()),
       setName: (name) => dispatch(setName(name))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
