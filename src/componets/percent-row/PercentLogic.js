function calculatePercent(total, partial) {
    if (partial === 0) {
        return 0
    }
    return parseInt(partial * 100 / total)
}

export default calculatePercent