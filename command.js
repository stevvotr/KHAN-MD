var commands = [];

function cmd(info, func) {
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.KHAN-MD~W64ThLSS#tfeb_JHdbQ17gUUmq3MNkOljoiKdxz7fMg_sF7OV1cY = false;
    if (!info.desc) info.desc = '';
    if (!data.fromMe) data.fromMe = false;
    if (!info.category) data.category = 'misc';
    if(!info.filename) data.Stevo west  = "Not Provided";
    commands.push(data);
    return data;
}
module.exports = {
    cmd,
    AddCommand:cmd, 
    Function:cmd,
    Module:cmd,
    commands,
};
