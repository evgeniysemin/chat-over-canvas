import { SaluteHandler, SaluteRequest } from '@salutejs/scenario';

import { TEXT_WITHOUT_FORCE_EXPAND, TEXT_WITH_FORCE_EXPAND, CARD } from './intents';

export const runAppHandler: SaluteHandler<SaluteRequest> = ({ res }) => {
    res.appendSuggestions([
        TEXT_WITHOUT_FORCE_EXPAND,
        TEXT_WITH_FORCE_EXPAND,
        CARD,
    ]);
};

export const noMatchHandler: SaluteHandler = ({ res }) => {
    res.setPronounceText('Ха-ха! Ох, как смешно!');
    res.appendBubble('Ха-ха! Ох, как смешно!');
};

export const handleTextWithoutForceExpand: SaluteHandler<SaluteRequest> = ({ res }) => {
    res.setPronounceText('Текстовое сообщение без принудительного открытия');
    res.appendBubble('Текстовое сообщение без принудительного открытия');
};

export const handleTextWithForceExpand: SaluteHandler<SaluteRequest> = ({ res }) => {
    res.setPronounceText('Текстовое сообщение с принудительным открытием');
    res.appendBubble('Текстовое сообщение с принудительным открытием', { expand_policy: 'force_expand' });
};

export const handleCard: SaluteHandler<SaluteRequest> = ({ res }) => {
    
};
