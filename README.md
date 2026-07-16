Aplicativo mobile para controle financeiro pessoal — feito com React Native + Expo + TypeScript.

📋 O que é
O App‑fin é um app que permite ao usuário registrar entradas e saídas financeiras, acompanhar o saldo em tempo real, organizar transações e manter um perfil personalizado. O app utiliza SQLite local para armazenamento de dados, garantindo persistência offline e funcionamento independente da internet. Funcionalidades que envolvam servidor ou sincronização podem ser implementadas futuramente como backend remoto.

✨ Funcionalidades principais
Autenticação de usuário (cadastro/login)
Registro de transações financeiras (entradas e saídas)
Visualização de lista de transações
Cálculo automático de saldo — total de entradas, saídas e saldo atual
Tela inicial com resumo financeiro
Tela de perfil de usuário com possibilidade de edição
Navegação por abas inferiores (tabs)
Armazenamento local das informações usando SQLite — dados persistem no dispositivo
🛠️ Tecnologias e ferramentas usadas
React Native + Expo
TypeScript
React Navigation
SQLite (via expo-sqlite) para armazenamento local
Context API para gerenciamento global de estado / autenticação
Estrutura organizada de pastas: componentes, telas, database, contexts, assets, etc.
📂 Estrutura do Projeto
App‑fin/
├── assets/          ← imagens, ícones, logos, etc  
├── src/             ← código‑fonte principal  
│   ├── screens/     ← telas do app  
│   ├── components/  ← componentes reutilizáveis  
│   ├── database/    ← configuração e lógica do SQLite  
│   ├── contexts/    ← contexto de autenticação / estado global  
│   ├── utils/       ← funções utilitárias/helpers  
│   └── styles/      ← estilos globais/comuns  
├── App.tsx          ← ponto de entrada do app  
├── index.ts         ← bootstrap / inicialização  
├── package.json     ← dependências e scripts  
└── tsconfig.json    ← configurações do TypeScript
🚀 Como rodar o projeto (desenvolvimento local)
Clone o repositório

git clone https://github.com/SeuUsuario/App‑fin.git
Acesse a pasta do projeto

cd App‑fin
Instale as dependências

npm install
# ou
yarn
Inicie o app com Expo

npx expo start
# ou
expo start
Abra no emulador ou dispositivo físico via Expo Go

🧪 Banco de Dados Local (SQLite)
O app utiliza SQLite local para armazenar dados do usuário e transações, garantindo persistência offline. Ele permite:

Funcionamento offline
Persistência de dados entre sessões
Simplicidade de setup — sem necessidade de servidor externo
As tabelas criadas incluem: users (dados de autenticação / perfil) e transactions (dados de cada movimentação financeira).

✅ Status do Projeto
Em desenvolvimento ativo
Funcionalidades básicas de controle financeiro implementadas
Possível evolução: melhorias no design, validações extras, sincronização via backend remoto, novas funcionalidades
🧑‍💻 Equipe do Projeto
Breno Felipe – @Breninf
Celton Roberto – @Celton14
Raryane Oliveira – @yraryy
Victor Morais – @victormorais314-ofc
📄 Licença
Projeto de uso educacional.
