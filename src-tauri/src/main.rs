// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::Manager;
use tauri_plugin_single_instance::init;
use zyneon_desktop_lib::run;

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
      .invoke_handler(tauri::generate_handler![read_local_file, check_authentication, sign_in])
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}

#[tauri::command]
async fn read_local_file(path: String) -> Result<String, String> {
    std::fs::read_to_string(&path)
        .map_err(|err| format!("Error ({}): {}", path, err))
}

#[tauri::command]
async fn check_authentication() -> bool {
    false
}

#[tauri::command]
async fn sign_in() -> &'static str {
    "error"
}