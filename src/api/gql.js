import { format } from 'date-fns';

/**
 * GraphQL template builder
 */
function gql(templates, ...vars) {
  if (templates.length !== vars.length + 1) {
    throw new Error(`Unexpected lengths of args received for gql template parser`);
  }
  return vars.reduce((accum, curr, currIndex) => {
    return `${accum}${toGraphqlValue(curr)}${templates[currIndex+1]}`;
  }, templates[0]);
}

function toGraphqlValue(val) {
  if (typeof val === 'symbol') {
    throw new Error(`Symbol cannot be passed as gql template argument`);
  }

  if (val && typeof val === 'object') {

    if (val instanceof Date) {
      return `"${format(val, 'yyyy-MM-dd HH:mm:ss')}"`;
    }

    if (isFinite(val.lat) && isFinite(val.lng)) {
      return `"(${val.lat},${val.lng})"`;
    }

    throw new Error(`Object cannot be passed as gql template argument`);
  }

  if (typeof val === 'string') {
    return `"${val}"`;
  }

  return val;
}

export default gql;
