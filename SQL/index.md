A forma correta de pensar esse relacionamento é: **quem “possui” a chave estrangeira** e **qual lado depende do outro**.

No seu caso:

* **1 usuário → N posts**
* Cada post pertence a **1 único usuário**

### 🧠 Modelo mental correto

Pense assim:

* O **usuário é a entidade “pai”**
* O **post é a entidade “filha”**
* Quem “depende” de quem? → **Post depende de Usuário**

Ou seja:

> Um post **não existe sem um usuário**, mas um usuário pode existir sem posts.

---

### 🗄️ Como isso vira tabelas

Você coloca a **chave estrangeira no lado N (posts)**:

```sql
usuarios
---------
id (PK)
nome

posts
---------
id (PK)
titulo
conteudo
usuario_id (FK → usuarios.id)
```

---

### 🔗 Forma correta de pensar

Em vez de decorar “1:N”, pense em termos práticos:

* **Quem é o dono da relação?** → Usuário
* **Quem carrega a referência?** → Post
* **Quem depende de quem?** → Post depende de Usuário

---

### 💡 Regra de ouro

> Em relacionamentos 1:N, a chave estrangeira sempre fica no lado N.

---

### 🧩 Analogia simples

Imagine:

* Usuário = Autor
* Post = Livro

Um autor pode escrever vários livros, mas cada livro tem **um autor**.

Logo:

* O livro precisa saber quem é o autor → FK fica no livro (posts)

---

Se quiser, posso te mostrar como isso fica em ORMs tipo Sequelize, Prisma ou Hibernate — aí o conceito fica ainda mais claro na prática.
