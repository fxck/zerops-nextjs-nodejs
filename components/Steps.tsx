import { Code } from "./Code";

const yamlcode = `project:
  name: zerops-nextjs

services:
  - hostname: nextnodejs
    type: nodejs@18
    buildFromGit: https://github.com/fxck/zerops-next-nodejs
    ports:
      - port: 3000
        httpSupport: true
    enableSubdomainAccess: true
    minContainers: 1`.trim();

export function Steps() {
  return (
    <div className="pt-40 space-y-12 max-w-3xl">
      <div>
        <h2 className="text-[#292929] text-2xl font-semibold">
          Step 1: Go To Zerops Dashboard{" "}
        </h2>
<div style={{ padding: '75.63% 0 0 0', position: 'relative' }}>
  <iframe 
    src="https://player.vimeo.com/video/939088441?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} 
    className="rounded-md">
  </iframe>
</div>
<script src="https://player.vimeo.com/api/player.js"></script>
        <p className="font-medium text-lg mt-3">
          Click on Import Project button on the sidebar.
        </p>
      </div>
      <div>
        <h2 className="text-[#292929] text-2xl font-semibold">
          Step 2: Paste the project Yaml{" "}
        </h2>
        <p className="font-medium text-lg mt-3">
          Copy the Yaml code mentioned below and paste it to import the project
          and for more info explore our{" "}
          <a
            href="https://docs.zerops.io"
            className="font-bold"
            target="_blank"
          >
            {" "}
            docs
          </a>{" "}
          and if you still find yourself stuck in the process join our{" "}
          <a
            href="https://discord.gg/5ptAqtpyvh"
            className="font-bold"
            target="_blank"
          >
            Discord community
          </a>
          .
        </p>
        <Code code={yamlcode} />
      </div>
    </div>
  );
}
