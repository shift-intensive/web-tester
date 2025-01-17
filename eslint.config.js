import { eslint } from '@siberiacancode/eslint';

export default eslint(
  {
    javascript: true,
    typescript: true,
    react: true,
    jsx: true
  },
  {
    name: 'web-tester/global',
    ignores: ['generated']
  }
);
