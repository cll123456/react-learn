/**
 * 学生对象
 */
export interface studentObj {
  id: string,
  name: string,
  age?: number
}
/**
 * 初始化数据
 */
export interface initStudentState {
  /**
   * 学生数据
   */
  data: studentObj[],
  /**
   * 是否加载中
   */
  loading: boolean
}