# Zyneon Desktop [![v27/0.12: Alpha](https://img.shields.io/badge/v27/0.12-Alpha-orange.svg)](#) [![AGPLv3 License](https://img.shields.io/badge/License-AGPL%203-yellow.svg)](https://github.com/zyneonstudios/desktop/blob/main/LICENSE.md)

[![NodeJS](https://img.shields.io/badge/nodejs-26.2.0-green?style=for-the-badge)](https://nodejs.org/en/download)
[![PNPM](https://img.shields.io/badge/pnpm-11.5.1-blue?style=for-the-badge)](https://pnpm.io/installation)
[![Rust](https://img.shields.io/badge/Rust-1.69.0-yellow?style=for-the-badge)](https://www.rust-lang.org/tools/install)



**Zyneon Desktop** is an instance-based Minecraft modding utility and launcher featuring a modern, sleek user interface.

It is the official successor to the [NEXUS App](https://github.com/nerotvlive/nexus-app). As this project is a complete rewrite, we recommend using the NEXUS App for production use while this version is under heavy development.

> [!WARNING]
> **Early Stage Development:** Zyneon Desktop is currently **not production-ready**. At this moment, it serves primarily for development purposes and demonstrating the new UI concept.

---

## Contents
* [Concept](#concept)
* [Installation](#installation-and-building)
  * [Downloads](#downloads)
  * [Building](#building-from-source-development)
  * [Contributing](#contributing)
* [Project Identity](#project-identity)
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

> [!WARNING]
> **Read carefully** and make **absolutely sure** that you follow the steps **in the order given here!**

To build Zyneon Desktop locally, you will need the following prerequisites:

| Tool                | Version                                                | Link                                                     |
|:--------------------|:-------------------------------------------------------|:---------------------------------------------------------|
| **FIRST: Tauri v2** | **Read carefully**<br>Search for your operating system | [See here](https://v2.tauri.app/start/prerequisites/)    |
| **Node.js**         | `>=26.2.0`                                             | [nodejs.org](https://nodejs.org/)                        |
| **pnpm**            | `>=11.5.1`                                             | [pnpm.io](https://pnpm.io/)                              |
| **Rust**            | `>=1.96.0`                                             | [rust-lang.org](https://www.rust-lang.org/tools/install) |

> [!WARNING]
> **(RE)start your IDE. If the commands (pnpm, node) are not available, make shure you've installed them and restart your IDE or restart your system!**

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

## Project Identity

Project authorship is tracked in [AUTHORS](AUTHORS).
Attribution and third-party notices are collected in [NOTICE](NOTICE).
Branding and trademark usage rules are documented in [BRANDING.md](BRANDING.md).
Third-party packages and dependency notices are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

---

## Contact
Have questions or want to provide feedback?

* A Discord server is the works. Coming soon.
* **Direct Contact:** `@nerotvlive` (via Discord)

---
*Zyneon Desktop is an independent project and not affiliated with Minecraft, Mojang AB, Mojang Studios, XBOX, XBOX Game Studios, Microsoft, Rinth Inc., Spark Universe, Modrinth, Overwolf or CurseForge.*
