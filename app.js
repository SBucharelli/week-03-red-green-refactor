module.exports = {
    smallCar: {
        engineSize: 4,
        fuelType: 'diesel'
    },
    smallTruck: {
        engineSize: 8,
        fuelType: 'regular'
    },
    calculateVehicleRating: function (vehicle) {
        let rating = 0;

        switch (vehicle.engineSize) {
            case 1:
            case 2:
            case 3:
            case 4:
                rating = 9;
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                rating = 7
                break;
            default:
                break;
        }

        switch (vehicle.fuelType) {
            case 'diesel':
                rating = rating + 1;
                break;
            case 'regular':
                rating = rating - 1;
                break;
            default:
                break;
        }

        return rating;
    },
};