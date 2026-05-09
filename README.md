# workshop_desafio02
ESUDA devops 2

## Desafio 02 — GitHub Actions: Secrets, Jobs e Matrix

Este repositório contém os exemplos e desafios do **Workshop DevOps - Desafio 02** da ESUDA.

### Workflows disponíveis

| Arquivo | Descrição |
|---|---|
| `secrets.yaml` | Demonstra o uso de **Secrets** vs **Variables** no GitHub Actions |
| `jobs.yaml` | Demonstra **dependências entre jobs** (build → test → deploy) |
| `matrix.yaml` | Demonstra **Matrix Strategy** para executar jobs em paralelo com diferentes configurações |

### Como executar

1. Acesse a aba **Actions** do repositório
2. Selecione o workflow desejado no menu lateral
3. Clique em **Run workflow** e confirme

### Conceitos abordados

- **Secrets**: valores sensíveis criptografados (tokens, senhas, chaves de API)
- **Variables**: valores de configuração não sensíveis reutilizáveis
- **Job dependencies (`needs`)**: encadeamento de jobs para garantir ordem de execução
- **Matrix strategy**: execução paralela com múltiplas combinações de parâmetros
