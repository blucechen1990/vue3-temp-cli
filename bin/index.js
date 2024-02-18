#!/usr/bin/env node

const { Command } = require('commander');
const path = require('path')

const package = require('../package.json')
const { 
  downloadFromRepo,
  getCurrentDirPath,
  installDep,
} = require('../lib')


/* 
1. 创建命令
2. git 拉取模板
3. 进入项目安装 
4. 运行项目并打开浏览器
*/
const program = new Command();

program
  .description('create an project base vue3 + element-plus')
  .version(package.version, '-v, -V, --version', 'output the current version')

program
  .command('create <project-name>')
  .description('create a newly created directory. (创建项目的名称)')
  .action(async (projectName) => {
    const msg = await downloadFromRepo(projectName)
    if (msg === 'success') {
      const projectDir = getCurrentDirPath(projectName)
      const error = await installDep(projectDir)
      if(!error) {
        
      }
    }
  });


program.parse();


// const options = program.opts();


