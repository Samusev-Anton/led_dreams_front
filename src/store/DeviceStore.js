import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._device = [
      { id: 1, name: "phone1", price: 200, rating: 5 },
      { id: 2, name: "phone2", price: 200, rating: 5 },
      { id: 3, name: "phone3", price: 200, rating: 5 },
      { id: 4, name: "phone4", price: 200, rating: 5 },
      { id: 5, name: "phone5", price: 200, rating: 5 },
      { id: 6, name: "phone6", price: 200, rating: 5 },
    ];
    this._type = [
      { id: 1, name: "Frozen" },
      { id: 2, name: "TV" },
      { id: 3, name: "TV" },
      { id: 4, name: "TV" },
      { id: 5, name: "TV" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Sony" },
      { id: 3, name: "Sony" },
      { id: 4, name: "Sony" },
      { id: 5, name: "Sony" },
    ];
    this._selectedTypes = {};
    this._selectedBrand = {};

    makeAutoObservable(this);
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  setSelectedTypes(type) {
    this._selectedTypes = type;
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
  get selectedTypes() {
    return this._selectedTypes;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
