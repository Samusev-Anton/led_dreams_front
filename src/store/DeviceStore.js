import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._device = [];
    this._type = [];
    this._brands = [];
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
