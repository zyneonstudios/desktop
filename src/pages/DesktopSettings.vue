<script setup lang="ts">
import '../assets/zyneon/css/settings.css';
import { ZyneonSettings } from "../assets/zyneon/script/settings.ts";
</script>

<template>
  <div class="w-full h-full p-3">
    <h1 class="text-2xl font-bold">Settings</h1>

    <div class="flex w-full zyn-ov-darker-500 p-2 rounded-lg my-2">
      <div class="flex w-full">
        <strong>Enable CommandBar</strong>
      </div>
      <div class="flex w-full justify-end align-middle items-center">
        <input type="checkbox" :checked="ZyneonSettings.useCommandbar" @change="(e) => ZyneonSettings.setCommandbar((e.target as HTMLInputElement).checked)"/>
      </div>
    </div>

    <div class="flex w-full zyn-ov-darker-500 p-2 rounded-lg my-2">
      <div class="flex w-full">
        <strong>Enable DynamicPanel</strong>
      </div>
      <div class="flex w-full justify-end align-middle items-center">
        <input type="checkbox" :checked="ZyneonSettings.useDynamicPanel" @change="(e) => ZyneonSettings.setDynamicPanel((e.target as HTMLInputElement).checked)"/>
      </div>
    </div>

    <div class="flex w-full zyn-ov-darker-500 p-2 rounded-lg my-2">
      <div class="flex w-full">
        <strong>Select background accent color via ColorPicker</strong>
      </div>
      <div class="flex w-full justify-end align-middle items-center">
        <input type="color" class="w-10 h-10 cursor-pointer rounded border-none bg-transparent" @input="(e) => ZyneonSettings.setBackgroundAccent((e.target as HTMLInputElement).value)" :value="ZyneonSettings.getBackgroundAccent()"/>
      </div>
    </div>

    <div class="flex w-full zyn-ov-darker-500 p-2 rounded-lg my-2">
      <div class="flex w-full">
        <strong>Set background accent opacity via slider</strong>
      </div>
      <div class="flex w-full justify-end align-middle items-center">
        <input id="background-accOp-number" type="number" min="0" max="1" step="0.01" :value="ZyneonSettings.getBackgroundAccentOpacity()" @input="(e) => ZyneonSettings.setBackgroundAccentOpacity(false,parseFloat((e.target as HTMLInputElement).value))"/>
        <input id="background-accOp-range" type="range" min="0" max="1" step="0.01" :value="ZyneonSettings.getBackgroundAccentOpacity()" @input="(e) => ZyneonSettings.setBackgroundAccentOpacity(true,parseFloat((e.target as HTMLInputElement).value))"/>
      </div>
    </div>

  </div>
</template>