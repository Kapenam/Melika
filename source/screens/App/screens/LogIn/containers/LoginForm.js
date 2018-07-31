import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm'
import { requestAuth } from '../shared/actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  loginUser: requestAuth,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
