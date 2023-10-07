import Coordinate from './Coordinate';

export default class DistanceCalculator {
    private readonly EARTH_RADIUS_IN_KILOMETER = 6371;

    calculate(from: Coordinate, to: Coordinate) {
        const latitudeDistance = this.degreeToRadians(to.latitude - from.latitude); 
        const longitudeDistance = this.degreeToRadians(to.longitude - from.longitude); 
        const area = this.calculateArea(from.latitude, to.latitude, latitudeDistance, longitudeDistance);
        const distanceInKilometers = 2 * this.EARTH_RADIUS_IN_KILOMETER * Math.atan2(Math.sqrt(area), Math.sqrt(1 - area)); 
        return distanceInKilometers;
    }

    private degreeToRadians(degree: number) {
        return degree * (Math.PI / 180);
    }

    private calculateArea(latiduteFrom: number, latiduteTo: number, latitudeDistance: number, longitudeDistance: number) {
        return Math.sin(latitudeDistance / 2) * Math.sin(latitudeDistance / 2) +
            Math.cos(this.degreeToRadians(latiduteFrom)) * Math.cos(this.degreeToRadians(latiduteTo)) * 
            Math.sin(longitudeDistance / 2) * Math.sin(longitudeDistance / 2); 
    }
}