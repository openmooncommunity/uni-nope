const filterNonASCII = require('./index');

describe('filterNonASCII', () => {
    test('should remove non-ASCII characters from a string', () => {
        const input = 'Hello, 世界!';
        const expected = 'Hello, !';
        expect(filterNonASCII(input)).toBe(expected);
    });

    test('should return an empty string if input is empty', () => {
        expect(filterNonASCII('')).toBe('');
    });

    test('should return the same string if it contains no non-ASCII characters', () => {
        const input = 'Hello, World!';
        expect(filterNonASCII(input)).toBe(input);
    });

    test('should handle strings with only non-ASCII characters', () => {
        const input = '世界';
        expect(filterNonASCII(input)).toBe('');
    });

    test('should handle strings with only non-ASCII characters and ASCII characters', () => {
        const input = 'こんにちは, 世界!';
        const expected = ', !';
        expect(filterNonASCII(input)).toBe(expected);
    });
});
