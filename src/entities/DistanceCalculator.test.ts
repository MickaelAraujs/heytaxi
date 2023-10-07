import Coordinate from './Coordinate';
import DistanceCalculator from './DistanceCalculator';

it('Should calculate distance given 2 points with latitude and longitude', () => {
    const from = new Coordinate(-7.0150709, -37.2711705);
    const to = new Coordinate(-7.0216681, -37.2815075);
    const distanceCalculator = new DistanceCalculator();
    expect(Math.ceil(distanceCalculator.calculate(from, to))).toBe(2);
})