export default class CustomLogger {
    messages: Record<string, unknown>[] = []
    debug: boolean

    constructor(debug: boolean) {
        this.debug = debug
    }

    addMessage(name: string, message: unknown){
        if(!this.debug){
            return
        }

        const messageObject: Record<string, unknown> = {}
        messageObject[name] = message
        this.messages.push(messageObject)
    }
}