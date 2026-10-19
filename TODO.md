# TODO — Mecânica Cesar dos Santos

## Site institucional premium e orientado à conversão
- [x] Criar uma landing page responsiva, mobile-first e profissional para a Mecânica Cesar dos Santos, usando a paleta baseada em #0D0D0D, #F2F2F2, #F20505, #193773 e #020659, com variações mais claras e escuras quando necessário.
- [x] Apresentar no hero a proposta de valor da oficina, o atendimento a veículos de todas as marcas — incluindo carros clássicos — e CTAs imediatos para ligar, chamar no WhatsApp e ver como chegar.
- [x] Apresentar os serviços: diagnóstico e motor; freios e suspensão; câmbio e transmissão; revisão geral; troca de óleo e filtros; reparos de carroceria; escapamento e vazamentos.
- [x] Incluir apresentação institucional da oficina, reforçando experiência, atenção aos detalhes, confiança e atendimento local em Pelotas.
- [x] Incluir diferenciais explícitos para diagnóstico antes do reparo, orçamento transparente, comunicação clara e cuidado técnico.
- [x] Incluir processo em etapas, da chegada e diagnóstico à aprovação do orçamento, execução e entrega do veículo.
- [x] Incluir galeria responsiva com fotos reais da oficina extraídas do PDF SiteMecanicaCesar.pdf.
- [x] Incluir localização e horários: Av. Duque de Caxias, 955 - Fragata, Pelotas - RS, 96030-003; segunda a sexta das 8:15 às 18:30 e sábado das 9:00 às 12:00.
- [x] Distribuir CTAs de conversão pela página e destacar telefone/WhatsApp 53991464596 para solicitação de atendimento.
- [x] Criar rodapé profissional com dados de contato, endereço, horários, navegação rápida e identidade visual da marca.
- [x] Criar o manifesto de rotas em /manus-routes.json com a rota principal da landing page.
- [x] Configurar o build de publicação estática e preservar uma estrutura organizada de componentes e conteúdo.

## Evidências de validação

`pnpm check` passou sem erros de TypeScript. `pnpm build:static` gerou o artefato em `dist/public`. O preview respondeu com HTTP 200 e `/manus-routes.json` respondeu como `application/json`. A inspeção visual foi feita em desktop (1440×900) e mobile (390×844), incluindo o hero, CTAs e responsividade.
