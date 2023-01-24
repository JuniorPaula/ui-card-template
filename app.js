const defaultValues = {
    "name": "Junior Paula",
    "profession": "Software Developer",
    "email": "luke.junnior@icloud.com",
    "phone": "+554791568787",
    "website": "fake.site.com.br",
    "location": "Itajaí, SC"
}

function getQueryString() {
    const search = location.search.substring(1);
    if (!search) return null;
    const uri = decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')

    const data = JSON.parse(`{"${uri}"}`);
    return data;
}

function updateData(data) {
    Object.keys(data).forEach(key => {
        document.getElementById(key).innerHTML = data[key]
    })
}

window.onload = () => {
    const qs = getQueryString()
    if (!qs) {
        console.warn('queryString not found using default values...')
    }
    const getLength = obj => Object.keys(obj).length
    const isMissingKeysOnQueryString = getLength(defaultValues) === getLength(qs || {})
    if (!isMissingKeysOnQueryString) {
        console.warn(`All missing parameters will come from default values\nRequired parameters are`, Object.keys(defaultValues))
    }

    
    updateData({
        ...defaultValues,
        ...qs,
    })

}