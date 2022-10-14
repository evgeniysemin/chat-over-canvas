import { SaluteHandler, SaluteRequest } from '@salutejs/scenario';

export const runAppHandler: SaluteHandler<SaluteRequest> = ({ res }) => {
    
};

export const noMatchHandler: SaluteHandler = ({ res }) => {
    res.setPronounceText('Я не понимаю');
    res.appendBubble('Я не понимаю');
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
