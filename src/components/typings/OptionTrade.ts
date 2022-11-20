export interface OptionTrade {
    id: string;
    tradeDate: Date;
    tradeTime: string;
    tradeSegment: string;
    optionName: string;
    quantity: number;
    buyPrice: number;
    sellPrice: number;
    stopLossPrice: number;
    targetPrice: number;
    targetStatus: string;
    emotionalTrade: string;
    tradingPatternLogics: string;
    tradeRules: string;
    exitReason: string;
    tradingReview: string;
    profitOrLoss: number;
}