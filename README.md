# Zerops + Nextjs - Nodejs

![Header Image](public/ZeropsNextjs.png)

A Nodejs Next.js example for Zerops that you can deploy in 2 steps on zerops.

**Features**

- Nextjs 14 (App Router)
- Tailwind
- Prettier

## Instructions to Deploy on Zerops

1. Navigate to the Zerops Dashboard and locate the import project button on the sidebar.

2. Paste the Project Yaml

```yaml
project:
  name: zerops-nextjs

services:
  - hostname: nextnodejs
    type: nodejs@18
    buildFromGit: https://github.com/fxck/zerops-next-nodejs
    enableSubdomainAccess: true
    minContainers: 1
```

If you still find yourself stuck in the process join our [Discord community](https://discord.gg/5ptAqtpyvh).
