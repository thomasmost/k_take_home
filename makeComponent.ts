import fs from 'fs';

const args = process.argv.slice(2);
const name = args[0];

// const name = process.argv[2];
const directory = './src/components/' + name;

if (!name) {
  console.error('Usage: bin/makeComponent.js ComponentName');
  process.exit(1);
}

const propsName = `I${name}Props`;

const componentSrc = `import * as React from 'react';

interface ${propsName} {
  // placeholder, remove or replace with real props
  componentName: string;
}

export const ${name}: React.FC<${propsName}> = (props) => {
  const { componentName, children } = props;
  return (
    <div>
      <h2>{componentName}</h2>
      {children}
    </div>
  );
};
`;

const testSrc = `import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { ${name} } from '.';

test('${name} renders', () => {
  const component = renderer.create(
    <${name} />
  );
  expect(component).toBeDefined();
});
`;

const indexSrc = `export * from './${name}';
`;

fs.mkdirSync(directory);
fs.writeFileSync(`${directory}/${name}.tsx`, componentSrc);
fs.writeFileSync(`${directory}/${name}.test.tsx`, testSrc);
console.log('Component created!');
