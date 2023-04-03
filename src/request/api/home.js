import service from "..";
/*axios.get('http://localhost:3000/banner?type=2').then((res)=>{
        console.log(res);
        state.images=res.data.banners
        console.log(state.images)
      })
*/
export function getBanner(){
  return service({
    method:"GET",
    url:"/banner?type=2",
  })
}

export function getMusicList(){
  return service({
    method:"GET",
    url:"/personalized?limit=10",
  })
}

export function getSearchMusic(data){
  return service({
    method:"GET",
    url:`/search?keywords=${data}`,
  })
}

//登录
export function getPhoneLogin(data){
  return service({
      method:"GET",
      url:`/login/cellphone?phone=${data.phone}&password=${data.password}`
  })
}
//获取用户详情
export function getLoginUser(data){
  return service({
      method:"GET",
      url:`/user/detail?uid=${data}`
  })
}
