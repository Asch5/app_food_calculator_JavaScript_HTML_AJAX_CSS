// const fs = require('fs');
// const path = require('path');

// // Define the names of folders and files to exclude
// const excludedFolders = [
//   'collector',
//   'node_modules',
//   '.vscode',
//   'icons',
//   'img',
// ];
// const excludedFiles = [
//   'README.md',
//   'package-lock.json',
//   '.gitignore',
//   'favicon.ico',
// ];

// function readFilesAndWriteToSingleFile(folderPath, outputFile) {
//   const files = fs.readdirSync(folderPath);

//   files.forEach((file) => {
//     const filePath = path.join(folderPath, file);

//     if (excludedFolders.includes(file)) {
//       // If it's an excluded folder, skip it
//       return;
//     }

//     if (fs.statSync(filePath).isDirectory()) {
//       // If it's a directory (other than excluded folders), recursively process its contents
//       readFilesAndWriteToSingleFile(filePath, outputFile);
//     } else if (!excludedFiles.includes(file)) {
//       // If it's a file and not in the list of excluded files, read its content and append it to the output file
//       const fileContent = fs.readFileSync(filePath, 'utf-8');
//       fs.appendFileSync(outputFile, fileContent);
//     }
//   });
// }

// // Path to the root folder of your project
// const projectRoot = path.join(__dirname, '..');

// // Path to the output text file
// const outputFilePath = 'project_code.txt';

// // Start reading files and writing to the output file
// readFilesAndWriteToSingleFile(projectRoot, outputFilePath);

// console.log(path.join(__dirname, '..'));
// console.log('Project successfully combined into the file project_code.txt');

const fs = require('fs');
const path = require('path');

// Define the names of folders and files to exclude
const excludedFolders = [
  'collector',
  'node_modules',
  '.vscode',
  'icons',
  'img',
  '.git',
];
const excludedFiles = [
  'README.md',
  'package-lock.json',
  '.gitignore',
  'favicon.ico',
  'bundle.js',
  'bundle.js.map',
];

function readFilesAndWriteToSingleFile(
  folderPath,
  outputFile,
  relativePath = ''
) {
  const files = fs.readdirSync(folderPath);

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const fileRelativePath = path.join(relativePath, file);

    if (excludedFolders.includes(file)) {
      // If it's an excluded folder, skip it
      return;
    }

    if (fs.statSync(filePath).isDirectory()) {
      // If it's a directory (other than excluded folders), recursively process its contents
      readFilesAndWriteToSingleFile(filePath, outputFile, fileRelativePath);
    } else if (!excludedFiles.includes(file)) {
      // If it's a file and not in the list of excluded files, read its content, and append it to the output file with the path
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      fs.appendFileSync(
        outputFile,
        `\n\n=========== File: ${fileRelativePath} ===========\n\n`
      );
      fs.appendFileSync(outputFile, fileContent);
    }
  });
}

// Path to the root folder of your project
const projectRoot = path.join(__dirname, '..');

// Path to the output text file
const outputFilePath = 'project_code.txt';

// Start reading files and writing to the output file
readFilesAndWriteToSingleFile(projectRoot, outputFilePath);

console.log('Project successfully combined into the file project_code.txt');
