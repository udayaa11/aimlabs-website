import { defineStore } from "pinia";

export const useAfStore = defineStore("af", {
  state: () => ({
    lastRole: null as string | null,
    lastAccelerate: null as string | null,
    lastAbout: null as string | null,

    // dropdown state
    isDropdownOpen: false as boolean,
    activeDropdown: null as string | null, // e.g. "about", "accelerate", "role"
  }),

  actions: {
    setLastRole(role: string) {
      this.lastRole = role;
    },

    setLastAccelerate(value: string) {
      this.lastAccelerate = value;
    },

    setLastAbout(value: string) {
      this.lastAbout = value;
    },

    // dropdown actions
    openDropdown(name: string) {
      this.activeDropdown = name;
      this.isDropdownOpen = true;
    },

    closeDropdown() {
      this.activeDropdown = null;
      this.isDropdownOpen = false;
    },

    toggleDropdown(name: string) {
      if (this.activeDropdown === name) {
        this.closeDropdown();
      } else {
        this.openDropdown(name);
      }
    }
  },
});
