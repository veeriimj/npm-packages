import request from '../../utils/request'

export function updateQuestion(userId, questionId, data) {
    return request.post(
        `/user/${userId}/question/${questionId}`,
        data,
    );
}
