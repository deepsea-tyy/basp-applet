import config from '../config'
import {get, set, del, clear} from "./wechat/cache"
// import {get, set, del, clear} from "./my/cache"

export default {
    get: get,
    set: set,
    del: del,
    clear: clear
}