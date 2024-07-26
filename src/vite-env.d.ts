/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly MICROCMS_SERVICE_DOMAIN: string;
    readonly MICROCMS_API_KEY: string;
    // add more environment variables as needed
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
