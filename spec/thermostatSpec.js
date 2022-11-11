describe('Thermostat', function(){
    let thermostat;

    describe('constructs thermostat', function (){
        it('returns the initial temperature', function(){
            let thermostat = new Thermostat();
            expect(thermostat._temperature).toEqual(20);
            expect(thermostat._powerSavingMode).toEqual(true);
            expect(thermostat._maxTemperature).toEqual(25);
        });
    });

    describe('when a user wants to increase the temperature', () => {
        it('increases the initial temperature variable by the amount requested', function () {
                let thermostat = new Thermostat();
                thermostat.increaseTemperature(3);
                expect(thermostat._temperature).toEqual(23);
                
        });
    });

    describe('when a user wants to decrease the temperature', function (){
        it('decreases the temperature by the amount requested', function(){
            let thermostat = new Thermostat();
            thermostat.decreaseTemperature(3);
            expect(thermostat._temperature).toEqual(17);
        });
    });

    describe('when a user wants to decrease the temperature by too much', function (){
        it('returns string saying it is not possible', function(){
            let thermostat = new Thermostat();
            expect(thermostat.decreaseTemperature(12)).toEqual('Minimum temperature is 10 degrees');
        });
    });

    describe('when a user wants to reset the temperature to 20', function(){
        it('resets the temperature back to 20', function(){
            let thermostat = new Thermostat();
            thermostat.decreaseTemperature(3);
            thermostat.reset();
            expect(thermostat._temperature).toEqual(20)
        });
    });

    describe('when a user does not submit a boolean to the powerSavingMode function', function(){
            it('throws an error', function(){
                let thermostat = new Thermostat();
                expect(function(){ thermostat.powerSavingMode("yes"); } ).toThrow(new Error("not a boolean"));
            });
        });

    describe('when a user wants to switch on power saving mode', function(){
        it('changes powerSavingMode to true', function(){
            let thermostat = new Thermostat();
            thermostat.powerSavingMode(true)
            expect(thermostat._powerSavingMode).toEqual(true);
            expect(thermostat._maxTemperature).toEqual(25);
        });
    });

    describe('when a user wants to switch off power saving mode', function(){
        it('changes powerSavingMode to false', function(){
            let thermostat = new Thermostat();
            thermostat.powerSavingMode(false)
            expect(thermostat._powerSavingMode).toEqual(false);
            expect(thermostat._maxTemperature).toEqual(32);
        });
    });

    
    describe('when a user wants to know the current energy usage', function(){
        it('returns low, medium or high usage', function(){
            let thermostat = new Thermostat();
            expect(thermostat.currentEnergyUsage()).toEqual("medium usage")
        });
    });

    describe('when a user wants to know the current energy usage', function(){
        it('returns low, medium or high usage', function(){
            let thermostat = new Thermostat();
            thermostat._temperature = 17;
            expect(thermostat.currentEnergyUsage()).toEqual("low usage")
        });
    });

    describe('when a user wants to know the current energy usage', function(){
        it('returns low, medium or high usage', function(){
            let thermostat = new Thermostat();
            thermostat._temperature = 30;
            expect(thermostat.currentEnergyUsage()).toEqual("high usage")
        });
    });


});


