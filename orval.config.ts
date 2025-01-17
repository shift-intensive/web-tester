export default {
  'shiftbackend-tester': {
    input: 'http://shift-intensive.ru/api/tester-json',
    output: {
      target: 'generated/api/index.ts',
      client: 'react-query',
      prettier: true,
      override: {
        mutator: {
          path: './src/utils/api/instance.ts',
          name: 'instance'
        }
      }
    }
  }
};
