import { defineStore } from "pinia";
import { DesignItem, NewDesign } from "../types";
import { mockDesign } from '../mock'

type State = {
  list: DesignItem[],
  currentDesign: DesignItem | null,
  isLoading: boolean,
}

export const useDesingsStore = defineStore('desings', {
  state: (): State => ({
    list: [],
    currentDesign: null,
    isLoading: false,
  }),
  getters: {

  },
  actions: {
    async getDesign(id: number) {
      try {
        await this.getInitDesigns()
        const design = this.list.find((item) => item.id === id);
        if (design) {
          this.currentDesign = design;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getInitDesigns() {
      if (!this.list.length) {
        this.isLoading = true;
        try {
          const resp = await mockDesign.getList();
          this.list = resp;
        } catch (error) {
          console.error(error);
        } finally {
          this.isLoading = false;
        }
      }
    },
    updateDesign(design: DesignItem) {
      try {
        const index = this.list.findIndex(item => design.id == item.id);

        this.list[index] = { ...this.list[index], ...design }
        console.log('ww', this.list[index]);

      } catch (error) {
        console.error(error);
      }
    },
    addNewDesign(design: NewDesign) {
      const id = Math.max(...this.list.map(item => item.id)) + 1

      this.list = [...this.list, { ...design, id }];
    },
    deleteDesign(id: number) {
      this.list = this.list.filter(item => item.id !== id)
    },
    resetCurrent() {
      this.currentDesign = null
    }
  }
})