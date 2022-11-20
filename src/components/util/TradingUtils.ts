export const getTradingPatternLogics = () => {

    return [
        'Descending Triangle',
        'Ascending Triangle',
        'Symmetrical Triangles',
        'Bullish Pennant',
        'Bearish Pennant',
        'Raising Wedge',
        'Falling Wedge',
        'Horizontal Channel',
        'Descending Channel',
        'Ascending Channel',
        'Symantec Pattern',
    ]
}

export const formatDate = (date: Date) => {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('-');
}

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}
