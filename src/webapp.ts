import authenticate from './authenticate'
import { AuthConfig } from './@types/authenticate'
import Webapp from './@types/webapp'

const webapp: Webapp = async (
	clientId,
	clientSecret,
	callbackUrl,
	endpoint,
	scopes,
	serverSide,
	code
) => {
	const credentials: AuthConfig = {
		clientId,
		clientSecret,
		accessTokenUri: `${endpoint}/oauth/token`,
		authorizationUri: `${endpoint}/oauth/authorize`,
		redirectUri: callbackUrl
	}
	return await authenticate(
		'authorizationCode',
		credentials,
		scopes,
		serverSide,
		code
	)
}

export default webapp