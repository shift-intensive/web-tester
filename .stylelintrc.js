import { stylelint } from '@siberiacancode/stylelint';

/** @type {import('stylelint').Config} */
export default {
  ...stylelint,
  rules: {
    ...stylelint.rules,
    'custom-property-pattern': null
  }
};
