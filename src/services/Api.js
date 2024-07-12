import axios from 'axios';

export async function getAccessTokenFromServer(code, sdk) {
	try {
		const response = await axios.get(`https://localhost:5000/getAccessToken/${code}`);

		console.log('token', response.data.access_token);
		sdk.authorize(response.data.access_token);
		return response;
	} catch (error) {
    console.error(error);
  }
}

export async function getTickers(accessToken) {
	try {
		const response = await axios.request({
			method: "GET",
			url: `https://api.uphold.com/v0/ticker/USD`,
			headers: {
        Authorization: `Bearer ${accessToken}`,
				},
			});
		return response.data;
	} catch (error) {
		console.error('Error fetching USD ticker:', error);
	}
}


const auth = btoa("53520d11d1a2890f6488b9fc71995e4e286da493:3c5493ccd8ff4532e00160a0641b0958bd2a7496");

export async function oauthTransaction() {
	try {
		const response = await axios.get(`https://localhost:5000/`);
		return response.data;
	} catch (error) {
		console.error('Error fetching oauth transaction code:', error);
	}
}


function formatError(error) {
  const responseStatus = `${error.response.status} (${error.response.statusText})`;

  console.log(
    `Request failed with HTTP status code ${responseStatus}`,
    JSON.stringify({
      url: error.config.url,
      response: error.response.data
    }, null, 2)
  );

  throw error;
} 

export async function getAccessToken(code) {
  try {
    const response = await axios.request({
      method: "POST",
      url: `https://api-sandbox.uphold.com/oauth2/token`,
      data: `code=${code}&grant_type=authorization_code`,
      headers: {
        Authorization: `Basic ${auth}`,
        "content-type": "application/x-www-form-urlencoded",
      },
    });

    return response.data;
  } catch (error) {
    formatError(error);
  }
}

// export async function getTickers(currency) {
// 	try {
// 		const response = await axios.get(`http://localhost:5000/api/ticker/${currency}`);
// 		return response.data;
// 	} catch (error) {
// 		console.error('Error fetching USD ticker:', error);
// 	}
// }
