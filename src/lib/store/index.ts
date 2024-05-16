import { create } from "zustand";

type User = {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  id: string;
  companyId?: string;
  companyName?: string;
  accessToken: string;
  colleagues?: string[];
};

type UserStore = {
  user: User;
  setUser: (user: User) => void;
  clearUser: () => void;
};

const useUserStore = create<UserStore>((set) => ({
  user: {} as User,
  setUser: (user: User) => set({ user }),
  clearUser: () => set({ user: {} as User }),
}));

export default useUserStore;
