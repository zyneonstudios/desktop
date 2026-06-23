<script setup lang="ts">
import '../assets/zyneon/css/dashboard.css';
import CardStructured from "../components/shared/desktopelements/CardStructured.vue";
import { Opener } from "../assets/zyneon/script/opener.ts"
import SpacerHorizontalTitled from "../components/shared/desktopelements/SpacerHorizontalTitled.vue";
import Card from "../components/shared/desktopelements/Card.vue";
import CardCollapsable from "../components/shared/desktopelements/CardCollapsable.vue";
</script>

<template>
  <div class="w-full h-full p-3">
    <SpacerHorizontalTitled title="Important" />
    <div class="flex gap-3 pb-3">
      <CardStructured @click="Opener.openWithDefault('https://github.com/zyneonstudios/desktop/issues/new')" class="bg-red-900 w-full opacity-75 hover:opacity-100 transition-all cursor-pointer text-white" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <strong>
            Warning <i class="icon-message-square-warning absolute pl-1"></i>
          </strong>
        </template>
        <template #content>
          <p>
            This application is in a very early stage of development – please use it with caution.<br>
            Report any issues you encounter to the developers on GitHub to support the project and help improve it.<br>
          </p>
        </template>
        <template #footer>
          <strong class="zyn-ov-darker-400 px-3 zyn-br-sm">Just click here to report an issue on GitHub</strong>
        </template>
      </CardStructured>
      <CardStructured class="bg-blue-900 w-full opacity-65 text-white" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <strong>
            Note <i class="icon-info absolute pl-1"></i>
          </strong>
        </template>
        <template #content>
          <p>
            We are actively working on this project and welcome any feedback or contributions.<br>
            If you want to join this project, please contact us via GitHub or contact our leader on Discord.<br>
            <span class="px-1 zyn-br-sm opacity-10 hover:opacity-100 transition-all bg-transparent hover:bg-gray-800">(a server is in the works)</span><br>
          </p>
        </template>
        <template #footer>
          <strong>@nerotvlive</strong>
        </template>
      </CardStructured>
    </div>
    <SpacerHorizontalTitled title="Changelogs" />
    <div class="pb-3">
      <Card @click="Opener.openWithDefault('https://github.com/zyneonstudios/desktop/commits/main/')" border="1px solid var(--zyn-ov-brighter-200)" class="opacity-65 hover:opacity-100 transition-all cursor-pointer bg-yellow-600 w-fit py-1 px-2 text-white">(Work in progress) See GitHub commit history for now</Card>
    </div>
    <SpacerHorizontalTitled title="To-do's" />
    <div class="pb-3 flex flex-col gap-2">
      <CardCollapsable class="zyn-ov-brighter-200" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <strong>
            General to-do's
          </strong>
        </template>
        <template #content>
          <strong>Dynamic panel:</strong>
          <ul class="list-disc pl-5">
            <li>Reevaluate existence</li>
          </ul>
          <br>
          <strong>Server, console and CommandBar:</strong>
          <ul class="list-disc pl-5">
            <li>Integrate Zyneon Desktop server with command support as a background task</li>
            <li>Allow console to send commands to server (/)</li>
            <li>Connect CommandBar to the server and add console viewer/feedback to the UI.</li>
          </ul>
          <br>
          <strong>Minecraft integration:</strong>
          <ul class="list-disc pl-5">
            <li>Multi-account authentication</li>
            <li>Installation</li>
            <li>Launching</li>
            <li>Management</li>
            <li>Fabric support</li>
            <li>Forge support</li>
            <li>NeoForge support</li>
            <li>Quilt support</li>
            <li>Custom modloader support</li>
            <li>evaluate more modloaders</li>
            <li>Import from NEXUS App, Modrinth App, CurseForge App, Prism and Minecraft Launcher options</li>
          </ul>
          <br>
          <strong>Tool instances:</strong>
          <ul class="list-disc pl-5">
            <li>Add a Markdown editor</li>
            <li>Allow custom instances to add custom programs</li>
          </ul>
          <br>
          List is work in progress/possible incomplete
        </template>
      </CardCollapsable>

      <CardCollapsable class="zyn-ov-brighter-200" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <strong>
            Dashboard to-do's
          </strong>
        </template>
        <template #content>
          List is coming soon (w.i.p.)
        </template>
      </CardCollapsable>

      <CardCollapsable class="zyn-ov-brighter-200" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <strong>
            Discover to-do's
          </strong>
        </template>
        <template #content>
          List is coming soon (w.i.p.)
        </template>
      </CardCollapsable>

      <CardCollapsable class="zyn-ov-brighter-200" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <strong>
            Library to-do's
          </strong>
        </template>
        <template #content>
          <strong>Side-menu:</strong>
          <ul class="list-disc pl-5">
            <li>Togglable active state</li>
            <li>Togglable side (left/right)</li>
            <li>Actions (Add/Remove, right/double click, import, dragging)</li>
            <li>Sortable and searchable instance list</li>
            <li>Togglable grouping</li>
          </ul>
          <br>
          <strong>Overview:</strong>
          <ul class="list-disc pl-5">
            <li>Show instead of instance view when active</li>
            <li>Changeable view modes (row, table, grid)</li>
            <li>Actions (Add/Remove, right/double click, import)</li>
            <li>Sortable and searchable</li>
            <li>Togglable grouping</li>
          </ul>
          <br>
          <strong>Instance view:</strong>
          <ul class="list-disc pl-5">
            <li>Show instead of overview when active</li>
            <li>Instance card (launch/tags/icon/short description/etc)</li>
            <li>Instance overview/readme</li>
            <li>Instance content (mods/maps/servers/shaders/resourcepacks/etc)</li>
            <li>Instance content management (add/remove/disable/update)</li>
            <li>Instance actions (start/stop/restart/kill/open folder(s))</li>
            <li>Instance folder/file browser</li>
            <li>Instance settings (link/name/version/mc ver/ml type/ml ver/java/etc)</li>
            <li>Instance versions (if linked, or saved)</li>
            <li>Instance gallery (linked images/screenshots)</li>
            <li>Instance logs</li>
            <li>Instance links (source/github/socials/etc)</li>
          </ul>
          <br>
          List is work in progress/possible incomplete
        </template>
      </CardCollapsable>

      <CardCollapsable class="zyn-ov-brighter-200" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <strong>
            Settings to-do's
          </strong>
        </template>
        <template #content>
          List is coming soon (w.i.p.)
        </template>
      </CardCollapsable>

      <CardCollapsable class="zyn-ov-brighter-200" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <strong>
            Downloads to-do's
          </strong>
        </template>
        <template #content>
          List is coming soon (w.i.p.)
        </template>
      </CardCollapsable>

      <CardCollapsable class="zyn-ov-brighter-200" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <strong>
            Other to-do's
          </strong>
        </template>
        <template #content>
          List is coming soon (w.i.p.)
        </template>
      </CardCollapsable>
    </div>
  </div>
</template>