// Script to generate multiple favicon sizes from your SVG
// Run with: node scripts/generate-favicons.js

const fs = require("fs");
const path = require("path");

// This script would use a library like sharp to convert SVG to PNG
// For now, you can manually create these sizes or use an online converter

const faviconSizes = [
  { size: 16, name: "favicon-16x16.png" },
  { size: 32, name: "favicon-32x32.png" },
  { size: 48, name: "favicon-48x48.png" },
  { size: 64, name: "favicon-64x64.png" },
  { size: 96, name: "favicon-96x96.png" },
  { size: 128, name: "favicon-128x128.png" },
  { size: 180, name: "apple-touch-icon.png" },
  { size: 192, name: "android-chrome-192x192.png" },
  { size: 512, name: "android-chrome-512x512.png" },
];

console.log("Favicon sizes to generate:");
faviconSizes.forEach(({ size, name }) => {
  console.log(`${size}x${size} -> ${name}`);
});

console.log("\nTo generate these, you can:");
console.log("1. Use an online SVG to PNG converter");
console.log("2. Use a tool like GIMP or Photoshop");
console.log("3. Use a command-line tool like ImageMagick");
