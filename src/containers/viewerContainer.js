import { connect } from 'react-redux'
import Viewer from '../components/viewer'

/*
 * What data from the store the connected component needs
 *    It is called every time the store state changes.
 *    It receives the entire store state, and should return an object of data this component needs.
 * Returns a plain object containing the data that the connected component needs.
 * This function should be passed as the first argument to connect, and will be
 * called every time when the Redux store state changes.
 * If you do not wish to subscribe to the store, pass null or undefined to connect
 * in place of mapStateToProps
 */
const mapStateToProps = (state) => {
   return {
       input: state
   };
};

/*
 * This is the only way to trigger a state change.
 * lets you create functions that dispatch when called, and pass those functions as props to your component.
 */
const mapDispatchToProps = (dispatch) => {
   return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
