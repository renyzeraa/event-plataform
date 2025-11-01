/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GRAPHQL_API_URL: string
    readonly VITE_GRAPHQL_API_TOKEN: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
