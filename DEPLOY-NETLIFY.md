# 🚀 Deploy no Netlify - Schmidt XML Converter

## Método 1: Deploy via Interface Web (Mais Fácil)

### Passo 1: Preparar o Projeto
✅ Build já foi gerado! A pasta `dist` está pronta.

### Passo 2: Fazer Deploy
1. Acesse https://app.netlify.com/
2. Clique em **"Add new site"** → **"Deploy manually"**
3. **Arraste a pasta `dist`** para a área indicada
4. Aguarde o upload e deploy
5. Pronto! Seu site estará no ar com um link automático

---

## Método 2: Deploy via Git (Recomendado)

### Passo 1: Subir para o GitHub
```bash
# Se ainda não tem repositório Git
git init
git add .
git commit -m "Setup Schmidt XML Converter"

# Criar repositório no GitHub e conectar
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

### Passo 2: Conectar no Netlify
1. Acesse https://app.netlify.com/
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Escolha **GitHub**
4. Selecione seu repositório
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Clique em **"Deploy site"**

**Vantagem:** Toda vez que fizer um commit, o site atualiza automaticamente!

---

## Método 3: Deploy via Netlify CLI

### Instalar CLI
```bash
npm install -g netlify-cli
```

### Deploy
```bash
# Login
netlify login

# Deploy
netlify deploy --prod
```

Quando perguntado, selecione a pasta `dist` para publicar.

---

## 📁 Arquivos Importantes

- ✅ **netlify.toml** - Configuração já está pronta
- ✅ **dist/** - Pasta com build de produção (já gerada)
- ✅ **package.json** - Configurações do projeto

---

## 🎨 Personalizações Após Deploy

### Domínio Customizado
1. No painel do Netlify, vá em **"Domain settings"**
2. Clique em **"Add custom domain"**
3. Siga as instruções para configurar DNS

### HTTPS
✅ Automático! Netlify fornece certificado SSL gratuito.

---

## 📝 Notas Importantes

- O site processa XMLs **localmente no navegador** (não envia dados para servidor)
- Totalmente seguro e privado
- Funciona offline após primeiro carregamento
- CNPJs configurados: 05.255.986/0001-64 (MATRIZ) e 05.255.986/0003-26 (FILIAL)

---

## 🆘 Problemas Comuns

### Build falha no Netlify
- Verifique se `package.json` está incluído no repositório
- Confirme que `node_modules` está no `.gitignore`

### Site não carrega
- Limpe cache do navegador (Ctrl + Shift + R)
- Verifique console do navegador (F12)

---

## ✅ Checklist de Deploy

- [x] Build de produção gerado (`dist/`)
- [x] netlify.toml configurado
- [x] Logo da Schmidt adicionada
- [x] Cores vermelho/cinza aplicadas
- [x] CNPJs da empresa configurados
- [ ] Deploy realizado
- [ ] Site testado em produção

---

**Pronto para deploy! 🎉**
