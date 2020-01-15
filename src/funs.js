export function formatTime(timestamp, type = 1) {
  if (!timestamp) {
    return "";
  }
  let date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
  let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  if (type == 1) {
    return Y + M + D;
  }
  return Y + M + D + h + m + s;
}

/**
 * 深度查找
 */
export function treeDeepArr(key, treeData) {
  let arr = [];
  let returnArr = [];
  let depth = 0;
  // 定义递归函数
  function childrenEach(childrenData, depthN) {
    for (var j = 0; j < childrenData.length; j++) {
      depth = depthN;
      arr[depthN] = (childrenData[j].id);
      if (childrenData[j].id == key) {
        returnArr = arr.slice(0, depthN + 1);
        break
      } else {
        if (childrenData[j].children) {
          depth++;
          childrenEach(childrenData[j].children, depth);
        }
      }
    }
    return returnArr;
  }
  return childrenEach(treeData, depth);
}

/**
 * 生成链接参数
 */
export function genQuery(url, query) {
  let _str = "";
  for (var o in query) {
    if (query[o] != -1) {
      _str += o + "=" + query[o] + "&";
    }
  }
  _str = _str.substring(0, _str.length - 1);
  return url.indexOf('?') != -1 ? url + _str : url + '?' + _str;
}
