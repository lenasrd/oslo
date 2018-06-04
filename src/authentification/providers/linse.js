import IProvider from 'react-simple-auth'


const clientid = "eFhUKYi4yCwiocI6weXLiJBJikRbDCUr3RYpUXOH";
class LinseProvider implements IProvider{
    buildAuthorizeUrl() {return 'http://localhost:8000/o/authorize?state=random_state_string&response_type=code&client_id=' + clientid;
    }

    extractError(redirectUrl){
        return new Error("Error during login")
    }

    getAccessToken(session, resourceId) {
        return session.accessToken
    }

    validateSession(session){
        return true
    }

    getSignOutUrl(redirectUrl) {
        return `https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=${encodeURIComponent(redirectUrl)}`
    }
}

const linseProvider = new LinseProvider();

export default linseProvider;