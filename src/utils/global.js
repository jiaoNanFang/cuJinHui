
/**
 * 全局常量、方法封装模块
 * 通过原型挂载到Vue属性
 * 通过 this.Global 调用
 */

// 本地
export const baseUrl ='api'
// export const baseUrl ='//www.onlinekepu.com/web/api'
// 系统数据备份还原服务器地址
export const backupBaseUrl = ''

export default {
  baseUrl,
  backupBaseUrl

}
