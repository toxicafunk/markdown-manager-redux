import { connect } from 'react-redux'
import ImportFromFileBody from '../components/importFromFileBody'
import { upload } from '../actions';

const mapDispatchToProps = (dispatch) => {
   return {
       upload: (text) => dispatch(upload(text) )
   };
};

export default connect(null, mapDispatchToProps)(ImportFromFileBody);
