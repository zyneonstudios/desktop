// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::Manager;
use tauri_plugin_single_instance::init;

fn main() {
  tauri::Builder::default()
      .plugin(tauri_plugin_opener::init())
      .plugin(init(|app, args, cwd| {
        println!("Instance create request: {:?} in {}", args, cwd);
        let _ = app.get_webview_window("main").map(|w| {
          let _ = w.unminimize();
          let _ = w.set_focus();
        });
      }))
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}