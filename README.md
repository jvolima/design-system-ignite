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
- [] Text
- [] Heading
- [] Box
- [] Button
- [] TextInput
- [] TextArea
- [] Checkbox
- [] Avatar
- [] MultiStep

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

## Tecnologias novas aprendidas no projeto
- Tsup: ferramenta muito performática usada para conversão de código typescript para javascript.
- Storybook
