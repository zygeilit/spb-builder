
export default ({ getters, dispatch, rootState, commit, state }, payload) => {
  return new Promise((resolve, reject) => {
    let { params = {} } = payload
    let {
    {{ #inputs }}
      {{ name }} = {{ default }},
    {{ /inputs }}
    } = params

    {{ #inputs }}
    {{ #required }}
    if (!{{ name }}) {
      throw new Error('\'{{name}}\' is required!')
    }
    {{ /required }}
    {{ /inputs }}
  })
}
