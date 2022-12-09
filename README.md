# Design System
## O que é?
- Design System é um conjunto de componentes e tokens padronizados que podem ser usados em qualquer aplicação de uma empresa, desde textos, cores e botões. É um ecossistema de bibliotecas instaláveis, com componentes programados e padrões semânticos de design, que reúne padrões de comportamentos.

## Por que criar um design system?
- Para uma empresa que conta com várias aplicações, é de extrema importância que se tenha uma padronização entre essas aplicações, como paleta de cores, inputs, botões, etc.
- A ideia de criar um design system é facilitar o trabalho dos designers e desenvolvedores, além de criar uma identidade que pode ser facilmente reconhecida pelos usuários.

## IMPORTANTE
- "É importante saber que um design system não é um projeto, e sim um produto usado por outros produtos." Anne Mendes.

## Tokens  do design system
- [x] Color
- [x] FontSize
- [x] FontWeight
- [x] Font
- [x] LineHeight
- [x] BorderRadius
- [x] Space

## Componentes do design system
- [x] Text
- [x] Heading
- [x] Box
- [x] Button
- [x] TextInput
- [x] TextArea
- [x] Checkbox
- [x] Avatar
- [x] MultiStep

## Mono Repo
- Agrupar projetos que são dependentes entre si.
- Possibilidade de trabalhar em vários projetos diferentes dentro da mesma estrutura e ao mesmo tempo.
- Dependências geradas de forma global.

## Storybook
### O que é
- Ferramenta que tem como objetivo servir de ambiente isolado para criar componentes.

### Por que usar?
- O time pode atuar simultaneamente no desenvolvimento dos componentes.
- Reutilização de código.
- Permite testar o componente sem ter que colocar ele na aplicação.
- Promove uma melhor documentação.
- Melhora a qualidade do código.

### Instalação no projeto
- ```npx sb init --builder @storybook/builder-vite --type react --use-npm```

### Como fazer deploy para o github
- Criar na raiz do projeto uma pasta .github com uma pasta workflows dentro, e nessa pasta criar um arquivo deploy-docs.yml com as seguintes informações:
```
name: Deploy docs

on:
  push:
    branches:
      - master

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16
      
      - run: npm ci

      - run: npm run build

      - name: Deploy storybook
        working-directory: ./packages/docs
        run: npm run deploy-storybook -- --ci --existing-output-dir=storybook-static
        env:
          GH_TOKEN: ${{ github.actor }}:${{ secrets.GITHUB_TOKEN }} 
```
- Após isso inserir o seguinte código no arquivo main.js da pasta .storybook
```
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/nome-do-repo/'
    }

    return config
  }
```
- Por último fazer uma pequena configuração no repositório do github. Clique em settings, vá para a seção pages, na subseção Build and Deployment selecione a branch gh-pages, coloque a source como sendo Deploy from a branch e salve.

## Bibliotecas novas aprendidas no projeto
- Tsup: ferramenta muito performática usada para conversão de código typescript para javascript.
- Storybook.
- Polished.
- TurboRepo: salva em cache a build dos projetos, e consegue executar os scrips de todos os projetos em paralelo.
- Addon-a11y: testa a acessibilidade dos componentes no storybook
- Storybook-deployer: biblioteca para fazer deploy do storybook (https://github.com/storybookjs/storybook-deployer)
- Changesets: versionamento do design-system (https://github.com/changesets/changesets/blob/main/packages/cli/README.md)

## Aprendizados do projeto
- Design System
- Publicar pacotes no npm