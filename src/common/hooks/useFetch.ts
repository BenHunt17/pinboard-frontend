import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { z, ZodSchema } from "zod";

export default function useFetch(uri: string, resultZodSchema: ZodSchema) {
  const [data, setData] = useState<z.infer<typeof resultZodSchema>>();
  const [loading, setLoading] = useState(false);

  const memoisedResultZodSchema = useRef(resultZodSchema); //Cheeky work around the infinite useEffect issue since I know this won't change anyway

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const result = await axios.get(uri);

        const safeParseResult = memoisedResultZodSchema.current.safeParse(
          result.data
        );
        if (safeParseResult.success) {
          setData(result.data);
        } else {
          //Toast error
        }
      } catch (e) {
        if (e instanceof Error) {
          //Toast error
        } else {
          //Toast stringified error
        }
      }

      setLoading(false);
    };

    fetchData();
  }, [uri]);

  return { data, loading };
}
