import { createActions, handleActions } from "redux-actions";
import { initStudentState, studentObj } from "../types/student";

const studentActions = createActions({
  /**
   * 
   * @param dataList 设置数据
   * @returns 
   */
  SET_DATA: (dataList: studentObj[]) => ({data: dataList}),
  /**
   * 数据是否加载中
   * @param loading 
   * @returns 
   */
  SET_IS_LOADING: (loading: boolean) => ({loading: loading}),
  /**
   * 发送网络请求，获取数据
   */
  GET_DATA: undefined
})
/**
 * 对外导出的action
 */
export const {setData, setIsLoading, getData} = studentActions;

/**
 * 初始化的默认数据
 */
const initStudentState:initStudentState = {
  data: [],
  loading: false
}
/**
 * student reducer
 */
export const studentReducers = handleActions(
  {
    /**
     * 设置数据
     * @param state 
     * @param param1 
     * @returns 
     */
    [setData.toString()]: (state:initStudentState, {payload}) => ({...state, ...payload}),
    /**
     * 
     * @param state 设置是否加载
     * @param param1 
     * @returns 
     */
    [setIsLoading.toString()]: (state:initStudentState, {payload}) => ({...state, loading: payload.loading})
  },
  initStudentState)