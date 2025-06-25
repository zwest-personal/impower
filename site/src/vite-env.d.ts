/// <reference types="vite/client" />

// tslint:disable-next-line
interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  // strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_ENV: string
  readonly VITE_API_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}