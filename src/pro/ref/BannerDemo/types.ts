/**
 * 宽高的公共接口
 */
export interface ICWH {
  /**
   * 容器宽度
   */
  width: number,
  /**
   * 容器高度
   */
  height: number
}

/**
 * 图片对象的公共接口
 */
export interface ICImgObj {
  /**
   * 图片的id
   */
  id: string,
  /**
   * 图片的地址
   */
  url: string
}

/**
 * 公共图片
 */
export interface ICImgArr {
  imgList: ICImgObj[]
}

/**
 * 按钮点击的枚举
 */
export enum ECBtnTip {
  up = 'up',
  down = 'down'
}

/**
 * btn 提示
 */
export type TCTip =  ECBtnTip.down | ECBtnTip.up