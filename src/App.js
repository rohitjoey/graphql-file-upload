import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";

import UploadForm from "./UploadForm";

const headers = {
  IdToken:
    "eyJraWQiOiIybkhxenc0QVUwZUJUN1F0ZGpPdVwvODRXSllaVmtvNHRBdDR5YlVJR2tVST0iLCJhbGciOiJSUzI1NiJ9.eyJjdXN0b206ZnVsbG5hbWUiOiJ0ZXN0Iiwic3ViIjoiOTliOTNjNDAtYjc0Yi00MzhmLWFkNDctNzZmOTIwY2M2ZjAzIiwiY29nbml0bzpncm91cHMiOlsiZW50ZXJwcmlzZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tXC91cy13ZXN0LTJfMjlUVlVXS1E1IiwiY29nbml0bzp1c2VybmFtZSI6Ijk5YjkzYzQwLWI3NGItNDM4Zi1hZDQ3LTc2ZjkyMGNjNmYwMyIsIm9yaWdpbl9qdGkiOiIxZGJmNDRiOS05M2I4LTQwYjQtYTFjMC0xODAxZmYyZWFiMWMiLCJhdWQiOiIxMjhhZmhubTdqbDJhOTFkZHZpbDRobWJwdSIsImV2ZW50X2lkIjoiY2FhYjY5MDMtNjFiZS00NGIzLTgxNWUtMTIyNDgzNzI4YmY2IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTk1MTA4NDUsImN1c3RvbTpvcmdJZCI6IjYxODEwZWE2MDYyNGY5MjUwODUxOTBlMCIsImV4cCI6MTY1OTUxNDQ0NSwiaWF0IjoxNjU5NTEwODQ1LCJqdGkiOiI0Y2Q0MDc5NC03MGUwLTRiMGYtOGE5YS1kNGVhNjljZWJkNDYiLCJlbWFpbCI6InRlc3RhcHI2QHlvcG1haWwuY29tIn0.MMLRDI3hBVBiAF1UxRwjaObihpb5SE7FhDpUWzYz8dLYeXCuG6AWhDnzAmXEMiGir2OPUsg6RQgHvq3_MMIm5PqUe-faQZzqA0PN8VxXVJRszLQBQ9VPe0WaFTcH-DYR-21VenRyK0vSxPIj1ccW-vfXhTJy_ULEy_vUsXIBAXvNHyIa3bD1YvcQrEGWejxi7dOf-WTYZnhrVXfkhLHtv2WPXyTCuHRsW8EkJ_nPrk3tVeyDoqSXp814fZX0MU-NQsCqX7XZP7b1naWbtEtyQNPqGRTkNcN74N9PER_bpJ33-fDsITbxJvETjx6DxsO8V6_tKOI5ueGfhCH3bWNOzA",
};

const client = new ApolloClient({
  link: createUploadLink({
    uri: "http://localhost:3000/graphql",
    headers,
  }),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UploadForm />
    </ApolloProvider>
  );
}

export default App;
