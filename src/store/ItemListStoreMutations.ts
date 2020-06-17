
type updateItemParams = {
  id: number;
  data: object;
}

export default {
  removeItem(state: any, id: number) {
    const index = state.items.findIndex((e: any) => e.id === id);
    state.items.splice(index, 1);
  },
  updateItem(state: any, { id, data }: updateItemParams) {
    const index = state.items.findIndex((e: any) => e.id === id);
    Object.assign(state.items[index], data);
  },
  addItem(state: any, item: any) {
    const id = state.items[state.items.length - 1].id + 1;
    state.items.push({ ...item, id });
  },
};
