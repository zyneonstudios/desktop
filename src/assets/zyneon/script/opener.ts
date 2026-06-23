import { openUrl } from '@tauri-apps/plugin-opener';

export class opener {

    openWithDefault = async (url: string): Promise<void> => {
        await openUrl(url);
    }
}

export const Opener = new opener();