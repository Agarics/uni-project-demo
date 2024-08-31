module.exports = {
  '**/*.{html,vue,ts,cjs,json,md}': ['prettier --write'],
  '**/*.{vue,js,ts,jsx,tsx}': ['eslint --fix'],
  '**/*.{vue,css,scss,html}': ['stylelint --fix --allow-empty-input'],
}
