module.exports = {
    transform: {
        '^.+\\.(t|j)sx?$': '@swc/jest'
    },
    globals: {
        'ts-jest': {
            tsConfig: {
                importHelpers: true
            }
        }
    },
    transformIgnorePatterns: ['node_modules/(?!callsites)/']
}
