import { getCurrentWindow, Window } from '@tauri-apps/api/window';

export class windowControls {
    private appWindow: Window;

    constructor() {
        this.appWindow = getCurrentWindow();
    }

    async minimize(): Promise<void> {
        await this.appWindow.minimize();
    }

    async maximize(): Promise<void> {
        await this.appWindow.maximize();
    }

    async unmaximize(): Promise<void> {
        await this.appWindow.unmaximize();
    }

    async toggleMaximize(): Promise<void> {
        await this.appWindow.toggleMaximize();
    }

    async enableFullscreen(): Promise<void> {
        await this.appWindow.setFullscreen(true);
    }

    async disableFullscreen(): Promise<void> {
        await this.appWindow.setFullscreen(false);
    }

    async toggleFullscreen(): Promise<void> {
        const fullscreen = await this.appWindow.isFullscreen();
        await this.appWindow.setFullscreen(!fullscreen);
    }

    async close(): Promise<void> {
        await this.appWindow.close();
    }

    openMenu(menuId: string): void {
        const nav = document.getElementById(menuId);
        if (nav) nav.classList.add("active");
    }

    closeMenu(menuId: string): void {
        const nav = document.getElementById(menuId);
        if (nav) nav.classList.remove("active");
    }

    toggleMenu(menuId: string): void {
        const nav = document.getElementById(menuId);
        if (nav) nav.classList.toggle("active");
    }
}

export const WindowControls = new windowControls();