/**
 * 设置json字符
 *
 * @param key 键值
 * @param data 键名，必须为json字符
 */
function setObjItem(key, data) {
  localStorage.setItem(key, data.toJSONString());
}
/**
 * 获取json字符
 *
 * @param key 键名
 * @returns 内容
 */
function getObjItem(key) {
  return localStorage.getItem(key).parseJSON();
}
