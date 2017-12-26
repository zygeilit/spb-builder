
export default ({ getters, dispatch, rootState, commit, state }, payload) => {
  return new Promise((resolve, reject) => {
    let { params = {} } = payload
    // 接受action参数
    let {
      width = 65,
    } = params

    /* action可接受参数的验证 */
    if (!width) {
      throw new Error('\'width\' is required!')
    }

    // 内容区域 -start
    // ...
    // 内容区域 -end

    // action返回的参数
    resolve({
      containerWidth
    })
  })
}
