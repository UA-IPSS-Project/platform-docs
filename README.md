# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

## Local Development
### AKA rodar no pc
```bash
npm run start
```


## Deployment
### Mandar po site  
```bash
npm run build
GIT_USER="XXX" USE_SSH="true" npx docusaurus deploy
```

### Alternativa Windows
```powershell
$env:GIT_USER="XXX"
$env:USE_SSH="false"
npx docusaurus deploy
```

## https://UA-IPSS-Project.github.io/platform-docs/
