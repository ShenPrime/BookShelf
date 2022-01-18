import { Box } from '@chakra-ui/react';
import { GoogleLogin } from 'react-google-login';

const clinetId =
  '527899560694-4gej6ggaaaqqatliq4npp8npp2tcp2le.apps.googleusercontent.com';

export const Login = () => {
  const onSuccess = res => {
    console.log('[Login Success] currentUser:', res.profileObj);
  };

  const onFailure = res => {
    console.log('[Login failed] res:', res);
  };

  return (
    <Box>
      <GoogleLogin
        clinetId={clinetId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </Box>
  );
};
