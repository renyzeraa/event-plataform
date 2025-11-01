
import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';

dotenv.config(); // lê o .env padrão

const config: CodegenConfig = {
  schema: process.env.GRAPHQL_API_URL,
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
