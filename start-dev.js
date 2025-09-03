import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting Samosa Application...\n');

// Start backend server
console.log('📡 Starting Backend Server...');
const backend = spawn('node', ['server.js'], {
  stdio: 'inherit',
  cwd: __dirname
});

// Wait a moment for backend to start
setTimeout(() => {
  console.log('\n🌐 Starting Frontend Development Server...');
  const frontend = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    cwd: __dirname
  });

  // Handle frontend process exit
  frontend.on('close', (code) => {
    console.log(`\n❌ Frontend process exited with code ${code}`);
    backend.kill();
    process.exit(code);
  });
}, 2000);

// Handle backend process exit
backend.on('close', (code) => {
  console.log(`\n❌ Backend process exited with code ${code}`);
  process.exit(code);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down...');
  backend.kill();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down...');
  backend.kill();
  process.exit(0);
});
