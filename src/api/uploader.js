import axios from 'axios';
import of from 'await-of';

const fileApiURL = process.env.REACT_APP_FILE_UPLOAD_URL;

class UploaderClient {
  constructor({ baseURL, headers }) {
    this.axios = axios.create({
      baseURL,
      headers,
    });
  }

  async uploadImage({ entityType, relationType, file }) {
    const formData = new FormData();
    formData.append('entity', entityType);
    formData.append('relation', relationType);
    formData.append('image', file);
    const [resp, err] = await of(this.axios.post('upload', formData, this.headers));
    if (err || !resp || !resp.data) {
      console.warn('Failed image upload | error:', err);
      return [null, err];
    }
    return [resp.data, null];
  }
}

export default new UploaderClient({
  baseURL: fileApiURL,
  headers: {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  },
});
