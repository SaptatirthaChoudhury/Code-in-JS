

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degrees celcius'))
    }

    console.table(measurement);
    const Kelvin = measurement.value + 273
    return {
        [measurement.value]: Kelvin

    }
}
console.log(measureKelvin());
