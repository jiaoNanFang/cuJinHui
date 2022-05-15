
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


// 查询内容
export const findListContents = (params) => {
  return axios({
    url:'/content/listContents',
    method:'get',
    params
  })
}

// 查询人物
export const findListPerson = (params) => {
  return axios({
    url:'/CharactersIntro/listContents',
    method:'get',
    params
  })
}

// 查询内容详情
export const findContentInfo = (params) => {
  return axios({
    url:'/content/getContents',
    method:'get',
    params
  })
}


//
