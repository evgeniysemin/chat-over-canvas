import {
    createUserScenario,
    createSystemScenario,
    createSaluteRequest,
    createSaluteResponse,
    createScenarioWalker,
    createMatchers,
    SaluteRequest,
    NLPRequest,
    NLPResponse,
} from '@salutejs/scenario';
import { SaluteMemoryStorage } from '@salutejs/storage-adapter-memory';

import {
    handleTextWithoutForceExpand,
    handleTextWithForceExpand,
    handleOneLineText,
    handleTwoLinesText,
    handleThreeLinesText,
    handleLongText,
    handleCard,
    noMatchHandler,
    runAppHandler,
} from './handlers';
import {
    TEXT_WITHOUT_FORCE_EXPAND,
    TEXT_WITH_FORCE_EXPAND,
    ONE_LINE_TEXT,
    TWO_LINES_TEXT,
    THREE_LINES_TEXT,
    LONG_TEXT,
    CARD,
} from './intents';

const { text } = createMatchers<SaluteRequest>();

const userScenario = createUserScenario({
    TextWithoutForceExpand: {
        match: text(TEXT_WITHOUT_FORCE_EXPAND),
        handle: handleTextWithoutForceExpand,
    },
    TextWithForceExpand: {
        match: text(TEXT_WITH_FORCE_EXPAND),
        handle: handleTextWithForceExpand,
    },
    OneLineText: {
        match: text(ONE_LINE_TEXT),
        handle: handleOneLineText,
    },
    TwoLinesText: {
        match: text(TWO_LINES_TEXT),
        handle: handleTwoLinesText,
    },
    ThreeLinesText: {
        match: text(THREE_LINES_TEXT),
        handle: handleThreeLinesText,
    },
    LongText: {
        match: text(LONG_TEXT),
        handle: handleLongText,
    },
    Card: {
        match: text(CARD),
        handle: handleCard,
    },
});

const scenarioWalker = createScenarioWalker({
    systemScenario: createSystemScenario({
        RUN_APP: runAppHandler,
        NO_MATCH: noMatchHandler,
    }),
    userScenario,
});

const storage = new SaluteMemoryStorage();

export const handleNlpRequest = async (request: NLPRequest): Promise<NLPResponse> => {
    const req = createSaluteRequest(request);
    const res = createSaluteResponse(request);

    const sessionId = request.uuid.userId;
    const session = await storage.resolve(sessionId);

    await scenarioWalker({ req, res, session });
    await storage.save({ id: sessionId, session });

    return res.message;
};
