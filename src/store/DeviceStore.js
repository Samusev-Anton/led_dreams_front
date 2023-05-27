import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._device = [
      { id: 1, name: "phone1", price: 200, rating: 5 },
      { id: 2, name: "phone2", price: 200, rating: 5 },
    ];
    this._type = [
      { id: 1, name: "Frozen" },
      { id: 2, name: "TV" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Sony" },
    ];

    makeAutoObservable(this);
  }
  setBrands(brand) {
    this._brands = brand;
  }

  setType(type) {
    this._type = type;
  }

  setDevice(device) {
    this._device = device;
  }
  get device() {
    return this._device;
  }

  get types() {
    return this._type;
  }
  get brands() {
    return this._brands;
  }
}
