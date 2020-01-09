import { connect } from 'react-redux'
import Viewer from '../components/viewer'

const CapViewer = Viewer

const mapStateToProps = (state) => {
   return {
       input: state.typed.toUpperCase()
   };
};

const mapDispatchToProps = (dispatch) => {
   return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CapViewer);
