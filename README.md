# NodeJS Error Handling

Error and data handling

## Endpoints

`POST /status`

Example request body:
```JSON
{
    "name": "Example",
    "email": "example@gmail.com"
}
```

Required fields: `name`, `email`

## Validation of data with Yup

```JAVASCRIPT
    const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
    });
    const validationError: Array<string> = await Validate(schema, req.body);
```

`validationError` returns string `array` or `null` if valid

## Error format

If a request fails any validation, expect errors in the following format:

```JSON
{
    "message": "There was a problem with validation",
    "status": 500,
    "error": "Internal Server Error",
    "causes": [
        "name is a required field",
        "email is a required field"
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

Required fields: `message`, `status`, `error`

### NewBadRequestError

```JAVASCRIPT
throw new NewBadRequestError(
    message: string,
    causes?: Array<string>
)
```

Required fields: `message`

Returns status `400`

### NewInternalServerError

```JAVASCRIPT
throw new NewInternalServerError(
    message: string,
    causes?: Array<string>
)
```

Required fields: `message`

Returns status `500`

### NewNotAcceptableError

```JAVASCRIPT
throw new NewNotAcceptableError(
    message: string,
    causes?: Array<string>
)
```

Required fields: `message`

Returns status `406`

### NewNotFoundError

```JAVASCRIPT
throw new NewNotFoundError(
    message: string
)
```

Required fields: `message`

Returns status `404`

### NewTooManyRequestsError

```JAVASCRIPT
throw new NewTooManyRequestsError(
    message: string,
    causes?: Array<string>
)
```

Required fields: `message`

Returns status `429`

### NewUnauthorizedError

```JAVASCRIPT
throw new NewUnauthorizedError(
    message: string,
    causes?: Array<string>
)
```

Required fields: `message`

Returns status `401`
