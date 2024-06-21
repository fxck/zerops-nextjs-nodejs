# Zerops + Nextjs - Nodejs

![Header Image](public/ZeropsNextjs.png)

A Nodejs Next.js example for Zerops

**Features**

- Next.js 14 (App Router)

## Import 

```yaml
project:
  name: zerops-nextjs

services:
  - hostname: app
    type: nodejs@18
    buildFromGit: https://github.com/fxck/zerops-next-nodejs
    enableSubdomainAccess: true
```
