# App‑fin

Aplicativo mobile para controle financeiro pessoal — feito com React Native, Expo e TypeScript.

## Descrição

O App‑fin permite que o usuário registre entradas e saídas financeiras, acompanhe o saldo em tempo real, organize transações e mantenha um perfil personalizado. Os dados são armazenados localmente com SQLite, garantindo funcionamento offline e persistência entre sessões.

## Funcionalidades

- Autenticação de usuário (cadastro / login)
- Registro de transações (entradas e saídas)
- Lista de transações com filtros e ordenação
- Cálculo automático de saldo (total de entradas, total de saídas e saldo atual)
- Tela inicial com resumo financeiro
- Tela de perfil do usuário com edição
- Navegação por abas inferiores (tabs)
- Armazenamento local com SQLite (expo-sqlite)

## Tecnologias

- React Native + Expo
- TypeScript
- React Navigation
- SQLite (via expo-sqlite)
- Context API para gerenciamento de estado

## Estrutura do projeto

```
App-fin/
├── assets/          ← imagens, ícones, logos, etc.
├── src/             ← código‑fonte principal
│   ├── screens/     ← telas do app
│   ├── components/  ← componentes reutilizáveis
│   ├── database/    ← configuração e lógica do SQLite
│   ├── contexts/    ← contexto de autenticação / estado global
│   ├── utils/       ← funções utilitárias / helpers
│   └── styles/      ← estilos globais / comuns
├── App.tsx          ← ponto de entrada do app
├── index.ts         ← bootstrap / inicialização
├── package.json     ← dependências e scripts
└── tsconfig.json    ← configurações do TypeScript
```

## Começando (desenvolvimento)

1. Clone o repositório

```bash
git clone https://github.com/Celton14/app-fin.git
cd app-fin
```

2. Instale as dependências

```bash
npm install
# ou
yarn
```

3. Inicie o Expo

```bash
npx expo start
# ou
expo start
```

4. Abra no emulador ou dispositivo via Expo Go

## Banco de dados (SQLite)

O app utiliza SQLite local para armazenar usuários e transações, proporcionando:

- Funcionamento offline
- Persistência entre sessões
- Simplicidade de configuração (sem servidor externo)

Tabelas principais:

- users — dados de autenticação e perfil
- transactions — registros das movimentações financeiras

## Status

- Em desenvolvimento ativo
- Funcionalidades básicas implementadas
- Possíveis evoluções: melhorias de design, validações adicionais, sincronização com backend remoto, relatórios e gráficos

## Contribuição

Contribuições são bem‑vindas. Abra uma issue para discutir mudanças importantes antes de enviar um pull request.

Boas práticas:

- Siga a estrutura existente de pastas
- Adicione testes e atualize a documentação quando necessário

## Equipe

- Breno Felipe – @Breninf
- Celton Roberto – @Celton14
- Raryane Oliveira – @yraryy
- Victor Morais – @victormorais314-ofc

## Licença

Projeto de uso educacional.
