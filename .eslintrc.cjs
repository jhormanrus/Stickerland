module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'standard-with-typescript',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended'
	],
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
        parser: "@typescript-eslint/parser"
      }
		}
	],
	settings: {
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
