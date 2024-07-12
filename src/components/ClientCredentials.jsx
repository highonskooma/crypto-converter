import React, { useState } from 'react';
import { getAccessToken } from '../services/Api.js';

const ClientCredentials = () => {
	const [token, setToken] = useState(getAccessToken());
	return (
		<div>
			<h2>Client Credentials</h2>
			<p>Client credentials are used to authenticate the client to the server.</p>
		</div>
	);
};

export default ClientCredentials;
