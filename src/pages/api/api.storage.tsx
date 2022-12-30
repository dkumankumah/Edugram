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

export function decodeJWT(jwt: string) {

    if (jwt){
        let jwtData = jwt.split('.')[1]
        let decodedJwtJsonData = window.atob(jwtData)
        let decodedJwtData = JSON.parse(decodedJwtJsonData)

        // console.log('jwtData: ' + jwtData)
        // console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
        // console.log('decodedJwtData: ' + decodedJwtData)

        return decodedJwtData
    }

    window.location.href = '../pages/notFoundPage.tsx'

}

export function isAdmin(jwt: string): boolean {
    let isAdmin = decodeJWT(jwt)
    return isAdmin === 'admin'
}
export function isStudent(jwt: string): boolean {
    let isStudent = decodeJWT(jwt).role
    return isStudent === 'student'
}

export function isTutor(jwt: string): boolean {
    let isTutor = decodeJWT(jwt).role
    return isTutor === 'tutor'
}
