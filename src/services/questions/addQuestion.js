import request from '../../utils/request'

export function addQuestion(userId, data) {
    return request.post(
        `/user/${userId}/question`,
        data,
    );
}