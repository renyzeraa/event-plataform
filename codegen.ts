
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "https://us-west-2.cdn.hygraph.com/content/cmh9sjo2r01c707uytv00thgu/master",
  documents: ['src/graphql/**/*.graphql'],
  generates: {
    'src/graphql/generated.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
  ignoreNoDocuments: false,
};

export default config;
