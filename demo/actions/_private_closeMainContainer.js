
export default ({ getters, dispatch, rootState, commit, state }, payload) => {
  return new Promise((resolve, reject) => {
    let { params = {} } = payload
    let {
      width = 65,
    } = params

    if (!width) {
      throw new Error('\'width\' is required!')
    }
  })
}
