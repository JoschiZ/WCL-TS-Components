interface TemplateConfig {
    /**
     * Config options for the included custom plugins. Omitting a plugin or assigning a falsy value will deactivate it.
     */
    plugins: {
        clearSource?: false | ClearSourcePluginOptions
        exportString?: boolean
        autoTest?: false | AutoTestPluginOption
    },
    /**
     * This allows to assign individual sizes or static ids to your components.
     * It takes the component name (The file name without any endings).
     */
    components: {[componentName: string]: Omit<Component, "component">},

}

interface AutoTestPluginOption {
    active: boolean
    loginMethod: "WCL" | "USA" | "EUROPE" | "KOREA" | "TAIWAN"
    /**This url has to lead directly to the component view (ends with &view=components)*/
    components: {[componentName: string]: string}
}

interface ClearSourcePluginOptions {
    /**
     * If true the source code will be LZString compressed and Base64Encoded
     * @deprecated This option will be ignored and resulting output will always be compressed
     */
    compress?: boolean
}

export interface Component {
    /**
     * The Components UUID
     */
    i: string

    /**
     * Width of the component, default 1
     */
    w: number

    /**
     * Height of the component, default 2
     */
    h: number


    component: {
        /**
         * Base64 encoded LZString compressed code of the component
         */
        script: string
    }
}