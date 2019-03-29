import { configure } from '@storybook/angular';

const req = require.context('.storybook/stories/', true, /.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  // You can require as many stories as you need.
}

configure(loadStories, module);
