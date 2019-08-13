const functions = require('./functions'); 
describe('Math functions', () => {
    test('returnTwo should return 2', () => {
        expect(functions.returnTwo()).toBe(2); 
    }); 
    
    test('greeting should properly return a greeting', () => {
        expect(functions.greeting('Jill')).toBe('Hello, Jill.')
        expect(functions.greeting('James')).toBe('Hello, James.')
    }); 
    
    test('add should add two values together', () => {
        expect(functions.add(2, 3)).toBe(5); 
        expect(functions.add(4, 5)).toBe(9); 
    }); 
    
    test('subtract should minus two values correctly', () => {
        expect(functions.subtract(2, 3)).toBe(-1); 
        expect(functions.subtract(4, 5)).toBe(-1); 
    }); 
    
    test('multiply should times two values correctly', () => {
        expect(functions.multiply(2, 3)).toBe(6); 
        expect(functions.multiply(4, 5)).toBe(20); 
    }); 
    
    test('divide should divide two values correctly', () => {
        expect(functions.divide(15, 3)).toBe(5); 
        expect(functions.divide(4, 2)).toBe(2); 
    }); 
})
