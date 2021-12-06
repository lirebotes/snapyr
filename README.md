![Cypress Tests](https://github.com/lirebotes/snapyr/actions/workflows/run-tic-tac-toe.yml/badge.svg)

# Cypress Demo Test
Cypress Demo Test is a repo that serves as a example on how to setup and configure cypress along with github actions as well as Cypress dashboard.

## Setup
To run the tests make sure that you have node.js and npm installed then clone the repo. Run the following commands to install and run:

```shell
npm install
npm run test
```
## Notes
- This repo contains it's own demo website contained in the ``tic-tac-toe`` folder.
- ``cypress/integration/0-Tic-Tac/tic.spec.js`` is the test for tic-tac-toe.
- The other files are the default cypress tests, and they are included just to provide more data for the dashboard.
- ``/cypress/integration/3-fails/fail.spec.js`` fails on purpose to provide a failure for the dashboard.
