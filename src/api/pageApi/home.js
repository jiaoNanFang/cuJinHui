
import axios from '../ajax'

// 获取医生列表
export const findDoctorTree = (params) => {
  return axios({
    url:'/article/listDoctor'+'/'+params.page+'/'+params.size,
    method:'get',
  })
}


// 查询机构分页
export const findInstitution = (params) => {
  return axios({
    url:'/Institution/listCjhCharactersIntro',
    method:'get',
    params
  })
}
