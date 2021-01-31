const Validate = (schema: any, data: any): Array<string> => {
    return schema
        .validate(data, { abortEarly: false })
        .then(() => {
            return null;
        })
        .catch((err: any) => {
            return err.errors;
        });
};

export default Validate;
