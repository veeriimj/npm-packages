import request from '../../utils/request'

export function updateQuestionnaire(userId, questionnaireId, data) {
    return request.post(
        `/user/${userId}/questionnaire/${questionnaireId}`,
        data,
    );
}
