import request from '../../utils/request'

export function addQuestionResponse(userId, data) {
    return request.post(
        `/user/${userId}/questionResponse`,
        data,
    );
}
