import { WebPlugin } from '@capacitor/core';
import { TouchListenerPlugin } from './definitions';

export class TouchListenerWeb extends WebPlugin implements TouchListenerPlugin {
  constructor() {
    super({
      name: 'TouchListener',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const TouchListener = new TouchListenerWeb();

export { TouchListener };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(TouchListener);
