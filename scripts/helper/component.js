const fs = require('fs');

// string helper
function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

function generateComponent(dir, name) {
  fs.mkdirSync(`${dir}/tests`);

  // component templete
  const basicComponent = `/*
* Generated by ${process.env.USER}
* Created on ${new Date()}
* Awesome work!
*/

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

function ${name}(props) {
  const className = props.className ? \`\${styles.${lowercaseFirstLetter(name)}} \${props.className}\` : styles.${lowercaseFirstLetter(name)};

  return (
    <div className={\`\${className}\`}>
      {Children.toArray(props.children)}
    </div>
  );
}

${name}.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ${name};
`;

  // test templete
  const basicTest = `/*
* Generated by ${process.env.USER}
* Created on ${new Date()}
* Awesome work!
*/

import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import renderer from 'react-test-renderer';

import ${name} from '../index';

/* global test:true expect:true */
test('${name} renders correctly', () => {
  const component = renderer.create(
    <${name}>Facebook</${name}>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
`;

  // style templete
  const basicStyle = `/*
* Generated by ${process.env.USER}
* Created on ${new Date()}
* Awesome work!
*/

.${lowercaseFirstLetter(name)} {

}`;


  // generate component
  fs.writeFile(`${dir}/index.js`, basicComponent, (err) => {
    if (err) {
      console.error('Error in generating component %s. Deleting files...', err);
      fs.rmdirSync(dir);
    } else {
      console.info('generated file index.js in %s.', dir);
    }
  });

  // generate style
  fs.writeFile(`${dir}/styles.css`, basicStyle, (err) => {
    if (err) {
      console.error('Error in generating style %s. Deleting files...', err);
      fs.rmdirSync(dir);
    } else {
      console.info('generated file styles.css in %s.', dir);
    }
  });

  // generate test
  fs.writeFile(`${dir}/tests/index.test.js`, basicTest, (err) => {
    if (err) {
      console.error('Error in generating tests %s. Deleting files...', err);
      fs.rmdirSync(dir);
    } else {
      console.info('generated file index.test.js in %s.', `${dir}/tests`);
    }
  });
}

module.exports = generateComponent;
