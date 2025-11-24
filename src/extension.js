import Meta from 'gi://Meta';

export default class MaximizedByDefaultExtension {
    enable() {
        global.display.connectObject('window-created', (display, window) => {
            window?.connectObject('shown', window => {
                if (window?.get_window_type() === Meta.WindowType.NORMAL && window?.can_maximize()) {
                    window?.maximize(Meta.MaximizeFlags.BOTH);
                    window?.disconnectObject(this);
                }
            }, this);
        }, this);
    }

    disable() {
        global.display.disconnectObject(this);
    }
}
