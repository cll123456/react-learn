/**
 * 获取一个随机数
 * @param min 
 * @param max 
 */
export function random (min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}