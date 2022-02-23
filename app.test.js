import { calculator } from './app.js';

describe('Testing calculator', () => {
    test('should first', () => {
        expect(calculator([2, 2])).toBeTruthy();
        expect(() => {
            calculator([2, 'Pepe']);
        }).toThrowError();
        expect(() => {
            calculator([]);
        }).toThrowError();
    });
});
