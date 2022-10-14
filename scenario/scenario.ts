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

import { TEXT_WITHOUT_FORCE_EXPAND, TEXT_WITH_FORCE_EXPAND, CARD } from './intents';
import { handleTextWithoutForceExpand, handleTextWithForceExpand, handleCard, noMatchHandler, runAppHandler } from './handlers';

const { text } = createMatchers<SaluteRequest>();

const userScenario = createUserScenario({
    GetInitialTags: {
        match: text(TEXT_WITHOUT_FORCE_EXPAND),
        handle: handleTextWithoutForceExpand,
    },
    SelectTag: {
        match: text(TEXT_WITH_FORCE_EXPAND),
        handle: handleTextWithForceExpand,
    },
    SelectTagAction: {
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
