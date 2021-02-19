/**
 * 获取最大的页面
 * @param total 
 * @param pageSize 
 */
export function getMaxPage(total: number, pageSize: number):number{
  return Math.ceil(total / pageSize)
}

/**
 * 计算最小数字
 */
export function getMinNumber(currentPage:number, panelNumber:number) {
  var min = currentPage - Math.floor(panelNumber / 2)
  if (min < 1) {
      min = 1;
  }
  return min;
}

/**
* 计算最大数字
* @param {*} min 
* @param {*} pageNumber 
*/
export function getMaxNumber(min:number, pageNumber:number, panelNumber:number) {
  var max = min + panelNumber - 1;
  if (max > pageNumber) {
      max = pageNumber;
  }
  return max;
}