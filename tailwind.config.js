// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: {
    content: ['./src/**/*.js'],
    options: {
      whitelist: ['bg-blue-200', 'bg-indigo-200'],
    },
  },
  theme: {},
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
};
