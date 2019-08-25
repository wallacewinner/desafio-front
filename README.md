# Desafio IDwall - Frontend

## Tela Signup

<img width="500" alt="image" src="https://user-images.githubusercontent.com/40737835/63648447-400f8180-c706-11e9-9a22-435bd01ff7bf.png">

## Tela de Feed

<img width="500" alt="image" src="https://user-images.githubusercontent.com/40737835/63648412-ef982400-c705-11e9-9830-c59234811c23.png">


## Objetivos do desafio

Com este desafio, esperamos aprender os seguintes pontos sobre seu trabalho:

* Como é seu estilo de trabalho e código
* Como é sua organização para o projeto
* Qual é o seu estágio atual de conhecimento sobre as ferramentas requeridas

## Instruções

Esperamos que você crie uma aplicação que capture os dados da [API do IDdog](https://api-iddog.idwall.co), e apresente numa interface cumprindo os itens abaixo.
**Dica:** Utilize o GIF da introdução como inspiração para as interações e etapas do desafio. Mas não precisa aplicar o mesmo estilo, sinta-se livre para criar como quiser.

### Página de Signup

* Crie uma página `/signup` com um campo de email, e autentique o usuário postando apenas seu email no [endpoint de autenticação](https://api-iddog.idwall.co/signup).
* A chamada na API retornará um `token` JWT, que deverá ser armazenado para ser utilizada nas chamadas seguintes.
* Após receber e armazenar o `token`, redirecione para a página de `/feed`. 
* A página de `/signup/` é a única página de acesso público. As demais rotas são todas privadas e requerem o envio do token [conforme a documentação da API](https://github.com/idwall/desafios-iddog)

### Página de Feed

* No carregamento inicial da página de `/feed`, deverá ser feita uma chamada no [endpoint do feed](https://api-iddog.idwall.co/feed).
* A página de `/feed` deverá ter um menu com quatro rotas - `husky`, `labrador`, `hound` e `pug`.
* Cada rota, ao ser clicada, deve realizar uma chamada no [endpoint do feed](https://api-iddog.idwall.co/feed), passando a respectiva `category`. Quando não especificada, a `category` default é `husky`.

### Página de Foto

* Ao clicar em uma foto, a URL da página deve ser atualizada para `/feed?category=X&id=Y`, sendo `id` o id da imagem recebido nas requisições anteriores.
* A foto deverá ser ampliada e destacada dos demais itens da página, com um overlay. 


## Rodando este projeto

visando a intalação das bibliotecas execute em seu terminal:

```
npm install
```

após sua conclusão rode o projeto com o seguinte comando em seu terminal:

 ```
 npm start
 
 ```


tal projeto fica em modo de desenvolvimento.<br>
Abra [http://localhost:3000](http://localhost:3000) para ver a aplicação em seu navegador.

A página será carregada a cada atualização.<br>
você consegue verificar qualquer erro que possa ocorrer em seu console.

