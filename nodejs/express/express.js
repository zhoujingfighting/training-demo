const express = require('express');
const { User } = require('./mongoose.js')
const app = express();
app.use(express.json())

app.get('/api', async (req, res) => {
    res.send('it is ok')
})
app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
})
app.post('/api/register', async (req, res) => {
    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    })
})
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        username: req.body.username
    })
    if (!user) {
        res.status(422).send({
            message: '用户名不存在'
        });
    }
    const isValidPassWord = await require('bcrypt').compare(
        req.body.password,
        user.password
    )
    if (!isValidPassWord) {
        return res.status(422).send({
            message: '111用户名不存在'
        });
    }
    //生成token,使用用户id
    const jwt = require('jsonwebtoken')
    const token = jwt.sign({
        id: String(user.id)
    }, 'express-auth')
    //secret should be personal
    res.send({
        user,
        token
    })
    //怎么用token
})

/**
 * 封装中间件，express的中间件就是函数
 */
const profileUser = async (req, res, next) => {
    const id = String(req.headers.authorization.split(' ').pop())
    console.log(id)
    /**
     * 不能明文存密码于token中
     */
    const tokenData = require('jsonwebtoken').verify(id, 'express-auth')
    console.log(tokenData)
    req.user = await User.findById(tokenData.id);
    /**
     * 执行完这个中间件，继续后面的
     */
    next()
}

/**
 * 这个就是中间件middleware
 */
app.get('/api/profile', profileUser, async (req, res) => {
    res.send(req.user)
})

app.listen(3001, () => {
    console.log('http://localhost:3001')
})