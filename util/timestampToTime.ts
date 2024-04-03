export default function timestampToTime(timestamp: number) {
    let minutes = Math.floor(timestamp / 60000);
    let seconds = Math.round((timestamp % 60000) / 1000)

    return `${minutes}:${seconds}`
}