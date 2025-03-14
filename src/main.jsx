import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThirdwebProvider } from 'thirdweb/react';
import { createThirdwebClient } from 'thirdweb';
import { ethereum } from 'thirdweb/chains';
import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";
import App from './App.jsx';

// Initialize the Thirdweb client
const client = createThirdwebClient({
  clientId: "dbfc8575f9b92b2e3385727d61d91177", // Replace with your actual client ID
});

// Define supported wallets
const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "farcaster",
        "email",
        "x",
        "passkey",
        "apple",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.zerion.wallet"),
  createWallet("com.trustwallet.app"),
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThirdwebProvider client={client} supportedChains={[ethereum]} wallets={wallets}>
      <App />
    </ThirdwebProvider>
  </StrictMode>
); 