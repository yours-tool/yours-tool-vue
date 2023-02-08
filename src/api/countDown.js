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

