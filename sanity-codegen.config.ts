import { SanityCodegenConfig  } from 'sanity-codegen';

const config: SanityCodegenConfig = {
    schemaPath: './apps/studio/schemas/schema.js',
    outputPath: './apps/client/lib/schema.ts',
    babelOptions: {
        plugins: [
          // taken from here:
          // https://github.com/ricokahler/sanity-codegen/blob/c0761ea8292a9d89a5072e173694f96b4e06f120/src/cli.ts#L22-L44
          [
            'module-resolver',
            {
              root: ['.'],
              alias: {
                'part:@sanity/base/schema-creator':
                  'sanity-codegen/schema-creator-shim',
                'all:part:@sanity/base/schema-type':
                  'sanity-codegen/schema-type-shim',
                'part:@sanity/base/schema-type': 'sanity-codegen/schema-type-shim',
                '^part:.*': 'sanity-codegen/no-op',
                '^config:.*': 'sanity-codegen/no-op',
                '^all:part:.*': 'sanity-codegen/no-op',
                '/\?raw$': 'sanity-codegen/no-op',
              },
            },
          ],
          // used to resolve css module imports that are allowed in sanity projects
          'css-modules-transform',
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-numeric-separator',
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-nullish-coalescing-operator',
        ],
      },
}

export default config;