import { buildOverUnderTradePlan } from '../over-under-strategy';

describe('buildOverUnderTradePlan', () => {
    it('builds the under-side trades when the last digit is 4 or lower', () => {
        expect(buildOverUnderTradePlan(4, 1)).toEqual([
            { contract: 'DIGITUNDER', prediction: 4, stake: 1 },
            { contract: 'DIGITUNDER', prediction: 5, stake: 1.1 },
            { contract: 'DIGITOVER', prediction: 4, stake: 1.2 },
            { contract: 'DIGITOVER', prediction: 5, stake: 1.3 },
        ]);
    });

    it('builds the over-side trades when the last digit is 5 or higher', () => {
        expect(buildOverUnderTradePlan(5, 2)).toEqual([
            { contract: 'DIGITOVER', prediction: 4, stake: 2 },
            { contract: 'DIGITOVER', prediction: 5, stake: 2.2 },
            { contract: 'DIGITUNDER', prediction: 4, stake: 2.4 },
            { contract: 'DIGITUNDER', prediction: 5, stake: 2.6 },
        ]);
    });
});
