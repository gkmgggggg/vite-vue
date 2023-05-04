// import Vue from 'vue'
import getUrl from './urlDict'
// import storage from '@/utils/storage'
import instance from './axios'
import { AxiosRequest, CustomResponse } from './types'
import { getToken } from '../auth'

class Abstract {
  protected baseURL: string = import.meta.env.VITE_BASE_URL as string

  protected headers: object = {
    ContentType: 'application/json;charset=UTF-8'
  }

  private apiAxios({
    baseURL = this.baseURL,
    headers = this.headers,
    method,
    url,
    data,
    params,
    responseType
  }: AxiosRequest): Promise<CustomResponse> {
    Object.assign(headers, {
      token: getToken()
    })

    // url解析
    const _url = (url as string).split('.')
    url = getUrl(_url[0], _url[1])

    return new Promise((resolve, reject) => {
      instance({
        baseURL,
        headers,
        method,
        url,
        params,
        data,
        responseType
      })
        .then((res) => {
          // 200:服务端业务处理正常结束
          if (res.status === 200) {
            if (res.data.success) {
              resolve({
                status: true,
                msg: 'success',
                data: res.data?.data,
                origin: res.data
              })
            } else {
              // Vue.prototype.$message({ type: 'error', message: res.data?.errorMessage || (url + '请求失败') })
              resolve({
                status: false,
                msg: res.data?.errorMessage || url + '请求失败',
                data: res.data?.data,
                origin: res.data
              })
            }
          } else {
            resolve({
              status: false,
              msg: res.data?.errorMessage || url + '请求失败',
              data: null
            })
          }
        })
        .catch((err) => {
          const msg = err?.data?.errorMessage || err?.msg || url + '请求失败'
          // Vue.prototype.$toast({ msg })
          // eslint-disable-next-line
          reject({ status: false, msg, data: null })
        })
    })
  }

  /**
   * GET类型的网络请求
   */
  protected getReq({
    baseURL,
    headers,
    url,
    data,
    params,
    responseType
  }: AxiosRequest) {
    return this.apiAxios({
      baseURL,
      headers,
      method: 'GET',
      url,
      data,
      params,
      responseType
    })
  }

  /**
   * POST类型的网络请求
   */
  protected postReq({
    baseURL,
    headers,
    url,
    data,
    params,
    responseType
  }: AxiosRequest) {
    return this.apiAxios({
      baseURL,
      headers,
      method: 'POST',
      url,
      data,
      params,
      responseType
    })
  }

  /**
   * PUT类型的网络请求
   */
  protected putReq({
    baseURL,
    headers,
    url,
    data,
    params,
    responseType
  }: AxiosRequest) {
    return this.apiAxios({
      baseURL,
      headers,
      method: 'PUT',
      url,
      data,
      params,
      responseType
    })
  }

  /**
   * DELETE类型的网络请求
   */
  protected deleteReq({
    baseURL,
    headers,
    url,
    data,
    params,
    responseType
  }: AxiosRequest) {
    return this.apiAxios({
      baseURL,
      headers,
      method: 'DELETE',
      url,
      data,
      params,
      responseType
    })
  }
}

export default Abstract
