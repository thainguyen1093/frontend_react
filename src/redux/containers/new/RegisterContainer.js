import { connect } from 'react-redux'

import Register from "../../components/new/Register";
import {userCreateChangePassword, userCreateChangeUserName, create} from "../../actions/user/userCreate";

const mapStateToProps = state => ({
  userCreate: state.userCreate,
  userCreateStatus: state.userCreateStatus
})

const mapDispatchToProps = dispatch => {
  return {
    changeUsername: (event) => dispatch(userCreateChangeUserName(event.target.value)),
    changePassword: (event) => dispatch(userCreateChangePassword(event.target.value)),
    create: () => dispatch(create())
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)