# NodeJS Error Handling

Tratamentos de erros e dos dados recebidos

## Rotas

`POST /status`

Exemplo do Body da requisição:
```JSON
{
    "nome": "Example",
    "email": "example@gmail.com"
}
```

Os campos obrigatórios: `nome`, `email`

## Validação dos dados com Yup

```JAVASCRIPT
    const schema = Yup.object().shape({
        nome: Yup.string().required(),
        email: Yup.string().email().required(),
    });
    const validationError: Array<string> = await Validate(schema, req.body);
```

`validationError` retorna `array` de string ou `nulo` se estiver válido

## Formato de erros

Se uma solicitação falhar em qualquer validação, espere erros no seguinte formato:

```JSON
{
    "message": "Houve algum problema na validação",
    "status": 500,
    "error": "Internal Server Error",
    "causes": [
        "nome é obrigatório",
        "email é obrigatório"
    ],
    "timestamp": "2021-01-31T03:32:58.202Z",
    "path": "/status"
}
```

## Express error handling

### HttpException

```JAVASCRIPT
throw new HttpException(
    message: string,
    status: number,
    error: string,
    causes?: Array<string>
    timestamp?: Array<string>
)
```

Os campos obrigatórios: `message`, `status`, `error`

### NewBadRequestError

```JAVASCRIPT
throw new NewBadRequestError(
    message: string,
    causes?: Array<string>
)
```

Os campos obrigatórios: `message`

Retorna status `400`

### NewInternalServerError

```JAVASCRIPT
throw new NewInternalServerError(
    message: string,
    causes?: Array<string>
)
```

Os campos obrigatórios: `message`

Retorna status `500`

### NewNotAcceptableError

```JAVASCRIPT
throw new NewNotAcceptableError(
    message: string,
    causes?: Array<string>
)
```

Os campos obrigatórios: `message`

Retorna status `406`

### NewNotFoundError

```JAVASCRIPT
throw new NewNotFoundError(
    message: string
)
```

Os campos obrigatórios: `message`

Retorna status `404`

### NewTooManyRequestsError

```JAVASCRIPT
throw new NewTooManyRequestsError(
    message: string,
    causes?: Array<string>
)
```

Os campos obrigatórios: `message`

Retorna status `429`

### NewUnauthorizedError

```JAVASCRIPT
throw new NewUnauthorizedError(
    message: string,
    causes?: Array<string>
)
```

Os campos obrigatórios: `message`

Retorna status `401`
