module.exports = {
  plugins: [
    'tailwindcss',
    'tailwindcss/nesting',
    'autoprefixer',
    'postcss-import',
    ...process.env.NODE_ENV === 'production'
     ? [ require('cssnano') ]
     : []
  ]
}
