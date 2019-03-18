export default new class {
  store = {cart_id: '2467899889'};
  setItem = (key, val) => (this.store[key] = val);
  getItem = key => this.store[key];
  removeItem = key => {
    delete this.store[key];
  };
  clear = () => (this.store = {});
} ();
