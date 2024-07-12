import SDK, { Client } from '@uphold/uphold-sdk-javascript';

class AlternativeClient extends Client {
  request(url, method, body, customHeaders = {}) {
    // Make your own implementation, but make sure it returns a Promise that resolves
    // or rejects an object with the schema demonstrated at the bottom of this section.
		
  }
}

export default class TestClient extends SDK {
  constructor() {
    super(...arguments);

    this.client = new AlternativeClient();
  }
}
