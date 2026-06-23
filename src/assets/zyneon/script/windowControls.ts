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
        await this.appWindow.toggleMaximize()
        /*if(document.getElementById("titlebar-button-maximize")) { TODO implement this behavior to its events ((un)maximize), and not the button
            if(await this.appWindow.isMaximized()) {
                // @ts-ignore
                document.getElementById("titlebar-button-maximize").innerHTML = "<i class='icon-squares-exclude'></i>";
            } else {
                // @ts-ignore
                document.getElementById("titlebar-button-maximize").innerHTML = "<i class='icon-square'></i>";
            }
        }*/
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