import configure from '../configure'
import releaseRules from '../rules'

test('Customize config and extend default', () => {
    expect(configure()).toEqual({
        branches: [
            '+([0-9])?(.{+([0-9]),x}).x',
            'main',
            'next',
            'next-major',
            {
                name: 'beta',
                prerelease: true
            },
            {
                name: 'alpha',
                prerelease: true
            }
        ],
        plugins: [
            ['@semantic-release/commit-analyzer', { preset: 'techor', releaseRules }],
            ['@semantic-release/release-notes-generator', { preset: 'techor' }],
            ['@semantic-release/exec', {
                prepareCmd: 'techor version ${nextRelease.version}'
            }],
            '@semantic-release/github'
        ]
    })
})

test('Disable the @semantic-release/github plugin', () => {
    expect(configure({
        plugins: {
            '@semantic-release/github': false
        }
    })).toEqual({
        branches: [
            '+([0-9])?(.{+([0-9]),x}).x',
            'main',
            'next',
            'next-major',
            {
                name: 'beta',
                prerelease: true
            },
            {
                name: 'alpha',
                prerelease: true
            }
        ],
        plugins: [
            ['@semantic-release/commit-analyzer', { preset: 'techor', releaseRules }],
            ['@semantic-release/release-notes-generator', { preset: 'techor' }],
            ['@semantic-release/exec', {
                prepareCmd: 'techor version ${nextRelease.version}'
            }]
        ]
    })
})