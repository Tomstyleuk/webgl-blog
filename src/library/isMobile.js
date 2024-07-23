export default function isMobile() {
    const userAgent = navigator.userAgent.toLowerCase()
    const mobileKeywords = ['webos', 'iphone', 'ipod', 'ipad', 'android', 'blackberry', 'windows phone', 'opera mini', 'IEMobile']
    for (let keyword of mobileKeywords) {
        if (userAgent.indexOf(keyword) !== -1) {
            return true;
        }
    }
    return false;
}