/**
 * page prop interface
 */
export interface IPageP {
  /**
   * 面板显示的几个分页数据
   */
  panelNum: number,
  /**
   * 每个页面显示的数据条数
   */
  pageSize: number,
  /**
   * 当前第几页
   */
  currentPage: number,
  /**
   * 总数
   */
  total: number

}
/**
 * page state interface
 */
export interface IPageS {
  /**
   * 当前第几页
   */
  currentPage: number,
}