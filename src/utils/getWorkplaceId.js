

export function getWorkplaceId(){
    let workplace_id
    try {
        workplace_id = JSON.parse(localStorage.getItem('workplace')).value
    } catch (error) {
        workplace_id = null
    }
    return workplace_id
}