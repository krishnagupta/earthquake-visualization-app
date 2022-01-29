import client from './client'

const get = (url: string, requestOptions: Object) => {
    const customConfig = {
        method: 'GET',
        ...requestOptions,
    }
    
    return client(url, customConfig)
}

export {
    get
}