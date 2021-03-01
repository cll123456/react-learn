export interface IBannerDotP {
  /**
   * 图片长度
   */
  imgListLength: number,
  /**
   * 当前显示第几个
   */
  curIndex: number,
  /**
   * 点击事件
   */
  onClick: (index: number) => void
}