import { create } from "zustand";

const useUserStore = create((set, get) => ({
  user: null,
  setUser: (user) => set({ user }),

  hasFeature: (featurePath) => {
    const features = get().user?.featureAccess || [];
    
    return features.includes(featurePath);
  },

  hasService: (service) => {
    const services = get().user?.serviceAccess || [];
    return services.includes(service);
  },
}));

export default useUserStore;
