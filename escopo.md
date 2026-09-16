# Nome do Projeto: Quest Log (Gerenciador de Missões Gamificado)

## 1. Propósito e Persona

O Quest Log é um gerenciador de tarefas gamificado, com estética e mecânicas de jogo de RPG, voltado para pessoas que acham listas de tarefas tradicionais ("To-Do Lists") desmotivantes e pouco engajantes.

**Persona:** Usuários que precisam organizar suas tarefas do dia a dia (estudos, trabalho, afazeres pessoais) mas se beneficiam de reforço positivo e recompensa visual para manter a constância. Em vez de simplesmente "marcar como feito", o usuário sente que está "jogando" — cada tarefa concluída é uma "Missão" cumprida que gera XP (experiência) e contribui para a evolução de um nível de personagem/perfil.

**Problema que resolve:** A falta de engajamento e recompensa imediata das listas de tarefas comuns, transformando produtividade em uma experiência mais lúdica e motivadora.

## 2. Jornada do Usuário (User Flow)

Tela Inicial (Lista de Missões vazia ou com missões pendentes) ➔ Botão "Nova Missão" ➔ Cadastro do Gmail ➔ Formulário de Cadastro (título da missão, dificuldade/recompensa de XP) ➔ Missão adicionada à lista ➔ Usuário marca Missão como concluída ➔ Barra de Progresso de Nível atualiza ➔ Retorno à Tela Inicial com lista atualizada e progresso salvo.

Fluxo secundário: Usuário pode deletar uma missão a qualquer momento a partir da lista.

## 3. Requisitos Visuais e Arquiteturais

- **Framework:** React com Vite.
- **Estilização:** Tailwind CSS (tema Dark, com identidade visual de RPG/game — cores vibrantes de destaque para XP e níveis).
- **Restrição:** Interface Mobile-First, deve ser perfeitamente utilizável em telas de 320px de largura.
- **Persistência:** Dados do usuário (missões, XP, nível) devem ser salvos (LocalStorage nas fases iniciais, podendo evoluir para integração HTTP/API).
- **Elementos essenciais de UI:**
  - Barra de progresso de nível (XP).
  - Lista de Missões (com opção de concluir e deletar).
  - Efeitos sonoros ao concluir tarefas.
  - Layout com apelo visual forte ("de dar inveja"), reforçando a identidade gamificada.

