
//取值
export function get(key) {
  try {
      return wx.getStorageSync(key);
  } catch (e) {
      return false;
  }
}

//赋值
export function set(key, value, sync = false) {
  try {
      if (sync) {
          return wx.setStorageSync(key, value);
      } else {
          wx.setStorage({
              key: key,
              data: value
          });
      }
  } catch (e) {

  }
}

//移除
export function del(key, sync = false) {
  try {
      if (sync) {
          return wx.removeStorageSync(key);
      } else {
          wx.removeStorage({
              key: key
          });
      }
  } catch (e) {
      return false;
  }
}

//清空
export function clear(sync = false) {
  try {
      if (sync) {
          return wx.clearStorageSync();
      } else {
          wx.clearStorage();
      }
  } catch (e) {
      return false;
  }
}
