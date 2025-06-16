import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Criar usuário
app.post('/usuarios', async (req, res) => {
  try {
    const user = await prisma.user.create({ data: req.body });
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Login básico
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (user && user.senha === senha) {
    res.json({ message: 'Login bem-sucedido' });
  } else {
    res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));







/*import express from 'express';

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







e-mail: conatatonairrosa@gmail.com
Senha: Anderson2025

Acesso:
db-VivaSUS
10ygJU9D3HgkyZuL

*/