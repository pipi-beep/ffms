export default ({ request }) => ({
  /**
   * @description 股票
   * @param {Object} data 请求携带的信息
   */
  FAMILY_STOCK (data) {
    // 接口请求
    console.log(data)
    return request({
      url: '/stock/total',
      method: 'post',
      data
    })
  }
})
