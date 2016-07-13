import addField from './utils';

// do not truncate diffs
chai.config.truncateThreshold = 0;

describe('Test addField', () => {
  it('add empty field', () => {
    const schema = {
      properties: {
        one: { one: 'foo' }
      }
    };
    addField(schema, {});
    const expected = {
      properties: {
        one: { one: 'foo' }
      }
    };
    // console.log(JSON.stringify(expected, null, 2));
    // console.log(JSON.stringify(schema, null, 2));
    expect(expected).to.deep.equal(schema);
  });

  it('add simple field', () => {
    const schema = {
      properties: {
        one: { one: 'foo' }
      }
    };
    addField(schema, { two: { two: 'bar' } });
    const expected = {
      properties: {
        one: { one: 'foo' },
        two: { two: 'bar' }
      }
    };
    // console.log(JSON.stringify(expected, null, 2));
    // console.log(JSON.stringify(schema, null, 2));
    expect(expected).to.deep.equal(schema);
  });
});
