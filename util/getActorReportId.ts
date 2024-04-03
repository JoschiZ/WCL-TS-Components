export default function getActorReportId(name: string){
    const actor = reportGroup.actors.find(actor => actor.name === name)
    if (actor){
        return actor.idInReport
    }
    throw new Error("Could not find the Actor name in report: " + name)
}