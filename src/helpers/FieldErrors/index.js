const FieldErrors = error => {
   const fieldError = typeof error === 'object' && error?.reduce((listError, error) => {
      if (error?.field) listError[error.field] = error;
      return listError;
   }, {});
   return fieldError;
}

export default FieldErrors;