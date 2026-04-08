const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/text-white/g, 'text-[#fffef6]');
content = content.replace(/hover:text-white/g, 'hover:text-[#fffef6]');
content = content.replace(/text-saygest-green/g, 'text-[#002411]');
content = content.replace(/hover:text-saygest-green/g, 'hover:text-[#002411]');
content = content.replace(/text-gray-800/g, 'text-[#002411]');
content = content.replace(/text-gray-700/g, 'text-[#002411]/80');
content = content.replace(/text-gray-600/g, 'text-[#002411]/70');
content = content.replace(/text-gray-500/g, 'text-[#fffef6]/60');
content = content.replace(/text-gray-400/g, 'text-[#fffef6]/70');

fs.writeFileSync('src/App.tsx', content);
console.log('Replaced colors in App.tsx');
