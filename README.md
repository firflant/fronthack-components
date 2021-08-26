Purpose of this repository is to handle ready to use components for Fronthack.
Everything located in `src/components` can be added to existing project using
`fronthack component` command.


### Development

`yarn install`, then:

- `yarn start` - to run a storybook localy in development mode
- `yarn build` - to run a storybook build
- `yarn sandbox` - to run a local sandbox server, where all components can be
tested in a real-life environment
- `yarn sandbox-build` - to run a sanbox build


### Deployment

Master branch is automaticaly being deployed to Netlify.

Fronthack CLI uses the latest version of files in this repository, so if you
introduce a changes in any component, Fronthack will treat them as a source of
truth after they are pushed to a `master` branch.
