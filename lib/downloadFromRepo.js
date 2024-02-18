const download = require('download-git-repo')
const path = require('path')
const fs = require('fs/promises')

// 仓库地址
const repUrl = 'https://github.com/blucechen1990/vue3-project-template.git'
const url = `direct:${repUrl}#main`

// 从github下载仓库
async function downloadRepo(projectName) {
    const dist =  path.resolve(process.cwd(), projectName)
    // 如果能访问到文件路径， 说明文件已经存在， 报错给提示当前文件已经存在
    const error = await fs.access(dist).catch(() => 'error')
    if(!error) {
      return console.log(`该文件路径:${dist}, 已经存在$`)
    }

    return new Promise((resolve, reject) => {
        console.log(`downloading from ${repUrl}\n`)
        download(url, dist, { clone: true }, function (err) {
            if(err) {
                console.log('下载失败')
                reject(err)
            } else {
                resolve('success')
            }
        })
        
    })
}

module.exports = downloadRepo