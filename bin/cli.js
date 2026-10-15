#!/usr/bin/env node

/**
 * writing-systems CLI (Zero Runtime Dependencies)
 * Distributes AGENTS.md, Vale rules, and check_writing.py into any repository.
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = path.resolve(__dirname, '..');
const TARGET_DIR = process.cwd();

const COMMAND = process.argv[2] || 'info';

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function handleInit() {
  console.log('\n🚀 Initializing AI Writing Systems in target repository...\n');

  const filesToCopy = [
    { src: 'AGENTS.md', dest: 'AGENTS.md' },
    { src: 'CLAUDE.md', dest: 'CLAUDE.md' },
    { src: 'scripts/check_writing.py', dest: 'scripts/check_writing.py' },
    { src: '.vale', dest: '.vale' }
  ];

  let copiedCount = 0;

  for (const item of filesToCopy) {
    const srcPath = path.join(REPO_ROOT, item.src);
    const destPath = path.join(TARGET_DIR, item.dest);

    if (!fs.existsSync(srcPath)) {
      continue;
    }

    const destDir = path.dirname(destPath);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    if (fs.existsSync(destPath)) {
      console.log(`  ℹ️  Skipped existing: ${item.dest}`);
    } else {
      copyRecursive(srcPath, destPath);
      console.log(`  ✅ Installed: ${item.dest}`);
      copiedCount++;
    }
  }

  console.log(`\n✨ Initialization complete! (${copiedCount} items installed)`);
  console.log('\nNext steps:');
  console.log('  1. Review AGENTS.md in your repository root.');
  console.log('  2. Run verification: python3 scripts/check_writing.py\n');
}

function handleCheck() {
  const scriptPath = path.join(REPO_ROOT, 'scripts', 'check_writing.py');
  if (!fs.existsSync(scriptPath)) {
    console.error('Error: scripts/check_writing.py not found.');
    process.exit(1);
  }

  const args = process.argv.slice(3);
  const checkArgs = args.length > 0 ? args : [];

  const py = spawnSync('python3', [scriptPath, ...checkArgs], {
    stdio: 'inherit',
    cwd: TARGET_DIR
  });

  process.exit(py.status || 0);
}

function handleInfo() {
  console.log(`
======================================================
  AI Writing Systems & Cognitive Communication Standard
======================================================

The open-source specification for eliminating conversational AI slop,
enforcing natural direct answers, and ensuring deterministic agent outputs.

The 5 Universal Invariants:
  1. Natural Direct Answers: Deliver the answer or decision immediately in sentence 1.
  2. Plain Human English: Speak like a pragmatic human engineer without AI buzzwords.
  3. Controlled Syntax: Max 20w (procedural) / 25w (descriptive).
  4. Natural Bullet Points: Lead list items directly with verbs or facts without bold prefixes.
  5. Literal Precision & Canonical Terms: State facts directly and maintain one term per entity.

Usage:
  npx writing-systems init    Scaffold AGENTS.md and linters into current repo
  npx writing-systems check   Run prose and cadence validation
  npx writing-systems info    Display system overview
======================================================
`);
}

switch (COMMAND) {
  case 'init':
    handleInit();
    break;
  case 'check':
    handleCheck();
    break;
  case 'info':
  case '--help':
  case '-h':
    handleInfo();
    break;
  default:
    console.log(`Unknown command: ${COMMAND}\n`);
    handleInfo();
    process.exit(1);
}
