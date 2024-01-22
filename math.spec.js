import { describe, it, expect } from '@jest/globals';
import { sum } from './math.js';


describe('Test initial', () => {
    it('add 1 plus 2 equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});