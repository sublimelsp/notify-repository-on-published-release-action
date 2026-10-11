import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {ignores: ['dist/', 'lib/', 'node_modules/']},
  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {projectService: true, tsconfigRootDir: import.meta.dirname}
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {allowExpressions: true}
      ]
    }
  },
  {files: ['eslint.config.js'], ...tseslint.configs.disableTypeChecked}
)
