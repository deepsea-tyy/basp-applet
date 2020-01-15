import req from '../utils/request'

export function banner(data) {
    return req.get("/cms/advert-position/detail", data);
}

export function goodsCat() {
    return req.get("/spu/category/tree");
}
