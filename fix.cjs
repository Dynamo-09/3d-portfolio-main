const fs = require('fs');
let content = fs.readFileSync('src/components/styles/Landing.css', 'utf8');
const index = content.indexOf('@ m e d i a');
if (index > -1) {
  content = content.substring(0, index);
}
const cssToAppend = `\n@media screen and (max-width: 1024px) {\n  .landing-circle1, .landing-circle2, .character-rim {\n    animation: none !important;\n    filter: blur(10px) !important;\n  }\n}\n`;
fs.writeFileSync('src/components/styles/Landing.css', content + cssToAppend);
