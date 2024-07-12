import { useMemo } from 'react';
import SDK from '@uphold/uphold-sdk-javascript';

export const useUpholdSDK = () => {
  const sdk = useMemo(() => {
    return new SDK({
      baseUrl: 'http://api-sandbox.uphold.com',
      clientId: 'foo',
      clientSecret: 'bar'
    });
  }, []); // Empty dependency array to ensure this is created once

  return sdk;
};

export default useUpholdSDK;
