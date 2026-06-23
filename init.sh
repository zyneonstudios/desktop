#!/usr/bin/bash
pnpm install
cd src-tauri
cargo check
cd ..