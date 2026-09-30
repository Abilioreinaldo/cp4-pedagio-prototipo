# CP4 · Régua de pedágio — protótipo navegável

Protótipo do módulo de pedágio da Central de Inteligência Operacional da CP4: declarar a viagem, estimar o pedágio praça a praça, importar o extrato da tag e bater estimado × realizado.

**Dados, praças e tarifas são de demonstração.**

## Fluxo

1. `index.html` — Viagens do mês
2. `nova-viagem.html` — Declarar viagem (pernas, carregado/vazio, eixos suspensos)
3. `estimativa.html` — Previsto por praça, congelado no cálculo
4. `importar.html` — Importação do extrato (Sem Parar, Veloe, ConectCar, Move Mais)
5. `batimento.html` — Estimado × realizado, com cenários de MDF-e aberto/encerrado e de pórtico free flow registrado ou não na tag (alerta `FREE_FLOW_PENDENTE`)
6. `alerta.html` — Alerta `VOLTA_VAZIA_COBRADA_CHEIA` com score explicável e tratamento

## Rodar

HTML estático, sem build. Abra `index.html` ou publique com GitHub Pages (Settings › Pages › branch `main`, pasta raiz).

## Área da transportadora

`transportadora/index.html` — protótipo navegável da área logada da transportadora (Dashboard, Faturamento, Certificado Digital, Conta Corrente, Relatórios, Motoristas, Veículos e Usuários). Inclui o fluxo de pedido de abastecimento com geração de token. Dados de demonstração; nada é salvo.
