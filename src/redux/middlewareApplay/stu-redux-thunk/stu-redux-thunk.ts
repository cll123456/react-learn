import { createAddUserList, getUserListAction } from './actions/userListAction'
import store from './store'

store.dispatch(createAddUserList({id: getUUID(), name: 'test', age: 32}))

store.dispatch(getUserListAction())
/**
 * 生成uuid
 * @returns 
 */
function getUUID(){
  return Date.now().toString(36) + '-' + Math.random().toString(36).substr(2, 9) + '-' + Math.random().toString(36).substr(2, 9)
}