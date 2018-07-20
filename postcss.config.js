const postcss = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-cssnext': {},
  },
}

if (process.env.NODE_ENV === 'production') {
  postcss.plugins['cssnano'] = {}
}

module.exports = postcss
