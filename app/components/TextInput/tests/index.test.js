/*
* Generated by muaohua
* Created on Sun May 14 2017 18:26:38 GMT+0800 (+08)
* Awesome work!
*/

import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import renderer from 'react-test-renderer';

import TextInput from '../index';

/* global test:true expect:true */
test('TextInput renders correctly', () => {
  const component = renderer.create(
    <TextInput>Facebook</TextInput>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
