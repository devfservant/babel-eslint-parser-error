const getBaseConfig = () => ({
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        // modules: false,
        // useBuiltIns: 'usage',
        // corejs: 3,
        targets: {
          node: 'current',
          browsers: ['ie 11', '>0.15%', 'not dead', 'not op_mini all'],
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    ['babel-plugin-styled-components', { fileName: false }],
    ['@babel/plugin-transform-runtime', { corejs: 3 }],
    '@babel/plugin-syntax-dynamic-import',
  ],
})

module.exports = (api) => {
  api.cache(true)

  const baseConfig = getBaseConfig()

  if (process.env.NODE_ENV !== 'test') {
    baseConfig.ignore = [
      '**/__snapshots__/**',
      '**/*.test.js',
      '**/*.test.jsx',
      '**/*.test.ts',
      '**/*.test.tsx',
    ]

    // If not in tests, add the babel assets import plugin
    baseConfig.plugins.push([
      'transform-assets-import-to-string',
      { baseDir: '/assets' },
    ])
  }

  return baseConfig
}
