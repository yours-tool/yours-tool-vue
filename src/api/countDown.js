import request from "@/utils/request";


export function countDownAdd(data) {
  return request({
    url: "countDown/add",
    method: "post",
    data,
  });
}

export function countDownList(data) {
  return request({
    url: "countDown/list",
    method: "post",
    data,
  });
}

export function countDownDetail(param) {
  return request({
    url: "countDown/"+param,
    method: "get",
  });
}

export function countDownUpdate(data) {
  return request({
    url: "countDown/update",
    method: "post",
    data,
  });
}

