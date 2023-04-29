import service from "..";

export function qrCodeLoginKey(timestamp) {
  return service({
    method: "GET",
    url: `/login/qr/key?timerstamp=${timestamp}`,
    withCredentials: true, //关键
  })
}

export function qrCodeLoginImg(key, timestamp) {
  return service({
    method: "GET",
    url: `/login/qr/create?qrimg=true&key=${key}&timestamp=${timestamp}`,
    withCredentials: true, //关键
  })
}

export function qrCodeLoginCheck(key, timestamp) {
  return service({
    method: "GET",
    url: `/login/qr/check?key=${key}&timerstamp=${timestamp}`,
    withCredentials: true, //关键
  })
}