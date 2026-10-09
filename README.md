# Maximized by default actually reborn

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GNOME Shell](https://img.shields.io/badge/GNOME-45--51-blue.svg)](https://www.gnome.org)
A simple GNOME Shell extension that maximizes all new application windows on launch.

This is a **revived** fork of the original [Maximized by default by aXe1](https://github.com/aXe1/gnome-shell-extension-maximized-by-default) and its subsequent ["reborn" fork](https://github.com/brennoflavio/gnome-shell-extension-maximized-by-default), all of which are no longer maintained.

This new version is **updated up to GNOME 51** and **fixes an annoying bug**: it now *only* maximizes real application windows, while correctly ignoring context menus, dialogs, and other pop-ups.


## Installation

There are two ways to install this extension.

### Method 1: GNOME Extensions Website (Recommended)

The easiest way is to install it from the official GNOME Extensions website:

1.  Visit the extension page at [**extensions.gnome.org**](https://extensions.gnome.org/extension/8756/maximized-by-default-actually-reborn/)
2.  Click the "ON" switch.

You can also search for "Maximized by default actually reborn" directly from the **Extension Manager** app on your desktop.

### Method 2: Install from Source (Manual)

If you prefer to install from source or want to test the latest development version:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Stiggimy/gnome-shell-extension-maximized-by-default.git
    cd gnome-shell-extension-maximized-by-default
    ```

2.  **Make script executable and deploy:**
    ```bash
    chmod +x deploy.sh
    ./deploy.sh
    ```
    This script will package the extension in the `dist/` folder and install it to your user extension directory (`~/.local/share/gnome-shell/extensions/`).

3.  **Restart GNOME Shell or Log Out/In:**
    On Wayland (GNOME 50+ / standard modern Wayland sessions), log out and log back in (or on X11, press `Alt` + `F2`, type `r`, and press `Enter`).

4.  **Enable the extension:**
    Open the **Extensions** app (`gnome-extensions-app`) and enable "Maximized by default actually reborn" (or run `gnome-extensions enable gnome-shell-extension-maximized-by-default@stiggimy.github.com`).

## Attribution and License

This extension would not exist without the original work of **[aXe1](https://github.com/aXe1)** and **[brennoflavio](https://github.com/brennoflavio)**.

This project is licensed under the **MIT License**, consistent with the original. See the [LICENSE](LICENSE) file for the full text.
