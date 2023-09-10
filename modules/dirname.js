
   import { fileURLToPath } from "url";
   import { dirname } from "path";

   export function fileDirName(importMeta) {
     const __filename = fileURLToPath(importMeta.url);
     return {
       __dirname: dirname(__filename),
     };
   }