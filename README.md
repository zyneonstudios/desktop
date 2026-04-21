# Zyneon Desktop `v27/0.11 (alpha)`

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://github.com/zyneonstudios/desktop/blob/main/LICENSE.md)
[![Status: Alpha](https://img.shields.io/badge/Status-Alpha-orange.svg)](#)

**Zyneon Desktop** is an instance-based Minecraft modding utility and launcher featuring a modern, sleek user interface.

It is the official successor to the [NEXUS App](https://github.com/nerotvlive/nexus-app). As this project is a complete rewrite, we recommend using the NEXUS App for production use while this version is under heavy development.

> [!WARNING]
> **Early Stage Development:** Zyneon Desktop is currently **not production-ready**. At this moment, it serves primarily for development purposes and demonstrating the new UI concept.

---

## 📌 Contents
* [Concept](#concept)
* [Installation](#installation-and-building)
  * [Downloads](#downloads)
  * [Building](#building-from-source-development)
  * [Contributing](#contributing)
* [Roadmap](#roadmap)
* [Contact & Feedback](#contact)

---

## Concept
Zyneon Desktop focuses on performance and modern design. By utilizing **Tauri**, we combine the security and speed of **Rust** with a highly flexible **Vue.js** frontend.

---

## Installation and Building
Since there are no official stable releases yet, you can either use automated nightly builds or build the project locally.
<br> **Warning:** These builds aren't signed yet. Expect your operating system to dislike it.

### Downloads
Automatically generated builds for macOS (ARM/x64), Linux (x64), and Windows (ARM/x64) can be found here:
[**View Releases**](https://github.com/zyneonstudios/desktop/releases)

### Building from Source (Development)
To build Zyneon Desktop locally, you will need the following prerequisites:

| Tool                | Version | Link                                                     |
|:--------------------| :--- |:---------------------------------------------------------|
| **FIRST: Tauri v2** | Prereqs | [See here](https://v2.tauri.app/start/prerequisites/)    |
| **Node.js**         | `>=24.14.1` | [nodejs.org](https://nodejs.org/)                        |
| **pnpm**            | `>=10.33.0` | [pnpm.io](https://pnpm.io/)                              |
| **Rust**            | `>=1.77.2` | [rust-lang.org](https://www.rust-lang.org/tools/install) |

After you installed these, you can clone the repository (or fork it first) to your local machine.<br>
Open it with RustRover or VSCode (or any other IDE that supports Rust and JavaScript/TypeScript) and run the following commands in the project root folder:

To setup the project:
```
pnpm install
```

To run the application:
```
pnpm run tauri dev
```

To build the application
```
pnpm run tauri build
```

### Contributing
Contributions of any kind are welcome! We are currently looking for new team members to help build the next generation of modding utilities.

1. Fork the repository.
3. Open a **Pull Request** or [contact us](#contact) first to coordinate.

---

## Roadmap

### Milestone 1: Basic Structure & UI Prototype
- [x] Repository setup & CI/CD (GitHub Actions)
- [x] Tech stack definition (Tauri, Vite, Vue, Tailwind)
- [x] Custom titlebar & window controls
- [x] Main menu logic (Sidebar)
- [ ] **UI Integration of Core Pages:**
  - [ ] Dashboard (Start + News)
  - [ ] Discover (+Search)
  - [ ] Downloads Manager
  - [ ] Library (Instance Management)
  - [ ] Settings

### Milestone 2: not defined yet
- [ ] Expand the Roadmap (wip)

---

## Contact
Have questions or want to provide feedback?

* **Discord (Support & Community):** [Join our Server](https://discord.gg/hSNSa8Qu4r)
* **Direct Contact:** `@nerotvlive` (via Discord)

---
*Zyneon Desktop is an independent project and not affiliated with Mojang AB or Microsoft.*