const util = require('util');
const exec = util.promisify(require('child_process').exec);


async function installDep(projectPath) {
    // 1. 进入项目目录
    try {
        process.chdir(projectPath);
    } catch (err) {
        console.error(`chdir: ${err}`);
        return err;
    }

    // 2. 执行安装
    console.log('npm install......');
    const {error, stdout} = await exec('npm install');
    if (error) {
        console.error(`安装失败: ${error}`);
        return error;
    }
    console.log(stdout);
    console.log('安装完成\n');
}

module.exports = installDep