import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { addAction, delAction, EUserListActionTypes, IUserObj, setMoreAction, upaAction, updateUser, userList } from "../types/common";

/**
 * create an add userList action
 * @param payload 
 * @returns 
 */
export const createAddUserList = (payload: IUserObj): addAction => ({
  type: EUserListActionTypes.add,
  payload
})

/**
 * create a update userList action
 * @param payload 
 * @returns 
 */
export const createUpdateUserList = (payload: updateUser): upaAction => ({
  type: EUserListActionTypes.upa,
  payload
})


/**
 * create a delete userList action by id
 * @param payload 
 * @returns 
 */
export const createDelUserList = (payload: { id: string }): delAction => ({
  type: EUserListActionTypes.del,
  payload
})

/**
 * set more data in userList
 * @param payload 
 * @returns 
 */
export const createSetMoreUserList = (payload: IUserObj[]): setMoreAction => ({
  type: EUserListActionTypes.setMore,
  payload
})
/**
 * 初始化用户的数据
 * @returns 
 */
export const getUserListAction = ():
  ThunkAction<Promise<void>, userList, any, setMoreAction> => {
  return async function (dispatch: Dispatch) {
    const res = await getInitData()
    dispatch(createSetMoreUserList(res))
  }
}

/**
 * 获取网络请求的数据
 * @returns 
 */
function getInitData(): Promise<IUserObj[]> {
  let timer: number | null;
  return new Promise((resolve, reject) => {
    if (timer) {
      clearInterval(timer);
    }
    let arr: IUserObj[] = [];

    timer = setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        arr.push({
          id: getUUID(),
          name: 'twinkle' + i,
          age: i + 5
        })
      }
      if (timer) {
        clearInterval(timer);
      }
      resolve(arr)
    }, 3000)
  })
}


/**
 * 生成uuid
 * @returns 
 */
function getUUID() {
  return Date.now().toString(36) + '-' + Math.random().toString(36).substr(2, 9) + '-' + Math.random().toString(36).substr(2, 9)
}