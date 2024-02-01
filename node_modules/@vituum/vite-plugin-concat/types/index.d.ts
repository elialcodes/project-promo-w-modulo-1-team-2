export interface PluginUserOptions {
    input?: string[]
    files?: {
        [key: string]: string[]
    }
}

export default function plugin(options?: PluginUserOptions) : import('vite').Plugin
