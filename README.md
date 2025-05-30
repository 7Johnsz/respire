# 🌱 Respire

> Reutilizando o que faz mal para construir um futuro que faz bem.

**Respire** é uma solução criada durante o **1º Hackathon da Receita Federal – 2025**, com o objetivo de **reaproveitar cigarros eletrônicos apreendidos** e transformá-los em **tecnologia útil com impacto ambiental, social e educacional**.

---

## 🧠 Visão geral

Cigarros eletrônicos descartáveis (vapes) são ilegais no Brasil, mas contêm componentes valiosos. Em vez de virarem lixo tóxico, a Respire propõe:

- 🔬 Reutilizar o **eletrólito** para criar um **biofilme inteligente**
- 💬 Criar uma **IA motivacional** que ajuda usuários a **parar de fumar**
- 📊 Mostrar o **impacto real** gerado com o descarte consciente

---

## 🔬 Biofilme Inteligente

Utilizamos o **eletrólito dos vapes** para produzir um **biofilme eletroativo**, capaz de funcionar como sensor para:

- 🌡️ Temperatura
- 💧 Umidade
- 🌬️ Gases

### Aplicações reais:
- Hortas comunitárias 🌱  
- Projetos escolares 📚  
- Clínicas populares 🏥  
- Monitoramento ambiental 🌍  

---

## 🤖 Plataforma com IA (Respire AI)

Criamos uma **IA empática e consciente** que conversa com os usuários sobre:

- O vício em cigarros eletrônicos
- Estratégias para parar de usar
- Reflexões e encorajamento
- O impacto ambiental do descarte correto

✨ Totalmente em português, com princípios anti-vaping claros e linguagem acolhedora.

---

## 🧩 Tecnologias utilizadas

### 🌐 Frontend
- `Next.js` com `App Router`
- `Tailwind CSS` + `ShadCN UI`
- `Lucide Icons`
- `Framer Motion`

### 🤖 IA
- `Python`
- `LangChain`
- `Streamlit` com `RunnableWithMessageHistory`

### 🚀 Outros
- `Vercel` (deploy do site)
- `Streamlit Cloud` (deploy do chat)

---

## 📦 Como rodar localmente

```bash
git clone https://github.com/7johnsz/respire.git
```

### 🖥️ Frontend (Next.js + Bun)

```bash
cd respire
bun i
bun dev
```

### 🖥️ Backend (Python)

```bash
cd ai
uv sync
uv run streamlit run src/main.py
```