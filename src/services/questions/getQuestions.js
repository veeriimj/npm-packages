import request from '../../utils/request'

export function getQuestions(userId, params) {
    return request.get(`/user/${userId}/question`, {
        params,
    });
}
