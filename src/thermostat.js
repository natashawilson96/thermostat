"use strict";

class Thermostat{
    constructor(){
        this._temperature = 20;
        this._powerSavingMode = true;
        this._maxTemperature = 25;
    }

    increaseTemperature(amountToIncreaseBy){
        this._temperature += amountToIncreaseBy;
    }

    decreaseTemperature(amountToDecreaseBy){
        if((this._temperature - amountToDecreaseBy) < 10){
            return "Minimum temperature is 10 degrees"
        } else {
        this._temperature -= amountToDecreaseBy;
        }
    }

    reset(){
        this._temperature = 20;
    }

    powerSavingMode(decision){
        if(decision == true){
            this._powerSavingMode = true;
            this._maxTemperature = 25;
        } else if (decision == false) {
            this._powerSavingMode = false;
            this._maxTemperature = 32;
        } else {
            throw new Error("not a boolean");
        }
    }

    currentEnergyUsage(){
        if(this._temperature < 18){
            return "low usage";
        } else if(this._temperature <= 25){
            return "medium usage";
        } else {
            return "high usage";
        }
    }
}