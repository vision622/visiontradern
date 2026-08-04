import { getImageLocation } from '../../public-path';
import { localize } from '@deriv-com/translations';
import { TDescriptionItem } from '../../pages/bot-builder/quick-strategy/types';

export const OVER_UNDER_DIGITS = (): TDescriptionItem[] => [
    {
        type: 'subtitle',
        content: [localize('Executing the Over/Under digits strategy')],
        expanded: true,
        no_collapsible: false,
    },
    {
        type: 'text',
        content: [
            localize(
                'The bot reads the latest tick digit and places four over/under contracts in the same tick. If the digit is 4 or lower, the under-side contracts are prioritised. If the digit is 5 or higher, the over-side contracts are prioritised.'
            ),
        ],
    },
    {
        type: 'subtitle',
        content: [localize('How it works')],
    },
    {
        type: 'text',
        content: [
            localize('1. The bot checks the last digit of the current tick.'),
            localize('2. When the digit is 4 or lower, it opens Under 4 and Under 5 trades first.'),
            localize('3. When the digit is 5 or higher, it opens Over 4 and Over 5 trades first.'),
            localize('4. Each contract uses an independent stake progression so the four entries can run together in a single tick.'),
        ],
    },
    {
        type: 'media',
        src: getImageLocation('martingale.svg'),
        alt: localize('Over/Under digits strategy illustration'),
    },
];
