import _ from 'lodash';

// add field to existing json schema
const addField = (schema, field) => {
  _.merge(schema, { properties: field });
};

export default addField;
