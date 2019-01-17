'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
describe('camelCase function test', () => {
  it('should return camelCase', () => {
    var result = index.camelCase('camel', 'case');
    expect(result).to.equal('camelCase');
  });
  it('should return camelCase', () => {
    var result = index.camelCase('camel', undefined, 'case', null);
    expect(result).to.equal('camelCase');
  });
  it('should return camel', () => {
    var result = index.camelCase('Camel');
    expect(result).to.equal('camel');
  });
});