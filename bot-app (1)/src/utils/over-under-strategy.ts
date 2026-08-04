export type TOverUnderTradePlan = {
    contract: 'DIGITUNDER' | 'DIGITOVER';
    prediction: number;
    stake: number;
};

const DEFAULT_STAKE_MULTIPLIERS = [1, 1.1, 1.2, 1.3];

export const buildOverUnderTradePlan = (lastDigit: number, baseStake: number): TOverUnderTradePlan[] => {
    const normalizedDigit = Number(lastDigit);
    const normalizedStake = Number(baseStake);
    const isUnderBias = normalizedDigit <= 4;

    const underTrades = [
        { contract: 'DIGITUNDER' as const, prediction: 4, stake: normalizedStake },
        { contract: 'DIGITUNDER' as const, prediction: 5, stake: normalizedStake * 1.1 },
    ];

    const overTrades = [
        { contract: 'DIGITOVER' as const, prediction: 4, stake: normalizedStake * 1.2 },
        { contract: 'DIGITOVER' as const, prediction: 5, stake: normalizedStake * 1.3 },
    ];

    if (isUnderBias) {
        return [...underTrades, ...overTrades];
    }

    return [...overTrades, ...underTrades];
};
