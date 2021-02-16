/**
 * 单个列表的属性
 */
export interface ICardProps {
  /**
   * 姓名
   */
  name: string,
  /**
   * 性别
   */
  sex:number,
  /**
   * 邮箱
   */
  email: string,
  /**
   * id
   */
  id: string,
}
/**
 * 列表参数的接口
 */
export interface IListCmpProps{
  /**
   * 单个列表的属性
   */
  list: ICardProps[],
}

export type TListCmp = JSX.Element[];