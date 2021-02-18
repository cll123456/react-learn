/**
 * 小球运动的参数
 */
export interface IBallSportP {
  /**
   * 背景颜色
   */
  background?: string,
  /**
   * 宽度
   */
  width: number,
  /**
   * 高度
   */
  height: number,
  /**
   * 初始位置距离顶部
   */
  top:number,
  /**
   * 初始位置距离左边
   */
  left:number,
  /**
   * 水平速度
   */
  xSpeed: number,
  /**
   * 垂直速度
   */
  ySpeed: number
}

/**
 * 小球运动的状态
 */
export interface IBallSportS {
  /**
   * 水平速度
   */
  xSpeed: number,
  /**
   * 垂直速度
   */
  ySpeed: number,
  /**
   * 左边的距离
   */
  left: number,
  /**
   * 顶部的距离
   */
  top: number,
  /**
   * 背景颜色
   */
  background: string,

}