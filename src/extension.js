import Meta from 'gi://Meta';
import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class MaximizedByDefaultExtension extends Extension {
    enable() {
        this._windowCreatedId = global.display.connect('window-created', (d, win) => {
            // Checks if the window is of "NORMAL" type (an actual app)
            // Also checks if the window can actually be maximized
            if (win.get_window_type() === Meta.WindowType.NORMAL && win.can_maximize()) {
                // Only if both the checks return true, maximize the window
                win.maximize(Meta.MaximizeFlags.HORIZONTAL | Meta.MaximizeFlags.VERTICAL);
            }
        });
    }

    disable() {
        if (this._windowCreatedId) {
            global.display.disconnect(this._windowCreatedId);
            this._windowCreatedId = null;
        }
    }
}