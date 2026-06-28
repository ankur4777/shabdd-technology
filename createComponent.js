const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];
if (!componentName) {
  console.log("❌ Please provide a component name!");
  process.exit(1);
}

const folderPath = path.join("src", "component", componentName);
fs.mkdirSync(folderPath, { recursive: true });

const jsxContent = `import './${componentName}.css';

function ${componentName}() {
  return (
    <div className="${componentName.toLowerCase()}">
      {/* ${componentName} content */}
    </div>
  );
}

export default ${componentName};
`;

const cssContent = `.${componentName.toLowerCase()} {
  /* Add your styles here */
}`;

fs.writeFileSync(path.join(folderPath, `${componentName}.jsx`), jsxContent);
fs.writeFileSync(path.join(folderPath, `${componentName}.css`), cssContent);

console.log(`✅ ${componentName}.jsx and ${componentName}.css created successfully!`);
