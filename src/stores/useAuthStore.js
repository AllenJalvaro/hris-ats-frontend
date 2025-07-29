import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      hydrated: false, 
      systemUserId: null,
      systemUserEmail: null,
      servicePermissions: [],
      accessPermissions: [],
      isLoggedIn: false,
      user: null, 

      setAuth: ({ systemUserId, systemUserEmail, servicePermissions, accessPermissions, user }) =>
        set({
          systemUserId,
          systemUserEmail,
          servicePermissions,
          accessPermissions,
          user: user || null,
          isLoggedIn: Boolean(systemUserId),
        }),

      logout: () => {
        localStorage.removeItem("accessToken");
        set({
          systemUserId: null,
          systemUserEmail: null,
          servicePermissions: [],
          accessPermissions: [],
           user: null, 
          isLoggedIn: false,
        });
      },
    }),
    {
      name: 'auth-storage',
      onRehydrateStorage: () => (state) => {
        state.hydrated = true; 
      },
    }
  )
);
