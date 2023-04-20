# Especificações do Projeto.

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A seguir estão apresentadas as personas que foram encontradas durante a pesquisa de resolução e entendimento do problema.

## Personas

| Pedro Paulo | Idade: 30 | Persona 1 | 
|:---:|:---:|:---:|
| ![Persona Pedro Paulo]()| **Ocupação:**  Analista em marketing online e fluxo orgânico em uma companhia de design.| **Aplicativos:**  Instagram LinkedIn YouTube |
| **Motivações**| **Frustrações** | **Hobbies e História** |
| Ser referencia no mundo do design, inovando com um novo estilo de moda | Dificuldade em confiar seus dados a sites de compra online, falta de informação detalhada sobre o produto | Gosta de estudar sobre design. Por influência de seus artistas preferidos, quer ter um estilo desenvolvido como o deles |

| Felipe Augusto | Idade: 21 |Persona 2|
|:---:|:---:|:---:|
| ![Felipe Augusto]() | **Ocupação:** Influenciador Digital| **Aplicativos:** Instagram YouTube Twitter Tiktok |
| **Motivações**| **Frustrações**| **Hobbies e História** |
|  | Não acha sites em que é possível adaptar o tamanho das fontes. | Passar tempo com os netos. Conhecer novos lugares. Participar de grupos de leitura.|

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID   | Descrição do Requisito  | Prioridade |
|-----|-----------------------------------------|----|
|RF-01| O site deve fazer a verificação de e-mail no registro de novos usuários e possibilitar o usuário redefinir a senha de login | ALTA | 
|RF-02| O site deve permitir a alteração/consulta dos dados pessoais do usuário   | MÉDIA |
|RF-03| O site deve conter uma aba "Calendário". Nessa aba o usuário poderá acessar para conferir a data dos futuros lançamentos, com especificações de marca, linha e criador do tênis | MÉDIA |
|RF-04| O site deve ter um Fórum de interação entre os usuários. Nessa área, os consumidores poderão interagir sobre o universo dos calçados | BAIXA |
|RF-05| O site deve apresentar informações na tela inicial (imagem ilustrativa, nome, preço e etc.) correspondente ao produto apresentado |MÉDIA|
|RF-06| O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar o que for preciso |ALTA|
|RF-07| O site deve permitir visualizar as informações de contato do mantenedor do site |MÉDIA|
|RF-08| O site deve ter a função popularmente chamada de "carrinho". Nessa função o cliente pode salvar seus produtos de preferência, verificar o frete e finalizar a sua compra da forma adequada |ALTA|
|RF-09| O site deve utilizar uma API externa para calcular o frete e prazo de entrega do produto |ALTA|


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização no ambiente mobile de forma adequada |  ALTA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade |MÉDIA|

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, na data XX/XX/2023 |
|02| O site deve se restringir a tecnologias básicas da Web no Frontend |
|03| A equipe não deve terceirizar nada em relação ao desenvolvimento do projeto |
