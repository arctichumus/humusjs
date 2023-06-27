# HumusJS
HumusJS is a JavaScript component library.

## How to use
Just import it from the packages =)

## How to contribute
1. Create new branch
2. Add new component folder to the `src/components` directory.
3. Add COMPONENT.tsx, COMPONENT.(s)css, COMPONENT.test.tsx, COMPONENT.stories.tsx and index.ts to the newly created folder.
4. Code away =)
5. Test your code with `npm run test`
6. Check your changes on Storybook with `npm run storybook`.
7. Create an mr to `main` and wait for approval and merge

## How to publish a package
When your change is merged into `main`, you can run `npm publish` on freshly updated local `main`, that will publish you changes.
Don't forget to update the version number of the package in the `package.json`