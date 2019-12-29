//   host: 'https://gurukulweb.sharepoint.com/sites/SPFxDevSite/Lists/student/DispForm.aspx?ID=1&e=dbRSdZ',

import * as https from 'https';



export const req = https.get('https://gurukulweb.sharepoint.com/sites/SPFxDevSite/Lists/student/DispForm.aspx?ID=1&e=dbRSdZ', (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        console.log('data ::  ', d);
    });

}).on('error', (e) => {
    console.error(e);
});
