

export const userAuthHeader = (token) => {
    return {
        'Authorization': `Bearer ${token}`
    }
}
