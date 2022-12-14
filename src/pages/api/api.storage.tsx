export function getToken() {
    return localStorage.getItem('token')
}

export function setToken(token: string) {
    localStorage.setItem('token', token)
}

export function isAuthenticated() {
    return getToken() != null
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.clear()
    window.location.href = '/'
}

export function decodeJWT() {
    let jwt = localStorage.getItem('token')

    if (jwt){
        let jwtData = jwt.split('.')[1]
        let decodedJwtJsonData = window.atob(jwtData)
        let decodedJwtData = JSON.parse(decodedJwtJsonData)

        console.log('jwtData: ' + jwtData)
        console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
        console.log('decodedJwtData: ' + decodedJwtData)

        return decodedJwtData
    }

    window.location.href = '../pages/notFoundPage.tsx'

}

export function isAdmin(): boolean {
    let isAdmin = decodeJWT().role
    return isAdmin === 'admin'
}
export function isStudent(): boolean {
    let isStudent = decodeJWT().role
    return isStudent === 'student'
}

export function isTutor(): boolean {
    let isTutor = decodeJWT().role
    return isTutor === 'tutor'
}
