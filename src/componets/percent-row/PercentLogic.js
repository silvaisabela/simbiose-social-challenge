function calculatePercent(total, partial) {
    if (partial == 0) {
        return 0
    }
    return partial * 100 / total
}

export default calculatePercent