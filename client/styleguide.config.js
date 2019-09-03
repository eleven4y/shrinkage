const path = require('path');

const webpackConfig = require('./config/webpack.config');

/**
 * Get string, representation path for import component
 * @param {string} componentPath
 * @return {string}
 */
function getComponentPathLine(componentPath) {
  const name = path.basename(componentPath, '.js');
  const dir = path.dirname(componentPath);

  return `import ${name} from '${dir}';`
}

/**
 * Get name of file with example of component
 * @param {string} componentPath
 * @return {string}
 */
function getExampleFilename(componentPath) {
  return componentPath.replace('js', 'md');
}

const requiredResources = [
  path.resolve(__dirname, './config/styles/styleguidist/index.scss'),
];

const sections = [
  { name: 'Blocks', components: 'src/components/blocks/**/*.js'},
  { name: 'Form', components: 'src/components/form/**/*.js'},
  { name: 'Utils', components: 'src/components/utils/**/*.js' }
];

module.exports = {
  getComponentPathLine,
  getExampleFilename,
  sections,
  ignore: ['**/index.js'],
  require: requiredResources,
  skipComponentsWithoutExample: true,
  webpackConfig,
}