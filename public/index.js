console.log('index.js')

// 等待DOM加载完成后再执行代码
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn')
    
    if (!loginBtn) {
        console.error('未找到登录按钮元素')
        return
    }

    loginBtn.onclick = () => {
        fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'admin',
                password: 'admin'
            })
        })
        .then(resp => resp.text())
        .then(data => console.log(data))
        .catch(error => console.error('登录请求失败:', error))
    }
})
