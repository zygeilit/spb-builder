{{ #targets.actions }}
import {{ type }} from './{{ type }}'
{{ /targets.actions }}

export default () => {
  describe('{{ description }}', () => {
    it('{{ type }}', () => {
      expect(true).toBe(false)
    })
  })
}
