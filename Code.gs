// Google Apps Script: simpan satu backup JSON di Google Drive.
// Deploy > New deployment > Web app. Execute as: Me.
var FILE_NAME = 'trading-journal-backup.json';
function doPost(e) {
  try {
    var p = JSON.parse(e.postData.contents || '{}');
    if (p.action !== 'push' || !p.data) return out({ok:false,error:'Payload tidak valid'});
    var f = getFile();
    f.setContent(JSON.stringify(p.data, null, 2));
    return out({ok:true,updatedAt:new Date().toISOString()});
  } catch (err) { return out({ok:false,error:String(err)}); }
}
function doGet(e) {
  try {
    if (!e || !e.parameter || e.parameter.action !== 'pull') return out({ok:false,error:'Gunakan action=pull'});
    var f = getFile();
    return out({ok:true,data:JSON.parse(f.getBlob().getDataAsString())});
  } catch (err) { return out({ok:false,error:String(err)}); }
}
function getFile() {
  var it = DriveApp.getFilesByName(FILE_NAME);
  return it.hasNext() ? it.next() : DriveApp.createFile(FILE_NAME, '{}', MimeType.PLAIN_TEXT);
}
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
