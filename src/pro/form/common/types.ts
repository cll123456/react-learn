/**
 * list 里面的对象信息
 */
export type TListObjInfo = {
  value: string,
  label: string | number
}
/**
 * data 的数据类型
 */
export interface ITypeList {
  data: TListObjInfo[],
   
}
/**
 * 传入属性的接口
 */
export interface ICom {
  /**
   * 对象信息
   */
  info: TListObjInfo
}


/**
 * 属性名和事件
 */
export interface IPropNameEvent {
  /**
   * 属性名
   */
  name: string,
  /**
   * change 事件
   */
  onChange: (v: any, name: string, e: React.ChangeEvent<HTMLInputElement>) => void,
 
}
/**
 * checkbox 的属性
 */
export interface ICheckbox extends ITypeList , IPropNameEvent, ICom {
  /**
   * 选中的值
   */
  choose: string[] ,
  
}
/**
 * radio 接口
 */
export interface IRadio extends ITypeList , IPropNameEvent, ICom{
  /**
   * 选中的值
   */
  value: string,
}