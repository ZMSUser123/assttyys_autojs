// let path = '/sdcard/Android/data/' + context.getPackageName() + '/assttyys_ng';
let path = context.getExternalFilesDir(null).getAbsolutePath() + '/assttyus_ng';
toastLog("正在加载程序，请稍后");
let r = http.get('https://gitee.com/zzliux/assttyys_autojs/raw/ng_dev/assttyys_ng.zip');
files.ensureDir(path + '/assttyys_ng.zip');
files.writeBytes(path + '/assttyys_ng.zip', r.body.bytes());
files.removeDir(path + '/assttyys_ng');
$zip.unzip(path + '/assttyys_ng.zip', path);
files.remove(path + '/assttyys_ng.zip');


engines.execScriptFile(path + '/assttyys_ng/dist/auto.js', {
    path: path + '/assttyys_ng'
});