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
        <div>
          <video width="full" className="rounded-xl mt-4" autoPlay loop>
            <source src="import.mp4" type="video/mp4" />
          </video>
        </div>
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
