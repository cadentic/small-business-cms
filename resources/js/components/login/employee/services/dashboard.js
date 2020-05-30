import http from './http';

const getProgressBarCurve = async () => {
    try {
        return await http.get('ProgressBarNCurve.json')
    } catch ( err ) {
        throw err;
    }
}

const getCompositBar = async () => {
    try {
        return await http.get('CompositBar.json')
    } catch ( err ) {
        throw err;
    }
}

const getMonitor = async () => {
    try {
        return await http.get('Monitor.json')
    } catch ( err ) {
        throw err;
    }
}

const getProgressIndicator = async () => {
    try {
        return await http.get('ProgressIndicator.json')
    } catch ( err ) {
        throw err;
    }
}

const getSimpleBar = async () => {
    try {
        return await http.get('SimpleBar.json')
    } catch ( err ) {
        throw err;
    }
}

const getSingleBar = async () => {
    try {
        return await http.get('SingleBar.json')
    } catch ( err ) {
        throw err;
    }
}

const getProfileSummary = async () => {
    try {
        return await http.get('ProfileSummary.json')
    } catch ( err ) {
        throw err;
    }
}

export { getProgressBarCurve, getCompositBar, getMonitor, getProgressIndicator, getSimpleBar, getSingleBar, getProfileSummary }