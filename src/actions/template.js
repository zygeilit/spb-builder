
export default ({ getters, dispatch, rootState, commit, state }, payload) => {
  return new Promise((resolve, reject) => {
    let { params = {} } = payload
    // 接受action参数
    let {
    {{ #inputs }}
      {{ name }} = {{ default }},
    {{ /inputs }}
    } = params

    /* action可接受参数的验证 */
    {{ #inputs }}
    {{ #required }}
    if (!{{ name }}) {
      throw new Error('\'{{name}}\' is required!')
    }
    {{ /required }}
    {{ /inputs }}

    // 内容区域 -start
    // ...
    // 内容区域 -end

    // action返回的参数
    resolve({
    {{ #outputs }}
      {{ name }}
    {{ /outputs }}
    })
  })
}
