<script setup lang="ts">
import '../assets/zyneon/css/tools.css';
import { ZyneonSettings } from "../assets/zyneon/script/settings.ts";
import CardStructured from "../components/shared/desktopelements/CardStructured.vue";
import Badge from "../components/shared/desktopelements/Badge.vue";
import { WebviewWindow } from '@tauri-apps/api/webviewWindow';

async function cloneWindow() {
  const windowLabel = crypto.randomUUID();
  const webview = new WebviewWindow(windowLabel, {
    url: 'index.html',
    title: "Zyneon Desktop",
    width: 1280,
    height: 800,
    minWidth: 1100,
    minHeight: 700,
    resizable: true,
    fullscreen: false,
    decorations: false,
    shadow: true,
    transparent: true
  });

  await webview.once('tauri://created', () => {
    console.log('Cloned Zyneon Desktop window');
  });

  await webview.once('tauri://error', (e) => {
    console.error('Error cloning Zyneon Desktop window:', e);
  });
}

async function launchTool(toolName: string) {
  const allWindows = await WebviewWindow.getAll();
  const existingWindow = allWindows.find(w => w.label === toolName);

  if (existingWindow) {
    await existingWindow.unminimize();
    await existingWindow.show();
    await existingWindow.setFocus();
  } else {
    const serwin = new WebviewWindow(toolName, {
      url: 'index.html?'+toolName+'=true',
      title: 'Zyneon Desktop '+toolName,
      width: 1280,
      height: 800,
      minWidth: 1100,
      minHeight: 700,
      resizable: true,
      fullscreen: false,
      decorations: false,
      shadow: true,
      transparent: true
    });

    await serwin.once('tauri://created', () => {
      console.log('Created '+toolName+' window...');
    });

    await serwin.once('tauri://error', (e) => {
      console.error('Error creating '+toolName+' window:', e);
    });
  }
}
</script>

<template>
  <div class="w-full h-full p-3">
    <h1 class="text-2xl font-bold mb-2">Tools & Experiments</h1>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(333px,1fr))] gap-3">
      <CardStructured class="zyn-ov-brighter-200 opacity-75 hover:opacity-100 transition-all cursor-pointer text-white" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <h2 class="text-xl font-bold flex gap-1">CommandBar<badge background="#00000075">EX</badge><badge background="#521c7875">NAP</badge></h2>
        </template>
        <template #content>
          <div class="flex w-full zyn-ov-darker-500 p-2 zyn-br-md">
            <div class="flex min-w-56">
              <strong>Enable the CommandBar</strong>
            </div>
            <div class="flex w-full justify-end align-middle items-center">
              <input type="checkbox" :checked="ZyneonSettings.useCommandbar" @change="(e) => ZyneonSettings.setCommandbar((e.target as HTMLInputElement).checked)"/>
            </div>
          </div>
        </template>
      </CardStructured>
      <CardStructured class="zyn-ov-brighter-200 opacity-75 hover:opacity-100 transition-all cursor-pointer text-white" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <h2 class="text-xl font-bold flex gap-1">DynamicPanel<badge background="#00000075">EX</badge><badge background="#521c7875">NAP</badge></h2>
        </template>
        <template #content>
          <div class="flex w-full zyn-ov-darker-500 p-2 zyn-br-md">
            <div class="flex min-w-56">
              <strong>Enable the DynamicPanel</strong>
            </div>
            <div class="flex w-full justify-end align-middle items-center">
              <input type="checkbox" :checked="ZyneonSettings.useDynamicPanel" @change="(e) => ZyneonSettings.setDynamicPanel((e.target as HTMLInputElement).checked)"/>
            </div>
          </div>
        </template>
      </CardStructured>
      <CardStructured class="zyn-ov-brighter-200 opacity-75 hover:opacity-100 transition-all cursor-pointer text-white" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <h2 class="text-xl font-bold flex gap-1 overflow-hidden whitespace-nowrap">Minecraft Launcher<badge background="#00000075">FT</badge></h2>
        </template>
        <template #content>
          <div class="flex w-full zyn-ov-darker-500 p-2 zyn-br-md">
            Not implemented yet
          </div>
        </template>
        <template #footer>
          <div class="w-100 flex justify-end">
            <button class="zyn-ov-brighter-200 px-4 py-1 zyn-br-md" style="border: 1px solid var(--zyn-ov-brighter-200);" onclick="this.classList.remove('zyn-ov-brighter-200'); this.classList.add('bg-red-900'); this.innerText = 'FAILED';">Launch</button>
          </div>
        </template>
      </CardStructured>
      <CardStructured class="zyn-ov-brighter-200 opacity-75 hover:opacity-100 transition-all cursor-pointer text-white" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <h2 class="text-xl font-bold flex gap-1 overflow-hidden whitespace-nowrap">Clone window<badge background="#00000075">EX</badge><badge background="#00000075">FT</badge></h2>
        </template>
        <template #content>
          <div class="flex w-full zyn-ov-darker-500 p-2 zyn-br-md">
            This function will create another instance of the Zyneon Desktop window
          </div>
        </template>
        <template #footer>
          <div class="w-100 flex justify-end">
            <button class="zyn-ov-brighter-200 px-4 py-1 zyn-br-md" style="border: 1px solid var(--zyn-ov-brighter-200);" @click="cloneWindow();">Clone</button>
          </div>
        </template>
      </CardStructured>
      <CardStructured class="zyn-ov-brighter-200 opacity-75 hover:opacity-100 transition-all cursor-pointer text-white" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <h2 class="text-xl font-bold flex gap-1 overflow-hidden whitespace-nowrap">SerwiN<badge background="#00000075">EX</badge><badge background="#00000075">FT</badge></h2>
        </template>
        <template #content>
          <div class="flex w-full zyn-ov-darker-500 p-2 zyn-br-md">
            Open Zyneon Desktops integration of the SerwiN game server manager
          </div>
        </template>
        <template #footer>
          <div class="w-100 flex justify-end">
            <button class="zyn-ov-brighter-200 px-4 py-1 zyn-br-md" style="border: 1px solid var(--zyn-ov-brighter-200);" @click="(e: any) => { launchTool('SerwiN'); e.target.innerText = 'Show'; }">Launch</button>
          </div>
        </template>
      </CardStructured>
      <CardStructured class="zyn-ov-brighter-200 opacity-75 hover:opacity-100 transition-all cursor-pointer text-white" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <h2 class="text-xl font-bold flex gap-1 overflow-hidden whitespace-nowrap">JSON Explorer<badge background="#00000075">EX</badge><badge background="#00000075">FT</badge></h2>
        </template>
        <template #content>
          <div class="flex w-full zyn-ov-darker-500 p-2 zyn-br-md">
            Open Zyneon Desktops integration of the new web based JSON Explorer
          </div>
        </template>
        <template #footer>
          <div class="w-100 flex justify-end">
            <button class="zyn-ov-brighter-200 px-4 py-1 zyn-br-md" style="border: 1px solid var(--zyn-ov-brighter-200);" @click="(e: any) => { launchTool('JSON-Explorer'); e.target.innerText = 'Show'; }">Launch</button>
          </div>
        </template>
      </CardStructured>
    </div>
  </div>
</template>