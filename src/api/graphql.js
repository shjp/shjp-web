import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

function toGraphqlValue(val) {
  if (typeof val === 'object') {
    throw new Error(`Object cannot be passed as gql template argument`);
  }

  if (typeof val === 'symbol') {
    throw new Error(`Symbol cannot be passed as gql template argument`);
  }

  if (typeof val === 'string') {
    return `"${val}"`;
  }

  return val;
}

/**
 * GraphQL template builder
 */
export const gql = (templates, ...vars) => {
  if (templates.length !== vars.length + 1) {
    throw new Error(`Unexpected lengths of args received for gql template parser`);
  }
  return vars.reduce((accum, curr, currIndex) => {
    return `${accum}${toGraphqlValue(curr)}${templates[currIndex+1]}`;
  }, templates[0]);
}

class GraphQLClient {
  constructor({ baseURL, headers }) {
    this.axios = axios.create({
      baseURL,
      headers,
    });
  }

  query(query) {
    return this.axios.get('/graphql', {
      params: {
        query: `query { ${query} }`
      }
    });
  }

  mutate(mutation) {
    return this.axios.post('/graphql', {
      query: mutation,
    });
  }
}

/**
 * GraphQL Client
 */
export const client = new GraphQLClient({
  baseURL: apiURL,
  headers: {},
});
