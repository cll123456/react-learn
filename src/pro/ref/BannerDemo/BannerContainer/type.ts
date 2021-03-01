import { ECBtnTip, ICImgArr, ICImgObj, ICWH } from "../types";

export interface IBannerContainerP extends ICWH, ICImgArr {
  /**
   * 多少秒后切换下一张
   */
  duration: number,
  /**
   * 多少秒完成动画
   */
  finishTimer: number,
}

/**
 * 组件维护的状态
 */
export interface IBannerContainerS {
  /**
   * 当前显示的第几张图片
   */
  curIndex: number,
}

