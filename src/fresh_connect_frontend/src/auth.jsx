import { AuthClient } from '@dfinity/auth-client';

export const initAuthClient = async () => {
  const authClient = await AuthClient.create();
  if (await authClient.isAuthenticated()) {
    handleAuthenticated(authClient);
  } else {
    await authClient.login({
      identityProvider: 'https://identity.ic0.app',
      onSuccess: () => {
        handleAuthenticated(authClient);
      },
    });
  }
};

const handleAuthenticated = async (authClient) => {
  const identity = authClient.getIdentity();
  // Now you can use this identity with the agent
};
