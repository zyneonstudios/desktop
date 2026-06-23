# Third-Party Notices

This file records third-party packages used by Zyneon Desktop.

`AUTHORS` lists project authorship only. Package authorship and license terms
for dependencies are tracked here and in the respective package metadata.

For exact resolved versions, refer to `pnpm-lock.yaml` for the frontend stack
and `src-tauri/Cargo.lock` for the Rust build. The versions below are the
currently resolved direct dependencies that are bundled into, or used to build,
the application.

This file is an inventory only. Each dependency remains governed by its own
license text, notice requirements, and copyright terms.

## Runtime dependencies

| Package | Version | License |
| --- | ---: | --- |
| `@tauri-apps/api` | `2.10.1` | MIT |
| `@tauri-apps/plugin-opener` | `2.5.4` | MIT |
| `@tauri-apps/plugin-shell` | `2.3.5` | MIT |
| `bootstrap-icons` | `1.13.1` | MIT |
| `lucide-static` | `1.8.0` | ISC |
| `vue` | `3.5.32` | MIT |

## Build-time dependencies

These packages are used to build and type-check the project. They are not part
of the shipped application bundle, but they are listed here for completeness.

| Package | Version | License |
| --- | ---: | --- |
| `@tailwindcss/postcss` | `4.2.4` | MIT |
| `@tailwindcss/vite` | `4.2.4` | MIT |
| `@tauri-apps/cli` | `2.10.1` | MIT |
| `@types/node` | `24.12.2` | MIT |
| `@vitejs/plugin-vue` | `6.0.6` | MIT |
| `@vue/tsconfig` | `0.9.1` | MIT |
| `autoprefixer` | `10.5.0` | MIT |
| `postcss` | `8.5.10` | MIT |
| `tailwindcss` | `4.2.4` | MIT |
| `typescript` | `6.0.3` | Apache-2.0 |
| `vite` | `8.0.9` | MIT |
| `vue-tsc` | `3.2.7` | MIT |

When redistributing a built application, include the applicable license texts
for the packages that are actually bundled or otherwise shipped to users.

## Rust runtime dependencies

These crates are compiled into the shipped application binary through
`src-tauri/Cargo.toml`.

| Crate | Version | License |
| --- | ---: | --- |
| `log` | `0.4.29` | MIT |
| `reqwest` | `0.13.2` | MIT |
| `serde` | `1.0.228` | MIT |
| `serde_json` | `1.0.149` | MIT |
| `tauri` | `2.10.3` | MIT |
| `tauri-plugin-log` | `2.8.0` | MIT |
| `tauri-plugin-opener` | `2.5.4` | MIT |
| `tauri-plugin-single-instance` | `2.4.1` | MIT |

## Rust build-time dependencies

| Crate | Version | License |
| --- | ---: | --- |
| `tauri-build` | `2.5.6` | MIT |

Rust transitive dependencies are resolved through `src-tauri/Cargo.lock` and
remain subject to their respective upstream licenses and notice requirements.
