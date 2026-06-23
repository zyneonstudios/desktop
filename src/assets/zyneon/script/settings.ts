export class settings {

    private commandbar = true;
    private dynamicPanel = true;

    private theme = "dark";
    private backgroundAccent = "#FF00FF"
    private backgroundAccentOpacity = 0.25;
    private language = "en";

    constructor() {
        if(localStorage.getItem("useCommandbar") === "false") {
            this.commandbar = false;
        }
        if(localStorage.getItem("useDynamicPanel") === "false") {
            this.dynamicPanel = false;
        }
        const savedBgAccent = localStorage.getItem("backgroundAccent");
        if (savedBgAccent !== null) {
            this.backgroundAccent = savedBgAccent || "#FF00FF";
        }
        const savedBgAccentOpacity = localStorage.getItem("backgroundAccentOpacity");
        if (savedBgAccentOpacity !== null) {
            this.backgroundAccentOpacity = parseFloat(savedBgAccentOpacity) || 0.25;
        }
    }

    public get useCommandbar(): boolean {
        return this.commandbar;
    }

    public get useDynamicPanel(): boolean {
        return this.dynamicPanel;
    }

    public getTheme(): string {
        return this.theme;
    }

    public getBackgroundAccent(): string {
        return this.backgroundAccent;
    }

    getBackgroundAccentOpacity(): number {
        return this.backgroundAccentOpacity;
    }

    public getLanguage(): string {
        return this.language;
    }

    public setCommandbar(value: boolean) {
        this.commandbar = value;
        localStorage.setItem("useCommandbar", value.toString());
        const bar = document.getElementById("command-bar");
        if (bar) {
            if (value) {
                bar.classList.remove("hidden");
            } else {
                bar.classList.add("hidden");
            }
        }
    }

    public setDynamicPanel(value: boolean) {
        this.dynamicPanel = value;
        localStorage.setItem("useDynamicPanel", value.toString());
        const panel = document.getElementById("dynamic-panel");
        if (panel) {
            if (value) {
                panel.classList.remove("hidden");
            } else {
                panel.classList.add("hidden");
            }
        }
    }

    private getOpacity(): string {
        let opacity = this.getBackgroundAccentOpacity();
        if (opacity < 0) opacity = 0;
        if (opacity > 1) opacity = 1;
        if (opacity > 0.99) {
            return "";
        }
        const percentValue = Math.round(opacity * 100);
        return percentValue.toString().padStart(2, '0');
    }

    public setBackgroundAccent(value: string) {
        this.backgroundAccent = value;
        localStorage.setItem("backgroundAccent", value);
        value = value + this.getOpacity();
        document.documentElement.style.setProperty("--zyn-background-body", "radial-gradient(circle at bottom right, "+value+" 0%, var(--zyn-background-color) 90%)");
    }

    public setBackgroundAccentOpacity(changedViaRange:boolean,value: number) {
        this.backgroundAccentOpacity = value;
        localStorage.setItem("backgroundAccentOpacity", value.toString());
        if (changedViaRange) {
            const numberInput = document.getElementById("background-accOp-number") as HTMLInputElement;
            if (numberInput) {
                numberInput.value = value.toString();
            }
        } else {
            const rangeInput = document.getElementById("background-accOp-range") as HTMLInputElement;
            if (rangeInput) {
                rangeInput.value = value.toString();
            }
        }
        this.setBackgroundAccent(this.getBackgroundAccent());
    }
}

export const ZyneonSettings = new settings();