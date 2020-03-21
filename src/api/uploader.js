import axios from 'axios';
import of from 'await-of';

const fileApiURL = 'http://localhost:9000/.netlify/functions/upload'; //process.env.REACT_APP_FILE_UPLOAD_URL;

const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

class UploaderClient {
  constructor({ baseURL, headers }) {
    this.axios = axios.create({
      baseURL,
      headers,
    });
  }

  async uploadImage({ entityType, entityId, relationType, file }) {
    const formData = new FormData();
    formData.append('entityType', entityType);
    formData.append('relation', relationType);
    formData.append('file', await toBase64(file));
    const [resp, err] = await of(this.axios.post('', formData, this.headers));
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
    'Content-Type': 'multipart/form-data',
  },
});
