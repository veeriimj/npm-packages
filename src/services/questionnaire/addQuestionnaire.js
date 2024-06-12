import request from '../../utils/request'

export function addQuestionnaire(userId, data) {
    return request.post(
        `/user/${userId}/questionnaire`,
        data,
    );
}
