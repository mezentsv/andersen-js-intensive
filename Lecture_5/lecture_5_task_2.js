class Car {
  #carError = new Error("Invalid car parameters");

  #checkStrings(value) {
    if (typeof value === "string" && value.length > 0 && value.length <= 50) {
      return value;
    } else throw this.#carError;
  }

  #checkYearOfManufacturing(value) {
    if (
      typeof value === "number" &&
      !isNaN(value) &&
      isFinite(value) &&
      value >= 1900 &&
      value <= 2021
    ) {
      return value;
    } else throw this.#carError;
  }

  #checkMaxSpeed(value) {
    if (
      typeof value === "number" &&
      !isNaN(value) &&
      isFinite(value) &&
      value >= 100 &&
      value <= 300
    ) {
      return value;
    } else throw this.#carError;
  }

  #checkMaxFuelVolume(value) {
    if (
      typeof value === "number" &&
      !isNaN(value) &&
      isFinite(value) &&
      value >= 10 &&
      value <= 50
    ) {
      return value;
    } else throw this.#carError;
  }

  #checkFuelConsumption(value) {
    if (typeof value === "number" && !isNaN(value) && isFinite(value) && value > 0) {
      return value;
    } else throw this.#carError;
  }

  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;

  constructor(
    brand,
    model,
    yearOfManufacturing,
    maxSpeed,
    maxFuelVolume,
    fuelConsumption
  ) {
    this.#brand = this.#checkStrings(brand);
    this.#model = this.#checkStrings(model);
    this.#yearOfManufacturing = this.#checkYearOfManufacturing(
      yearOfManufacturing
    );
    this.#maxSpeed = this.#checkMaxSpeed(maxSpeed);
    this.#maxFuelVolume = this.#checkMaxFuelVolume(maxFuelVolume);
    this.#fuelConsumption = this.#checkFuelConsumption(fuelConsumption);
  }

  set brand(value) {
    this.#brand = this.#checkStrings(value);
  }
  get brand() {
    return this.#brand;
  }

  set model(value) {
    this.#model = this.#checkStrings(value);
  }
  get model() {
    return this.#model;
  }

  set yearOfManufacturing(value) {
    this.#yearOfManufacturing = this.#checkYearOfManufacturing(value);
  }
  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(value) {
    this.#maxSpeed = this.#checkMaxSpeed(value);
  }
  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxFuelVolume(value) {
    this.#maxFuelVolume = this.#checkMaxFuelVolume(value);
  }
  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set fuelConsumption(value) {
    this.#fuelConsumption = this.#checkFuelConsumption(value);
  }
  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error("Машина уже заведена");
    } else this.#isStarted = true;
  }

  shutDownEngine() {
    if (this.#isStarted) {
      this.#isStarted = false;
    } else throw new Error("Машина ещё не заведена");
  }

  fillUpGasTank(value) {
    if (typeof value !== "number" || isNaN(value) || !isFinite(value)  || value <= 0) {
      throw new Error("Неверное количество топлива для заправки");
    }

    if (this.#currentFuelVolume + value > this.maxFuelVolume) {
      throw new Error("Топливный бак переполнен");
    } else {
      this.#currentFuelVolume += value;
    }
  }

  drive(speed, time) {
    if (typeof speed !== "number" || isNaN(speed) || !isFinite(speed) || speed <= 0) {
      throw new Error("Неверная скорость");
    }
    if (typeof time !== "number" || isNaN(time) || !isFinite(time) || time <= 0) {
      throw new Error("Неверное количество часов");
    }
    if (speed > this.#maxSpeed) {
      throw new Error("Машина не может ехать так быстро");
    }
    if (!this.#isStarted) {
      throw new Error("Машина должна быть заведена, чтобы ехать");
    }
    let distance = speed * time,
      consumedFuel = distance * (this.#fuelConsumption / 100);
    if (consumedFuel > this.#currentFuelVolume) {
      throw new Error("Недостаточно топлива");
    }
    this.#currentFuelVolume -= consumedFuel;
    this.#mileage += distance;
  }
}

module.exports = Car;