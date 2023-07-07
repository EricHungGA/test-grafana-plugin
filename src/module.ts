import { PanelPlugin } from '@grafana/data';
import { PanelOptions } from './types';
import { imagePanel } from './components/imagePanel/imagePanel';

export const plugin = new PanelPlugin<PanelOptions>(imagePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'url',
      name: 'Image URL',
      defaultValue: 'https:// ',
    })
});
