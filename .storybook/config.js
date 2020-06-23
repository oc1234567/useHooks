import { configure } from '@storybook/react';

const req = require.context('../stories/', true, /\.js$/);

function importAll(r) {
    r.keys().forEach((filename) => req(filename))
}
configure(() => {
    importAll(req)
}, module);
