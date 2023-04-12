export default {
    displayName: 'toh-nx-v2-heroes-ui-hero-search',
    preset: '../../../../jest.preset.js',
    transform: {
        '^.+\\.[tj]sx?$': ['ts-jest', {tsconfig: '<rootDir>/tsconfig.spec.json'}],
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../../../coverage/libs/toh-nx-v2/heroes/ui-hero-search',
};
