declare module '@capacitor/core' {
  interface PluginRegistry {
    TouchListener: TouchListenerPlugin;
  }
}

export interface TouchListenerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
