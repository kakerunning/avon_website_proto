const fs = require("fs");
const { execSync } = require("child_process");

console.log("Setting up AVON Heerlen website...");

// Create necessary directories if they don't exist
const directories = [
  "public/images",
  "app/components",
  "app/trainingen",
  "app/over-ons",
  "app/nieuws",
  "app/contact",
];

directories.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    console.log(`Creating directory: ${dir}`);
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Install dependencies
console.log("Installing dependencies...");
try {
  execSync("npm install", { stdio: "inherit" });
  console.log("Dependencies installed successfully!");
} catch (error) {
  console.error("Error installing dependencies:", error);
  process.exit(1);
}

console.log(`
Setup complete! You can now run the development server with:

  npm run dev

Don't forget to add your images to the public/images directory:
- avon_logo.jpeg (for the navigation)
- avon_logo_black.jpg (for the navigation)
- entrance_emma.jpg (for hero sections)
- track.jpeg (for training pages)
- Other images as needed for your content
`);
