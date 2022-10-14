import { SaluteHandler, SaluteRequest, SaluteResponse } from '@salutejs/scenario';

import {
    TEXT_WITHOUT_FORCE_EXPAND,
    TEXT_WITH_FORCE_EXPAND,
    ONE_LINE_TEXT,
    TWO_LINES_TEXT,
    THREE_LINES_TEXT,
    LONG_TEXT,
    CARD,
} from './intents';

const appendSuggestions = (res: SaluteResponse) => {
    res.appendSuggestions([
        TEXT_WITHOUT_FORCE_EXPAND,
        TEXT_WITH_FORCE_EXPAND,
        ONE_LINE_TEXT,
        TWO_LINES_TEXT,
        THREE_LINES_TEXT,
        LONG_TEXT,
        CARD,
    ]);
};

export const runAppHandler: SaluteHandler<SaluteRequest> = ({ res }) => {
    const greeting =
        'Здравствуйте! Здесь вы можете протестировать реакцию поверхности на новые сообщения в канвас. Просто выберите нужный саджест';

    res.setPronounceText(greeting);
    res.appendBubble(greeting);
    appendSuggestions(res);
};

export const noMatchHandler: SaluteHandler = ({ res }) => {
    res.setPronounceText('Ха-ха! Я вас не понял, но ох как смешно!');
    res.appendBubble('Ха-ха! Я вас не понял, но ох как смешно!');
    appendSuggestions(res);
};

export const handleTextWithoutForceExpand: SaluteHandler<SaluteRequest> = ({ res }) => {
    res.setPronounceText(TEXT_WITHOUT_FORCE_EXPAND);
    res.appendBubble(TEXT_WITHOUT_FORCE_EXPAND);
    appendSuggestions(res);
};

export const handleTextWithForceExpand: SaluteHandler<SaluteRequest> = ({ res }) => {
    res.setPronounceText(TEXT_WITH_FORCE_EXPAND);
    res.appendBubble(TEXT_WITH_FORCE_EXPAND, { expand_policy: 'force_expand' });
    appendSuggestions(res);
};

export const handleOneLineText: SaluteHandler<SaluteRequest> = ({ res }) => {
    res.setPronounceText(ONE_LINE_TEXT);
    res.appendBubble('Lorem ipsum dolor.');
    appendSuggestions(res);
};

export const handleTwoLinesText: SaluteHandler<SaluteRequest> = ({ res }) => {
    res.setPronounceText(TWO_LINES_TEXT);
    res.appendBubble('Lorem ipsum dolor sit amet consectetur adipisicing elit.');
    appendSuggestions(res);
};

export const handleThreeLinesText: SaluteHandler<SaluteRequest> = ({ res }) => {
    res.setPronounceText(THREE_LINES_TEXT);
    res.appendBubble(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
    );
    appendSuggestions(res);
};

export const handleLongText: SaluteHandler<SaluteRequest> = ({ res }) => {
    res.setPronounceText(LONG_TEXT);
    res.appendBubble(
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    );
    appendSuggestions(res);
};

export const handleCard: SaluteHandler<SaluteRequest> = ({ res }) => {
    res.setPronounceText(CARD);
    res.appendCard({
        type: 'list_card',
        cells: [
            {
                type: 'left_right_cell_view',
                left: {
                    type: 'simple_left_view',
                    texts: {
                        title: {
                            text: 'Lorem ipsum dolor',
                            typeface: 'headline3',
                            text_color: 'default',
                            margins: {
                                left: '6x',
                                top: '4x',
                                right: '4x',
                                bottom: '4x',
                            },
                        },
                    },
                },
            },
        ],
    });
    appendSuggestions(res);
};
