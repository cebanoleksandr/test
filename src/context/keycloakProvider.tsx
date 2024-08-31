// // KeycloakProvider.tsx
// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import Keycloak from 'keycloak-js';
// import keycloakConfig from '../utils/keycloack';

// interface IKeycloakProvider {
//   children: ReactNode;
// }

// interface IKeycloakContext {
//   keycloak: Keycloak | null;
//   authenticated: boolean | undefined;
// }

// const KeycloakContext = createContext<IKeycloakContext | undefined>(undefined);

// export const KeycloakProvider: React.FC<IKeycloakProvider> = ({ children }) => {
//   const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
//   const [authenticated, setAuthenticated] = useState<boolean | undefined>(false);

//   useEffect(() => {
//     const initKeycloak = async () => {
//       const keycloakInstance = new Keycloak(keycloakConfig);
//       try {
//         await keycloakInstance.init({ onLoad: 'login-required' });
//         setKeycloak(keycloakInstance);
//         setAuthenticated(keycloakInstance.authenticated);
//       } catch (error) {
//         console.error('Failed to initialize Keycloak', error);
//         setAuthenticated(false);
//       }
//     };

//     initKeycloak();
//   }, []);

//   return (
//     <KeycloakContext.Provider value={{ keycloak, authenticated }}>
//       {keycloak && authenticated !== undefined ? children : <div>Loading...</div>}
//     </KeycloakContext.Provider>
//   );
// };

// export const useKeycloak = () => {
//   const context = useContext(KeycloakContext);
//   if (context === undefined) {
//     throw new Error('useKeycloak must be used within a KeycloakProvider');
//   }
//   return context;
// };
