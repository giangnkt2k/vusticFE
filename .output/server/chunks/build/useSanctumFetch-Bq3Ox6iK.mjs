import { w as useAsyncData } from './server.mjs';
import { u as useSanctumClient } from './useSanctumClient-DOkjdFOV.mjs';

function assembleFetchRequestKey(url, lazy, options) {
  const operation = "fetch";
  const parts = [
    "sanctum",
    operation,
    url,
    options?.method ?? "get",
    JSON.stringify({
      query: options?.query ?? {},
      body: options?.body ?? {}
    })
  ];
  return parts.join(":");
}
function useSanctumFetch(url, options, asyncDataOptions, key) {
  const client = useSanctumClient();
  const fetchKey = assembleFetchRequestKey(url, false, options);
  return useAsyncData(
    fetchKey,
    () => client(url, options),
    asyncDataOptions
  );
}

export { useSanctumFetch as u };
//# sourceMappingURL=useSanctumFetch-Bq3Ox6iK.mjs.map
