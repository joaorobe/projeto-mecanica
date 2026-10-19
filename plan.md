# Plano de implementação — Mecânica Cesar dos Santos

## Direção aprovada
Landing page institucional de uma única página, inspirada na clareza comercial e na estrutura de conversão de uma oficina premium, mas com identidade própria para a Mecânica Cesar dos Santos. O conteúdo parte dos dados reais do PDF e usa as fotos da própria oficina para construir confiança local.

### Design
- **Movimento:** editorial automotivo contemporâneo, com a precisão visual de uma oficina técnica premium e a energia de sinalização de pista.
- **Princípios:** contraste alto; hierarquia direta; prova visual real; conversão sempre acessível.
- **Filosofia de cor:** preto e off-white criam autoridade e legibilidade; azul profundo comunica confiança técnica; vermelho é reservado para ação, urgência e pontos de atenção.
- **Paradigma de layout:** composição assimétrica com hero em duas camadas, faixas de leitura vertical e blocos alternados claro/escuro; os conteúdos não ficam presos a uma sequência de cards iguais.
- **Elementos assinatura:** linha vermelha de “inspeção” sob títulos; microetiquetas azuis com linguagem técnica; números grandes e recortes diagonais na transição entre seções.
- **Interação:** CTAs levam diretamente ao telefone, WhatsApp pré-preenchido ou Google Maps; navegação por âncoras; galeria com zoom nativo; botão flutuante de WhatsApp no mobile.
- **Animação:** entradas suaves de 18–24px, apenas ao entrar na viewport; hover com elevação mínima e destaque de borda; nenhuma animação interfere na leitura ou no clique.
- **Tipografia:** Manrope para títulos e corpo, com peso 500–800; labels em caixa alta com tracking amplo. O contraste de peso substitui uma segunda família para manter o sistema limpo.
- **Essência:** “Diagnóstico certo. Reparo seguro. Seu carro em boas mãos.” Personalidade: técnico, direto, cuidadoso.
- **Voz:** frases curtas, objetivas e sem jargão desnecessário. Exemplos: “Antes de trocar, a gente investiga.” e “Você aprova o orçamento. A gente executa com precisão.”
- **Wordmark/assinatura:** monograma “C” geométrico em um marcador quadrado, acompanhado do nome em duas linhas e um filete vermelho de inspeção.
- **Cor proprietária:** azul petróleo profundo derivado de #020659, usado nos painéis de confiança e nos estados ativos.

## Arquitetura
- `client/src/pages/Home.tsx`: composição da página, dados de conteúdo e CTAs.
- `client/src/index.css`: tokens visuais, responsividade, recortes e microinterações.
- `client/index.html`: idioma, metadados e carregamento da fonte.
- `public/manus-routes.json`: manifesto de rota.
- `public/assets/`: imagens reais da oficina, quando aplicável.
- `app.config.ts`: metadata de logo do projeto.

## Implementação
1. Criar a estrutura de conteúdo em seções: header, hero, serviços, manifesto, diferenciais, processo, galeria, localização e CTA final.
2. Usar URLs de armazenamento do projeto para as fotos reais extraídas do PDF.
3. Implementar chamadas para `tel:`, WhatsApp com mensagem pré-preenchida e Google Maps.
4. Configurar o build estático e o manifesto de rotas.
5. Rodar diagnóstico TypeScript, build, servidor de preview e inspeção visual desktop/mobile.
