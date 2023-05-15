const core = require('@actions/core');
const exec = require('@actions/exec');
const fs = require('fs');
const path = require('path');
const os = require('os');

async function run() {
  try {
    const inputScript = core.getInput('script');
    const tempDir = fs.mkdtempSync(`${os.tmpdir()}${path.sep}`);

    const mainKtsPath = path.join(tempDir, `${Date.now()}-${Math.floor(Math.random() * 10000)}.main.kts`);
    fs.writeFileSync(mainKtsPath, inputScript);

    process.exitCode = await exec.exec('kotlin', [mainKtsPath]);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
