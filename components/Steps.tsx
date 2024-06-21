import { Code } from "./Code";

const yamlcode = `project:
  name: nextjs-recipe

services:
  - hostname: app
    type: nodejs@20
    buildFromGit: https://github.com/fxck/zerops-next-nodejs
    enableSubdomainAccess: true`.trim();

export function Steps() {
  return (
    <div className="pt-40 space-y-12 max-w-3xl">
      <Code code={yamlcode} />
    </div>
  );
}
