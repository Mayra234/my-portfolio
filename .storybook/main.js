module.exports = {
  stories: [
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/layouts/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/html',
};
