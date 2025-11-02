import Meta from 'gi://Meta';

export default class MaximizedByDefaultExtension {
    enable() {
        global.display.connectObject('window-created', (display, window) => {
            // Checks if the window is of "NORMAL" type (an actual app)
            // Also checks if the window can actually be maximized
            if (window.get_window_type() === Meta.WindowType.NORMAL && window.can_maximize()) {
                window.maximize(Meta.MaximizeFlags.HORIZONTAL | Meta.MaximizeFlags.VERTICAL);
            }
        }, this);
    }

    disable() {
            global.display.disconnectObject(this);
    }
}
