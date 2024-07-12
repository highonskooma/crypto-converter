import SDK from '@uphold/uphold-sdk-javascript';

const sdk = new SDK({
	baseUrl: 'https://api-sandbox.uphold.com',
  clientId: '53520d11d1a2890f6488b9fc71995e4e286da493',
  clientSecret: '3c5493ccd8ff4532e00160a0641b0958bd2a7496', 
});

export default sdk;
