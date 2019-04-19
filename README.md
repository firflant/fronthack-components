Purpose of this repository is to handle ready to use components for Fronthack.
Everything located in `src/components` can be added to existing project using
`fronthack component` command.


### Development

`yarn install`, then:

- `yarn start` - to run a local sandbox server, where all components can be tested
in real-life environment
- `yarn storybook` - to run a styleguide localy in development mode


### Deployment

To deploy a storybook to https://frontcraft.github.io/fronthack-components/index.html,
run a following command:

```
yarn deploy-storybook
```

Fronthack CLI uses the latest version of files in this repository, so if you
introduce a changes in any component, Fronthack will treat them as a source of
truth after they will by pushed/merged to a `master` branch.