import { SaluteHandler, SaluteRequest, SaluteResponse } from '@salutejs/scenario';

import { TEXT_WITHOUT_FORCE_EXPAND, TEXT_WITH_FORCE_EXPAND, CARD } from './intents';

const appendSuggestions = (res: SaluteResponse) => {
    res.appendSuggestions([
        TEXT_WITHOUT_FORCE_EXPAND,
        TEXT_WITH_FORCE_EXPAND,
        CARD,
    ]);
};

export const runAppHandler: SaluteHandler<SaluteRequest> = ({ res }) => {
    appendSuggestions(res);
};

export const noMatchHandler: SaluteHandler = ({ res }) => {
    res.setPronounceText('Ха-ха! Ох, как смешно!');
    res.appendBubble('Ха-ха! Ох, как смешно!');
    appendSuggestions(res);
};

export const handleTextWithoutForceExpand: SaluteHandler<SaluteRequest> = ({ res }) => {
    res.setPronounceText('Текстовое сообщение без принудительного открытия');
    res.appendBubble('Текстовое сообщение без принудительного открытия');
    appendSuggestions(res);
};

export const handleTextWithForceExpand: SaluteHandler<SaluteRequest> = ({ res }) => {
    res.setPronounceText('Текстовое сообщение с принудительным открытием');
    res.appendBubble('Текстовое сообщение с принудительным открытием', { expand_policy: 'force_expand' });
    appendSuggestions(res);
};

export const handleCard: SaluteHandler<SaluteRequest> = ({ res }) => {
    res.appendCard({
        type: 'list_card',
        cells: [
            {
                type: 'left_right_cell_view',
                left: { type: 'simple_left_view' },
            },
        ],
    });
    appendSuggestions(res);
};
