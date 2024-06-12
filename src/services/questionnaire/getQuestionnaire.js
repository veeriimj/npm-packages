import request from '../../utils/request'


export function getQuestionnaire(userId, params) {
    return request.get(
        `/user/${userId}/questionnaire`,
        {
            params,
        },
    );
}
