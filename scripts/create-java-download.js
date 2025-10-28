#!/usr/bin/env node

/**
 * Script to create downloadable ZIP files for Java projects
 * This helps visitors easily download and run your Java code
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Configuration
const JAVA_PROJECTS = {
  "blackjack-java": {
    name: "Blackjack Game",
    description: "A console-based Blackjack game implementing OOP principles",
    githubUrl: "https://github.com/tobiasrogerhammer/blackjack-java",
    complexity: "Beginner",
    concepts: [
      "Classes & Objects",
      "Inheritance",
      "Exception Handling",
      "Collections",
    ],
  },
};

function createDownloadInstructions() {
  const instructions = `
# Java Projects Download Instructions

## How to Download and Run the Java Projects

### Option 1: Direct GitHub Download
1. Click on the "Code" button in the GitHub repository
2. Select "Download ZIP"
3. Extract the ZIP file
4. Open in your preferred Java IDE (IntelliJ IDEA, Eclipse, VS Code)
5. Run the main class

### Option 2: Clone with Git
\`\`\`bash
git clone https://github.com/tobiasrogerhammer/blackjack-java.git
cd blackjack-java
# Open in your IDE and run
\`\`\`

### Option 3: Command Line Compilation
\`\`\`bash
# Navigate to the project directory
cd blackjack-java/Blackjack

# Compile the Java files
javac *.java

# Run the main class
java Main  # or whatever your main class is named
\`\`\`

## Requirements
- Java 8 or higher
- Any Java IDE (recommended) or command line tools

## Project Structure
Each Java project includes:
- Source code (.java files)
- README with setup instructions
- Example usage and documentation
`;

  fs.writeFileSync(
    path.join(__dirname, "../public/java-download-guide.md"),
    instructions
  );
  console.log(
    "✅ Created download instructions at /public/java-download-guide.md"
  );
}

function createProjectManifest() {
  const manifest = {
    projects: JAVA_PROJECTS,
    lastUpdated: new Date().toISOString(),
    instructions: {
      download: "Click the 'View Code' button to access the GitHub repository",
      run: "Clone the repository and open in your Java IDE",
      requirements: "Java 8+ and any Java IDE",
    },
  };

  fs.writeFileSync(
    path.join(__dirname, "../public/java-projects.json"),
    JSON.stringify(manifest, null, 2)
  );
  console.log("✅ Created project manifest at /public/java-projects.json");
}

// Main execution
console.log("🚀 Setting up Java project downloads...");
createDownloadInstructions();
createProjectManifest();
console.log("✅ Java project download setup complete!");
