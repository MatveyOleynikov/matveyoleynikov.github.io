process.env.NODE_ENV = 'test'

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;


describe("pow", function() {

  it("возводит в n-ю степень", function() {
    assert.equal(2**3, 3);
  });

});