import store from './store'
import { createUserAction } from './actions/userLoginAction'

store.dispatch(createUserAction({ isLogin: true }))

