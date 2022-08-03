import AppConstants from '../Constants/AppConstants';
import Pod from '../Models/Pod';

class PodsClient {
  static async getAllPods () {
    const url = new URL('/api/v1/pods', AppConstants.BASE_API_URL);
    const pods = await fetch(url)
      .then(resp => resp.json())
      .then(resp => resp?.items ?? []);

    return pods.map(raw => new Pod(raw));
  }
}

export default PodsClient;
