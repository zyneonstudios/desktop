@echo off
cd /d "%~dp0.."

call pnpm install
cd src-tauri
cargo check
cd ..