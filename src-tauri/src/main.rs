// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use serde::{Deserialize, Serialize};
use tauri::Manager;
use tauri_plugin_single_instance::init;

#[tauri::command]
fn get_minecraft_versions() -> Vec<String> {
  vec!["1.20.1".into(), "1.19.4".into(), "1.8.9".into()]
}

#[derive(Serialize, Deserialize)]
struct ModrinthProject {
  title: String,
  description: String,
  downloads: i32,
}

#[tauri::command]
async fn search_modrinth(query: String) -> Result<Vec<ModrinthProject>, String> {
  let url = format!("https://api.modrinth.com/v2/search?query={}", query);

  let client = reqwest::Client::new();
  let response = client
      .get(url)
      .header("User-Agent", "ZyneonLauncher/1.0 (contact@zyneon.com)") // Modrinth verlangt einen User-Agent!
      .send()
      .await
      .map_err(|e| e.to_string())?;

  let json: serde_json::Value = response.json().await.map_err(|e| e.to_string())?;

  // Wir extrahieren nur die "hits" aus der Antwort
  let hits = serde_json::from_value::<Vec<ModrinthProject>>(json["hits"].clone())
      .map_err(|e| e.to_string())?;

  Ok(hits)
}

fn main() {
  tauri::Builder::default()
      .plugin(init(|app, args, cwd| {
        println!("Instance create request: {:?} in {}", args, cwd);
        let _ = app.get_webview_window("main").map(|w| {
          let _ = w.unminimize();
          let _ = w.set_focus();
        });
      }))
      .invoke_handler(tauri::generate_handler![get_minecraft_versions,search_modrinth])
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}