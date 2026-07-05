import type { StyleOptions } from '@cjdevstudios/bumbleuix-styled';
import type { InputGroupTokenSections } from '@cjdevstudios/bumbleuix-themes/types/inputgroup';

export * from '@cjdevstudios/bumbleuix-themes/types/inputgroup';

declare const addon: InputGroupTokenSections.Addon;
declare const css: InputGroupTokenSections.CSS;
declare const _default: {
    addon: InputGroupTokenSections.Addon;
    css: (options: StyleOptions) => string;
};

export { addon, css, _default as default };
