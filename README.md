# creating-a-react-app-from-scratch

This is a react implementation architecture with 

## Getting Started

_(Note: this project was created in Node v10.21.0)_

Clone this repo and install dependencies with `yarn or yarn install`.

### Starting The Dev (API) Server

To start the API server and start hacking, run

If using VSCode use launch(program) to run the API

If from terminal
```BASH
node ./public/server.js
```

### Starting The Dev WEB(UI) Server

To start the server and start hacking, run

```BASH
npm run dev
```

This starter uses webpack-dev-server to spin up an Express server with Hot-Reloading capability. Changes to code in `.src` should cause pages to reload.


### ESLINT

install eslint in local using command yarn install which installs all the required modules for project, even though error is thrown saying  **module not found** run command `yarn add --dev @module-name`

once the packages are successfully installed  try the following commands

1. for linting all the folders in project run command `yarn lint`
2. in order to lint specific file in the project run command `eslint filePath` ex: **eslint src/app.jsx**
3.  in order to auto fix lint in the project run command `yarn lint:fix` 
