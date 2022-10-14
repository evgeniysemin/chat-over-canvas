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

import { handleTextWithoutForceExpand, handleTextWithForceExpand, handleCard, noMatchHandler, runAppHandler } from './handlers';

const { regexp } = createMatchers<SaluteRequest>();

const userScenario = createUserScenario({
    GetInitialTags: {
        match: regexp(/Текст без force_expand/i),
        handle: handleTextWithoutForceExpand,
    },
    SelectTag: {
        match: regexp(/Текст с force_expand/i),
        handle: handleTextWithForceExpand,
    },
    SelectTagAction: {
        match: regexp(/Карточка/i),
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
