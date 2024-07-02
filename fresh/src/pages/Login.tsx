import React, { useCallback, useEffect, useState } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import Logo from '../assets/logo.jpeg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage: React.FC = () => {
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);

  useEffect(() => {
    AuthClient.create().then(setAuthClient);
  }, []);

  const handleInternetIdentityLogin = useCallback(async () => {
    if (!authClient) return;

    const isAuthenticated = await authClient.isAuthenticated();

    if (isAuthenticated) {
      // User is already authenticated, redirect to the main app
      window.location.href = '/';  // Replace with your app's main page
    } else {
      // Start the login process
      authClient.login({
        identityProvider: 'https://identity.ic0.app',
        onSuccess: () => {
          // Redirect to the main app after successful authentication
          window.location.href = '/';  // Replace with your app's main page
        },
        onError: (error) => {
          console.error('Authentication error:', error);
          // Handle authentication error (e.g., show an error message to the user)
        },
      });
    }
  }, [authClient]);

  return (
    <div className='login-page min-h-screen flex flex-col'>
      <Header />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-65 w-auto" src={Logo} alt="Fresh Farm Connect Logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div>
            <button
              onClick={handleInternetIdentityLogin}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Connect with Internet Identity
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;