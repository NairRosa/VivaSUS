import express from 'express';

const app = express();
app.use(express.json())

const users = [];

app.post('/usuarios', async (req, res) => {

    await prisma.User.create ({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body);

});

app.get('/usuarios', (req, res) => {
    res.json(users);
});

app.listen(3000);





/* 

e-mail: conatatonairrosa@gmail.com
Senha: Anderson2025

Acesso:
db-VivaSUS
10ygJU9D3HgkyZuL

*/