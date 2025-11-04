import { P as FetchError } from '../nitro/nitro.mjs';

const VALIDATION_ERROR_CODE = 422;
const SERVER_ERROR_CODE = 500;
function mapLaravelErrorsIntoFormErrors(errors) {
  return Object.entries(errors).map(([key, messages]) => ({
    name: key,
    message: messages[0] ?? ""
  }));
}
const useSanctumError = (error) => {
  const isFetchError = error instanceof FetchError;
  const isValidationError = isFetchError && error.response?.status === VALIDATION_ERROR_CODE;
  const code = isFetchError ? error.response?.status : SERVER_ERROR_CODE;
  const bag = isValidationError ? mapLaravelErrorsIntoFormErrors(error.response?._data.errors) : [];
  return {
    isValidationError,
    code,
    bag
  };
};

export { useSanctumError as u };
//# sourceMappingURL=useSanctumError-C4ThmU5N.mjs.map
