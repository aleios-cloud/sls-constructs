# Welcome to sls-constructs, an example showcase of the documentation used in Aleios Projects

This repository is structured as follows:

### `.github/workflows`

This manages the CI of this repository, right now just updating our [github page hosting documentation](https://aleios-cloud.github.io/sls-constructs/) when merging a branch into main.

### `bin`

This contains the app created with CDK

### `Constructs`

This contains two sections:

- `helpers` which contains our logic for checked `required`, `default` and `allowed` properties on a construct
- `Lambda` an example L2+ Lambda construct that we would use on a project to enforce best practices, in this directory there's a few interesting pieces to look at:

  - `config.ts` contains all our configuration for our lambda construct, specifying what data is required, allowed, and defaulted to (e.g. look at the allowed runtime)
  - `error.ts` contains all the warnings and errors that we throw (take a look at how the helper function `validateAllowedProperties` works). These are intended to be informative to the developer to explain best practices, not just prescribe them

### `docs`

This directory contains documentation for developers to read while coding and when they encounter errors. Its intent is to share knowledge more consistently across a team, helping empower less experienced developers to be more autonomous.

It follows the default structure created when you initialise a docusaurus page (we have removed the `blog` section), and all documentation is kept in the `docs` directory

The latest version of the documentation can be found [here](https://aleios-cloud.github.io/sls-constructs/).

### `functions`

This contains a simple `helloWorld` lambda

### `lib`

Contains stacks, right now only having one stack with a single lambda in it (using our `HelloWorld` construct)
