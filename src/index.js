const lint = require('neutrino-lint-base');
const merge = require('deepmerge');

module.exports = neutrino => {
  lint(neutrino);
  neutrino.config.module
    .rule('lint')
    .loader('eslint', props => merge(props, {
      options: {
        baseConfig: {
          extends: ['prettier']
        },
        rules: {
          // These were in the repo I forked from. Leaving them commented until
          // I'm sure I can remove them.

          // handled by babel rules
          // 'new-cap': 'off',

          // handled by babel rules
          // 'object-curly-spacing': 'off',

          // require a capital letter for constructors
          // 'babel/new-cap': ['error', { newIsCap: true }],

          // require padding inside curly braces
          // 'babel/object-curly-spacing': ['error', 'always'],

          // guard against awaiting async functions inside of a loop
          // no-await-in-loop': 'error'
        }
      }
    }));
};
