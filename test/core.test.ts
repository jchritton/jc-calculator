import * as index from '../src/index';
import { expect } from 'chai';

describe('Core', () => {
    it('accurately adds two numbers', () => {
        const testVals: Array<number> = [3, 6];
        expect(index.add(testVals, 0)).to.equal(9);
    });
    it('accurately subtracts one number from another');
    it('accurately multiplies two numbers');
    it('accurately divides one number by another');
});