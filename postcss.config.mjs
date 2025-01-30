/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
