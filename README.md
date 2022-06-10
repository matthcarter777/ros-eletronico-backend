# Itafos Help Desk API

O Projeto realizado para servir dados a uma aplicação de help-desk, onde os usuários são cadastrados e são capazes de acionar as áreas pedindo ajuda, com filtro de direcionamento aos departamentos e as categorias.
 Api desenvolvida em Node com utilização de TypeORM para manipular as operações a um banco de dados PostgresSQL, requisições HTTP utilizando express.


URL da aplicação:
- <https://brasilhelpdesk.itafos.com:3000> - URL base da API (Servidor Azure)

## Pré-requisitos

- Configurar a string de conexão do banco de dados no arquivo `.\ormconfig.json` nas propriedades `host, port, username, password, database`
- Configurar as variaveis de ambiente no arquivo `.\.env` nas propriedades `APP_ENV, APP_PORT, APP_URL, MAIL_HOST,MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD, MAIL_ENCRYPTION`
- Excutar o comando `yarn typeorm migration:run`


## Iniciar aplicação

No diretório raiz do repositório, executar comando:

`yarn dev`


## Métodos

As requisições devem seguir os padrões:

| Método   | Descrição |
| ------   | ------ |
| `GET`    | Consulta e retorno de dados de um ou mais registros |
| `POST`   | Criação de um novo registro |
| `PATCH`  | Atualização parcial de um registro, sem necessidade de envio do payload completo |
| `DELETE` | Remoção de um registro |


## Respostas

| Código | Descrição |
| ------ | ------ |
| `200`  | Requisição executada com sucesso (success) |
| `404`  | Registro não encontrado (not found) |


## Recursos

### Tickets [/ticket]
Recurso para listar, mostrar, criar, alterar e remover tickets criados pelo usuário.

### Listar funcionários

* **URL**

  ***[GET]*** `/ticket`

* **Resposta de Sucesso**

  Response 200 (application/json) 
  ```sh
  [
    {
        "id": "a655058b-e714-4ccd-917b-120c314e17bc"
        "category": "Office"
        "created_at": "2022-04-13T14:09:44.715Z"
        "department": "TI"
        "description": "teste"
        "priority": "Alta"
        "status": "Aberto"
        "title": "tets"
    }
  ] 
  ```
  Onde:
  - **id** - Identificação em UUID do funcionário
  - **name** - Nome do funcionário
  - **lastName** - Sobrenome do funcionário
  - **document** - Documento do funcionário (RG, CPF)
  - **departament** - Departamento do funcionário
  - **grossWage** - Salário bruto do funcionário
  - **admissionDate** - Data de admissão do funcionário
  - **hasHealthPlan** - Retorna `true` se funcionário tem plano de saúde ou `false` se não
  - **hasDentalPlan** - Retorna `true` se funcionário tem plano odontológico ou `false` se não
  - **hasTransportationVouchersDiscount** - Retorna `true` se funcionário tem vale transporte ou `false` se não
  
### Criar funcionário

* **URL**

  ***[POST]*** `/employees`

* **Requisição**

   Body (application/json) 
   ```sh
   {
     "name": "Noah",
     "lastName": "de Paula",
     "document": "124578",
     "department": "IT",
     "grossWage": 5000,
     "admissionDate": "2019-11-06",
     "hasHealthPlan": true,
     "hasDentalPlan": true,
     "hasTransportationVouchersDiscount": true
   }
 
   ```
  Onde:
  - **name** - Nome do funcionário
  - **lastName** - Sobrenome do funcionário
  - **document** - Documento do funcionário (RG, CPF)
  - **departament** - Departamento do funcionário
  - **grossWage** - Salário bruto do funcionário
  - **admissionDate** - Data de admissão do funcionário
  - **hasHealthPlan** - Informa`true` se funcionário tem plano de saúde ou `false` se não
  - **hasDentalPlan** - Informa `true` se funcionário tem plano odontológico ou `false` se não
  - **hasTransportationVouchersDiscount** - Informa `true` se funcionário tem vale transporte ou `false` se não

* **Resposta de Sucesso**

  Response 200 (application/json) 
  ```sh
  {
    "id": "2e1fde7a-3719-49ed-aabc-978938b8b273",
    "name": "Noah",
    "lastName": "de Paula",
    "document": "124578",
    "department": "IT",
    "grossWage": 5000,
    "admissionDate": "2019-11-06",
    "hasHealthPlan": true,
    "hasDentalPlan": true,
    "hasTransportationVouchersDiscount": true
  }
  ```
  
### Detalhar funcionário

* **URL**

  ***[GET]*** `/employees/{id}`

* **Parâmetros**

   - `id` Código do funcionário

* **Resposta de Sucesso**

  Response 200 (application/json) 
  ```sh
  {
    "id": "2e1fde7a-3719-49ed-aabc-978938b8b273",
    "name": "Noah",
    "lastName": "de Paula",
    "document": "124578",
    "department": "IT",
    "grossWage": 5000,
    "admissionDate": "2019-11-06",
    "hasHealthPlan": true,
    "hasDentalPlan": true,
    "hasTransportationVouchersDiscount": true
  }
  ```

* **Resposta de Erro**

  Response 404 (application/json) 
  ```sh
  {
    "message": "Employee not found"
  }
  ```

### Editar funcionário

* **URL**

  ***[PATCH]*** `/employees/{id}`

* **Parâmetros**

   - `id` Código do funcionário

* **Requisição**

   Body (application/json) - Não é necessário informar todos os atributos
   ```sh
   {
     "name": "Noah",
     "lastName": "de Paula",
     "document": "124578",
     "department": "IT",
     "grossWage": 5000,
     "admissionDate": "2019-11-06",
     "hasHealthPlan": true,
     "hasDentalPlan": true,
     "hasTransportationVouchersDiscount": true
   }
 
   ```
  Onde:
  - **name** - Nome do funcionário
  - **lastName** - Sobrenome do funcionário
  - **document** - Documento do funcionário (RG, CPF)
  - **departament** - Departamento do funcionário
  - **grossWage** - Salário bruto do funcionário
  - **admissionDate** - Data de admissão do funcionário
  - **hasHealthPlan** - Informa`true` se funcionário tem plano de saúde ou `false` se não
  - **hasDentalPlan** - Informa `true` se funcionário tem plano odontológico ou `false` se não
  - **hasTransportationVouchersDiscount** - Informa `true` se funcionário tem vale transporte ou `false` se não

* **Resposta de Sucesso**

  Response 200 (application/json) 
  ```sh
  {
    "id": "2e1fde7a-3719-49ed-aabc-978938b8b273",
    "name": "Noah",
    "lastName": "de Paula",
    "document": "124578",
    "department": "IT",
    "grossWage": 5000,
    "admissionDate": "2019-11-06",
    "hasHealthPlan": true,
    "hasDentalPlan": true,
    "hasTransportationVouchersDiscount": true
  }
  ```

* **Resposta de Erro**

  Response 404 (application/json) 
  ```sh
  {
    "message": "Employee not found"
  }
  ```

### Remover funcionário

* **URL**

  ***[DELETE]*** `/employees/{id}`

* **Parâmetros**

   - `id` Código do funcionário

* **Resposta de Sucesso**

  Response 200 - No body

* **Resposta de Erro**

  Response 404 (application/json) 
  ```sh
  {
    "message": "Employee not found"
  }
  ```

### Contracheque

* **URL**

  ***[GET]*** `/employees/{id}/paycheck`

* **Parâmetros**

   - `id` Código do funcionário

* **Resposta de Sucesso**

  Response 200 (application/json) 
  ```sh
  {
    "referencePeriod": "01/2021",
    "grossSalary": 7000,
    "netSalary": 5135.64,
    "totalDiscounts": -1864.36,
    "entries": [
      {
        "type": "Remunaration",
        "amount": 7000,
        "description": "Salary"
      },
      {
        "type": "Discount",
        "amount": 869.36,
        "description": "IRPF"
      },
      {
        "type": "Discount",
        "amount": 560,
        "description": "FGTS"
      },
      {
        "type": "Discount",
        "amount": 10,
        "description": "Health plan"
      },
      {
        "type": "Discount",
        "amount": 5,
        "description": "Dental plan"
      },
      {
        "type": "Discount",
        "amount": 420,
        "description": "Transportation voucher"
      }
    ]
  }
  ```

  Onde:
  - **referencePeriod** - Período de referência do contracheque (MM/YYYY)
  - **grossSalary** - Valor do salário bruto
  - **netSalary** - Valor do salário líquido
  - **totalDiscounts** - Valor total de descontos
  - **entries** - Lista de lançamentos
  - **entries.type** - Tipo do lançamento
  - **entries.amount** - Valor do lançamento
  - **entries.description** - Descrição do lançamento

* **Resposta de Erro**

  Response 404 (application/json) 
  ```sh
  {
    "message": "ticket not found"
  }
  ```
