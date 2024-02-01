import type { Plugin } from 'vite';
import type { PngOptions, JpegOptions, TiffOptions, GifOptions, WebpOptions, AvifOptions } from 'sharp';
import type { Config as SVGOConfig } from 'svgo';
interface Options {
    /**
     * test to match files against
     */
    test?: RegExp;
    /**
     * files to include
     */
    include?: RegExp | string | string[];
    /**
     * files to exclude
     */
    exclude?: RegExp | string | string[];
    /**
     * include assets in public dir or not
     */
    includePublic?: boolean;
    /**
     * display logs using colors or not
     */
    ansiColors?: boolean;
    /**
     * log stats to the terminal or not
     */
    logStats?: boolean;
    /**
     * svgo opts
     */
    svg?: SVGOConfig;
    /**
     * sharp opts for png
     */
    png?: PngOptions;
    /**
     * sharp opts for jpeg
     */
    jpeg?: JpegOptions;
    /**
     * sharp opts for jpg
     */
    jpg?: JpegOptions;
    /**
     * sharp opts for tiff
     */
    tiff?: TiffOptions;
    /**
     * sharp opts for gif
     */
    gif?: GifOptions;
    /**
     * sharp opts for webp
     */
    webp?: WebpOptions;
    /**
     * sharp opts for avif
     */
    avif?: AvifOptions;
    /**
     * cache optimized images or not
     */
    cache?: boolean;
    /**
     * path to the cache directory
     */
    cacheLocation?: string;
}
declare function ViteImageOptimizer(optionsParam?: Options): Plugin;
export { ViteImageOptimizer };
