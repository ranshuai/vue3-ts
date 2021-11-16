import request from './request';
export function httpService(json:any) {
  return request({
    url: json.url,
    method: json.method || 'post',
    params: json.params || {},
    data: json.data || {},
  });
}
