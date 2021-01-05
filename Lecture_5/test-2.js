const expect = require('chai').expect;

const Car = require('./lecture_5_task_2');

// Constants
const CAR_BRAND = 'Honda';
const CAR_MODEL = 'Civic';
const CAR_YEAR_OF_MANUFACTURING = 2010;
const CAR_MAX_SPEED = 214;
const CAR_MAX_FUEL_VOLUME = 18;
const CAR_FUEL_CONSUMPTION = 1.6;

describe('Car', () => {
    let car = null;

    beforeEach(() => {
        car = new Car(
            CAR_BRAND,
            CAR_MODEL,
            CAR_YEAR_OF_MANUFACTURING,
            CAR_MAX_SPEED,
            CAR_MAX_FUEL_VOLUME,
            CAR_FUEL_CONSUMPTION,
        );
    });

    describe('Should create valid car object', () => {
        it('Brand is valid', () => expect(car.brand).to.equal(CAR_BRAND));
        it('Model is valid', () => expect(car.model).to.equal(CAR_MODEL));
        it('Year of manufacturing is valid', () => expect(car.yearOfManufacturing).to.equal(CAR_YEAR_OF_MANUFACTURING));
        it('Max speed is valid', () => expect(car.maxSpeed).to.equal(CAR_MAX_SPEED));
        it('Max fuel volume is valid', () => expect(car.maxFuelVolume).to.equal(CAR_MAX_FUEL_VOLUME));
        it('Fuel consumption is valid', () => expect(car.fuelConsumption).to.equal(CAR_FUEL_CONSUMPTION));
        it('Current fuel volume is valid', () => expect(car.currentFuelVolume).to.equal(0));
        it('Is started is valid', () => expect(car.isStarted).to.equal(false));
        it('Mileage is valid', () => expect(car.mileage).to.equal(0));
    });

    describe('Should not create invalid car object', () => {
        describe('Brand is invalid', () => {
            it('Is null', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        null,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is undefined', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        undefined,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is empty string', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        '',
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is too long', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        'Foooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooord',
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is number', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        100,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is boolean', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        true,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is object', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        {},
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });
        });

        describe('Model is invalid', () => {
            it('Is null', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        null,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is undefined', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        undefined,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is empty string', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        '',
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is too long', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        'Foooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooocus',
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is number', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        100,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is boolean', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        true,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is object', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        {},
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });
        });

        describe('Year of manufacturing is invalid', () => {
            it('Is null', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        null,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is undefined', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        undefined,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is empty string', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        '',
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is too big', () => {
                let newCar = null;
                const tooBigYear = (new Date()).getFullYear() + 100
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        tooBigYear,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is boolean', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        true,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is object', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        {},
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });
        });

        describe('Max speed is invalid', () => {
            it('Is null', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        null,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is undefined', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        undefined,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is string', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        'test',
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is too big', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        1234,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is too small', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        15,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is boolean', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        true,
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is object', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        {},
                        CAR_MAX_FUEL_VOLUME,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });
        });

        describe('Max fuel volume is invalid', () => {
            it('Is null', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        null,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is undefined', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        undefined,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is string', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        'test',
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is too big', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        90,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is too small', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        2.2,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is boolean', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        true,
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is object', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        {},
                        CAR_FUEL_CONSUMPTION,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });
        });

        describe('Fuel consumption is invalid', () => {
            it('Is null', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        null,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is undefined', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        undefined,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is string', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        'test',
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is boolean', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        true,
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });

            it('Is object', () => {
                let newCar = null;
    
                try {
                    newCar = new Car(
                        CAR_BRAND,
                        CAR_MODEL,
                        CAR_YEAR_OF_MANUFACTURING,
                        CAR_MAX_SPEED,
                        CAR_MAX_FUEL_VOLUME,
                        {},
                    );
                } catch (err) {}
    
                expect(newCar).is.not.ok;
            });
        });
    });

    describe('Should allow to change brand value safely', () => {
        it('Valid brand value could be set', () => {
            expect(car.brand).to.equal(CAR_BRAND);

            car.brand = 'Ford';

            expect(car.brand).to.equal('Ford');
        });

        it('Empty brand value could not be set', () => {
            expect(car.brand).to.equal(CAR_BRAND);

            try {
                car.brand = '';
            } catch (err) {}

            expect(car.brand).to.equal(CAR_BRAND);
        });

        it('Too long brand value could not be set', () => {
            expect(car.brand).to.equal(CAR_BRAND);

            try {
                car.brand = 'Foooooooooooooooooooooooooooooooooooooooooooooooooooooooooord';
            } catch (err) {}

            expect(car.brand).to.equal(CAR_BRAND);
        });

        it('Brand value should not allow to set numbers', () => {
            expect(car.brand).to.equal(CAR_BRAND);

            try {
                car.brand = 123;
            } catch (err) {}

            expect(car.brand).to.equal(CAR_BRAND);
        });
    });

    describe('Should allow to change model value safely', () => {
        it('Valid model value could be set', () => {
            expect(car.model).to.equal(CAR_MODEL);

            car.model = 'Focus';

            expect(car.model).to.equal('Focus');
        });

        it('Empty model value could not be set', () => {
            expect(car.model).to.equal(CAR_MODEL);

            try {
                car.model = '';
            } catch (err) {}

            expect(car.model).to.equal(CAR_MODEL);
        });

        it('Too long model value could not be set', () => {
            expect(car.model).to.equal(CAR_MODEL);

            try {
                car.model = 'Foooooooooooooooooooooooooooooooooooooooooooooooooooooooooocus';
            } catch (err) {}

            expect(car.model).to.equal(CAR_MODEL);
        });

        it('Model value should not allow to set numbers', () => {
            expect(car.model).to.equal(CAR_MODEL);

            try {
                car.model = 123;
            } catch (err) {}

            expect(car.model).to.equal(CAR_MODEL);
        });
    });

    describe('Should allow to change year of manufacturing value safely', () => {
        let currentDate = null;
        let currentYear = null;

        beforeEach(() => {
            currentDate = new Date();
            currentYear = currentDate.getFullYear();
        });

        it('Valid year of manufacturing value could be set', () => {
            expect(car.yearOfManufacturing).to.equal(CAR_YEAR_OF_MANUFACTURING);

            car.yearOfManufacturing = 1980;

            expect(car.yearOfManufacturing).to.equal(1980);
        });

        it('Year of manufacturing less than 1900 could not be set', () => {
            expect(car.yearOfManufacturing).to.equal(CAR_YEAR_OF_MANUFACTURING);

            try {
                car.yearOfManufacturing = 100;
            } catch (err) {}

            expect(car.yearOfManufacturing).to.equal(CAR_YEAR_OF_MANUFACTURING);
        });

        it('Year of manufacturing equal to current year could be set', () => {
            expect(car.yearOfManufacturing).to.equal(CAR_YEAR_OF_MANUFACTURING);

            car.yearOfManufacturing = currentYear;

            expect(car.yearOfManufacturing).to.equal(currentYear);
        });

        it('Year of manufacturing more than current year could not be set', () => {
            expect(car.yearOfManufacturing).to.equal(CAR_YEAR_OF_MANUFACTURING);

            try {
                car.yearOfManufacturing = currentYear + 100;
            } catch (err) {}

            expect(car.yearOfManufacturing).to.equal(CAR_YEAR_OF_MANUFACTURING);
        });

        it('Year of manufacturing should not allow to set strings', () => {
            expect(car.yearOfManufacturing).to.equal(CAR_YEAR_OF_MANUFACTURING);

            try {
                car.yearOfManufacturing = '2001';
            } catch (err) {}

            expect(car.yearOfManufacturing).to.equal(CAR_YEAR_OF_MANUFACTURING);
        });
    });

    describe('Should allow to change max speed value safely', () => {
        it('Valid max speed value could be set', () => {
            expect(car.maxSpeed).to.equal(CAR_MAX_SPEED);

            car.maxSpeed = 123;

            expect(car.maxSpeed).to.equal(123);
        });

        it('Max speed value less than 100 could not be set', () => {
            expect(car.maxSpeed).to.equal(CAR_MAX_SPEED);

            try {
                car.maxSpeed = 10;
            } catch (err) {}

            expect(car.maxSpeed).to.equal(CAR_MAX_SPEED);
        });

        it('Max speed value more than 300 could not be set', () => {
            expect(car.maxSpeed).to.equal(CAR_MAX_SPEED);

            try {
                car.maxSpeed = 9999;
            } catch (err) {}

            expect(car.maxSpeed).to.equal(CAR_MAX_SPEED);
        });

        it('Max speed value should not allow to set strings', () => {
            expect(car.maxSpeed).to.equal(CAR_MAX_SPEED);

            try {
                car.maxSpeed = '211';
            } catch (err) {}

            expect(car.maxSpeed).to.equal(CAR_MAX_SPEED);
        });
    });

    describe('Should allow to change max fuel volume value safely', () => {
        it('Valid max fuel volume value could be set', () => {
            expect(car.maxFuelVolume).to.equal(CAR_MAX_FUEL_VOLUME);

            car.maxFuelVolume = 24;

            expect(car.maxFuelVolume).to.equal(24);
        });

        it('Max fuel volume value less than 10 could not be set', () => {
            expect(car.maxFuelVolume).to.equal(CAR_MAX_FUEL_VOLUME);

            try {
                car.maxFuelVolume = -10;
            } catch (err) {}

            expect(car.maxFuelVolume).to.equal(CAR_MAX_FUEL_VOLUME);
        });

        it('Max fuel volume value more than 50 could not be set', () => {
            expect(car.maxFuelVolume).to.equal(CAR_MAX_FUEL_VOLUME);

            try {
                car.maxFuelVolume = 101;
            } catch (err) {}

            expect(car.maxFuelVolume).to.equal(CAR_MAX_FUEL_VOLUME);
        });

        it('Max fuel volume value should not allow to set strings', () => {
            expect(car.maxFuelVolume).to.equal(CAR_MAX_FUEL_VOLUME);

            try {
                car.maxFuelVolume = '14';
            } catch (err) {}

            expect(car.maxFuelVolume).to.equal(CAR_MAX_FUEL_VOLUME);
        });
    });

    describe('Should allow to change fuel consumption value safely', () => {
        it('Valid fuel consumption value could be set', () => {
            expect(car.fuelConsumption).to.equal(CAR_FUEL_CONSUMPTION);

            car.fuelConsumption = 1.4;

            expect(car.fuelConsumption).to.equal(1.4);
        });

        it('Fuel consumption value should not allow to set strings', () => {
            expect(car.fuelConsumption).to.equal(CAR_FUEL_CONSUMPTION);

            try {
                car.fuelConsumption = '1.2';
            } catch (err) {}

            expect(car.fuelConsumption).to.equal(CAR_FUEL_CONSUMPTION);
        });
    });

    describe('Should allow to change current fuel volume value programmatically only', () => {
        it('Current fuel volume could not be manually/externally changed', () => {
            expect(car.currentFuelVolume).to.equal(0);

            try {
                car.currentFuelVolume = 12;
            } catch(err) {}

            expect(car.currentFuelVolume).to.equal(0);
        });

        it('Current fuel volume could be programmatically changed', () => {
            expect(car.currentFuelVolume).to.equal(0);

            car.fillUpGasTank(3);

            expect(car.currentFuelVolume).to.equal(3);

            car.fillUpGasTank(5);

            expect(car.currentFuelVolume).to.equal(8);
        });
    });

    describe('Should allow to change is started state programmatically only', () => {
        it('Is started state could not be manually/externally changed', () => {
            expect(car.isStarted).to.equal(false);

            try {
                car.isStarted = true;
            } catch(err) {}

            expect(car.isStarted).to.equal(false);
        });

        it('Is started state could be programmatically changed', () => {
            expect(car.isStarted).to.equal(false);

            car.start();

            expect(car.isStarted).to.equal(true);
        });
    });

    describe('Should allow to change mileage value programmatically only', () => {
        it('Mileage value could not be manually/externally changed', () => {
            expect(car.mileage).to.equal(0);

            try {
                car.mileage = 2110;
            } catch(err) {}

            expect(car.mileage).to.equal(0);
        });
    });

    describe('Should allow to start/shut down itself', () => {
        it('Should be started by calling start() method with no issues', () => {
            expect(car.isStarted).to.equal(false);

            car.start();

            expect(car.isStarted).to.equal(true);
        });

        it('Should be shutted down by calling shutDownEngine() method with no issues', () => {
            expect(car.isStarted).to.equal(false);

            car.start();
            car.shutDownEngine();

            expect(car.isStarted).to.equal(false);
        });

        it('Should throw an error when there is a try to start the car twice', () => {
            expect(car.isStarted).to.equal(false);

            car.start();

            try {
                car.start();
            } catch (err) {
                if (typeof(err) === 'object' && err.message) {
                    expect(err.message).to.equal('Машина уже заведена');
                } else {
                    expect(err).to.equal('Машина уже заведена');
                }
            }

            expect(car.isStarted).to.equal(true);
        });

        it('Should throw an error when there is a try to start the car which is started', () => {
            expect(car.isStarted).to.equal(false);

            car.start();
            car.shutDownEngine();
            car.start();

            try {
                car.start();
            } catch (err) {
                if (typeof(err) === 'object' && err.message) {
                    expect(err.message).to.equal('Машина уже заведена');
                } else {
                    expect(err).to.equal('Машина уже заведена');
                }
            }

            expect(car.isStarted).to.equal(true);
        });

        it('Should throw an error when there is a try to shut down the car which is not started', () => {
            expect(car.isStarted).to.equal(false);

            try {
                car.shutDownEngine();
            } catch (err) {
                if (typeof(err) === 'object' && err.message) {
                    expect(err.message).to.equal('Машина ещё не заведена');
                } else {
                    expect(err).to.equal('Машина ещё не заведена');
                }
            }

            expect(car.isStarted).to.equal(false);
        });
    });

    describe('Should allow to drive the car', () => {
        it('Should normally drive the car when all conditions are good', () => {
            expect(car.currentFuelVolume).to.equal(0);
            expect(car.isStarted).to.equal(false);
            expect(car.mileage).to.equal(0);

            car.fillUpGasTank(10);
            car.start();

            expect(car.currentFuelVolume).to.equal(10);
            expect(car.isStarted).to.equal(true);

            car.drive(100, 5);

            expect(car.currentFuelVolume).to.equal(2);
            expect(car.mileage).to.equal(500);
        });


        it('Should normally drive the car several times when all conditions are good', () => {
            expect(car.currentFuelVolume).to.equal(0);
            expect(car.isStarted).to.equal(false);
            expect(car.mileage).to.equal(0);

            car.fillUpGasTank(18);
            car.start();

            expect(car.currentFuelVolume).to.equal(18);
            expect(car.isStarted).to.equal(true);

            car.drive(80, 4.2);

            expect(car.currentFuelVolume).to.greaterThan(12.5);
            expect(car.currentFuelVolume).to.lessThan(12.7);
            expect(car.mileage).to.equal(336);

            car.drive(100, 3);

            expect(car.currentFuelVolume).to.greaterThan(7.8);
            expect(car.currentFuelVolume).to.lessThan(7.9);
            expect(car.mileage).to.equal(636);

            car.shutDownEngine();

            expect(car.isStarted).to.equal(false);
        });

        describe('Should throw an error when speed value is incorrect', () => {
            it('Speed could not be null', () => {
                car.fillUpGasTank(15);
                car.start();

                const speed = null;

                try {
                    car.drive(speed, 3);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Неверная скорость');
                    } else {
                        expect(err).to.equal('Неверная скорость');
                    }
                }

                expect(car.currentFuelVolume).to.equal(15);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });

            it('Speed could not be undefined', () => {
                car.fillUpGasTank(15);
                car.start();

                let speed;

                try {
                    car.drive(speed, 3);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Неверная скорость');
                    } else {
                        expect(err).to.equal('Неверная скорость');
                    }
                }

                expect(car.currentFuelVolume).to.equal(15);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });

            it('Speed could not be equal to 0', () => {
                car.fillUpGasTank(15);
                car.start();

                const speed = 0;

                try {
                    car.drive(speed, 3);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Неверная скорость');
                    } else {
                        expect(err).to.equal('Неверная скорость');
                    }
                }

                expect(car.currentFuelVolume).to.equal(15);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });

            it('Speed could not be equal to any negative number', () => {
                car.fillUpGasTank(15);
                car.start();

                const speed = -102;

                try {
                    car.drive(speed, 3);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Неверная скорость');
                    } else {
                        expect(err).to.equal('Неверная скорость');
                    }
                }

                expect(car.currentFuelVolume).to.equal(15);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });

            it('Speed could not be equal to NaN', () => {
                car.fillUpGasTank(15);
                car.start();

                const speed = NaN;

                try {
                    car.drive(speed, 3);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Неверная скорость');
                    } else {
                        expect(err).to.equal('Неверная скорость');
                    }
                }

                expect(car.currentFuelVolume).to.equal(15);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });

            it('Speed could not be equal to Infinity', () => {
                car.fillUpGasTank(15);
                car.start();

                const speed = Infinity;

                try {
                    car.drive(speed, 3);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Неверная скорость');
                    } else {
                        expect(err).to.equal('Неверная скорость');
                    }
                }

                expect(car.currentFuelVolume).to.equal(15);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });
        });

        describe('Should throw an error when hours amount value is incorrect', () => {
            it('Hours amount could not be null', () => {
                car.fillUpGasTank(15);
                car.start();

                const hoursAmount = null;

                try {
                    car.drive(160, hoursAmount);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Неверное количество часов');
                    } else {
                        expect(err).to.equal('Неверное количество часов');
                    }
                }

                expect(car.currentFuelVolume).to.equal(15);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });

            it('Hours amount could not be undefined', () => {
                car.fillUpGasTank(15);
                car.start();

                let hoursAmount;

                try {
                    car.drive(160, hoursAmount);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Неверное количество часов');
                    } else {
                        expect(err).to.equal('Неверное количество часов');
                    }
                }

                expect(car.currentFuelVolume).to.equal(15);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });

            it('Hours amount could not be equal to 0', () => {
                car.fillUpGasTank(15);
                car.start();

                const hoursAmount = 0;

                try {
                    car.drive(160, hoursAmount);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Неверное количество часов');
                    } else {
                        expect(err).to.equal('Неверное количество часов');
                    }
                }

                expect(car.currentFuelVolume).to.equal(15);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });

            it('Hours amount could not be equal to any negative number', () => {
                car.fillUpGasTank(15);
                car.start();

                const hoursAmount = -3;

                try {
                    car.drive(160, hoursAmount);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Неверное количество часов');
                    } else {
                        expect(err).to.equal('Неверное количество часов');
                    }
                }

                expect(car.currentFuelVolume).to.equal(15);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });

            it('Hours amount could not be equal to NaN', () => {
                car.fillUpGasTank(15);
                car.start();

                const hoursAmount = NaN;

                try {
                    car.drive(160, hoursAmount);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Неверное количество часов');
                    } else {
                        expect(err).to.equal('Неверное количество часов');
                    }
                }

                expect(car.currentFuelVolume).to.equal(15);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });

            it('Hours amount could not be equal to Infinity', () => {
                car.fillUpGasTank(15);
                car.start();

                const hoursAmount = Infinity;

                try {
                    car.drive(160, hoursAmount);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Неверное количество часов');
                    } else {
                        expect(err).to.equal('Неверное количество часов');
                    }
                }

                expect(car.currentFuelVolume).to.equal(15);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });
        });

        describe('Should throw an error when speed value is logicaly incorrect', () => {
            it('Speed could not be bigger than 300', () => {
                car.fillUpGasTank(8);
                car.start();

                const speed = 310;

                try {
                    car.drive(speed, 3);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Машина не может ехать так быстро');
                    } else {
                        expect(err).to.equal('Машина не может ехать так быстро');
                    }
                }

                expect(car.currentFuelVolume).to.equal(8);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });

            it('Speed could not be bigger than car max speed', () => {
                car.fillUpGasTank(15);
                car.start();

                const speed = 230;

                try {
                    car.drive(speed, 3);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Машина не может ехать так быстро');
                    } else {
                        expect(err).to.equal('Машина не может ехать так быстро');
                    }
                }

                expect(car.currentFuelVolume).to.equal(15);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });
        });

        describe('Should throw an error when drive method is being called from car which is not started', () => {
            it('Could not drive when car is not started', () => {
                car.fillUpGasTank(7);

                try {
                    car.drive(150, 3);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Машина должна быть заведена, чтобы ехать');
                    } else {
                        expect(err).to.equal('Машина должна быть заведена, чтобы ехать');
                    }
                }

                expect(car.currentFuelVolume).to.equal(7);
                expect(car.isStarted).to.equal(false);
                expect(car.mileage).to.equal(0);
            });

            it('Could not drive when car is not started after successful' +
              ' start and shut down', () => {
                car.fillUpGasTank(14);
                car.start();
                car.drive(150, 3);
                car.shutDownEngine();

                try {
                    car.drive(160, 2);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Машина должна быть заведена, чтобы ехать');
                    } else {
                        expect(err).to.equal('Машина должна быть заведена, чтобы ехать');
                    }
                }

                expect(car.currentFuelVolume).to.greaterThan(6.5);
                expect(car.currentFuelVolume).to.lessThan(7);
                expect(car.isStarted).to.equal(false);
                expect(car.mileage).to.equal(450);
            });
        });

        describe('Should throw an error when car has not enough fuel to drive', () => {
            it('Could not drive when car has no fuel', () => {
                car.start();

                try {
                    car.drive(150, 3);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Недостаточно топлива');
                    } else {
                        expect(err).to.equal('Недостаточно топлива');
                    }
                }

                expect(car.currentFuelVolume).to.equal(0);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });

            it('Could not drive when car has not enough fuel', () => {
                car.fillUpGasTank(1.5);
                car.start();

                try {
                    car.drive(150, 3);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Недостаточно топлива');
                    } else {
                        expect(err).to.equal('Недостаточно топлива');
                    }
                }

                expect(car.currentFuelVolume).to.equal(1.5);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(0);
            });

            it('Could not drive when car has not enough fuel (after a successful try)', () => {
                car.fillUpGasTank(5);
                car.start();
                car.drive(80, 3);

                try {
                    car.drive(100, 3);
                } catch (err) {
                    if (typeof(err) === 'object' && err.message) {
                        expect(err.message).to.equal('Недостаточно топлива');
                    } else {
                        expect(err).to.equal('Недостаточно топлива');
                    }
                }

                expect(car.currentFuelVolume).to.greaterThan(1);
                expect(car.currentFuelVolume).to.lessThan(1.5);
                expect(car.isStarted).to.equal(true);
                expect(car.mileage).to.equal(240);
            });
        });
    });
});
