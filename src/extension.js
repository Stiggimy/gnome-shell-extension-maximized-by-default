import Meta from 'gi://Meta';
import * as Config from 'resource:///org/gnome/shell/misc/config.js';

export default class MaximizedByDefaultExtension {
    enable() {
        global.display.connectObject('window-created', (display, window) => {
            window?.connectObject('shown', window => {
                if (window?.get_window_type() === Meta.WindowType.NORMAL && window?.can_maximize()) {
                    
                    const [major] = Config.PACKAGE_VERSION.split('.');
                    
                    if (parseInt(major) >= 47) {
                        window.maximize();
                    } else {
                        window.maximize(Meta.MaximizeFlags.BOTH);
                    }

                    window?.disconnectObject(this);
                }
            }, this);
        }, this);
    }

    disable() {
        global.display.disconnectObject(this);
    }
}