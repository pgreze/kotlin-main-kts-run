const core = require('@actions/core');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawn } = require('child_process');

async function run() {
  try {
    const inputScript = core.getInput('script');
    const tempDir = fs.mkdtempSync(`${os.tmpdir()}${path.sep}`);

    const mainKtsPath = path.join(tempDir, `${Date.now()}-${Math.floor(Math.random() * 10000)}.main.kts`);
    fs.writeFileSync(mainKtsPath, inputScript);

    const kotlinc = spawn('kotlinc', ['-script', mainKtsPath]);
    kotlinc.stdout.on('data', (data) => {
      process.stdout.write(`${data}`);
    });
    kotlinc.stderr.on('data', (data) => {
      console.stderr.write(`${data}`);
    });
    kotlinc.on('close', (code) => {
      process.exitCode = code;
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
