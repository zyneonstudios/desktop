#!/usr/bin/bash
cd "$(dirname "$0")/.." || exit

pnpm install
cd src-tauri
cargo check
cd ..