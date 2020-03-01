

export default function fontsize(doc, win) {

    let docEl = win.document.documentElement;
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    /**
     * ================================================
     *   设置根元素font-size
     * 当设备宽度为375(iPhone6)时，根元素font-size=16px;
     * ================================================
     */
    let refreshRem = function () {
        let clientWidth = win.innerWidth
            || doc.documentElement.clientWidth
            || doc.body.clientWidth;

        // console.log(clientWidth)
        if (!clientWidth) return;
        let fz;
        let width = clientWidth;
        fz = 16 * width / 375;
        docEl.style.fontSize = fz + 'px';
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, refreshRem, false);
    doc.addEventListener('DOMContentLoaded', refreshRem, false);
    refreshRem();
}















