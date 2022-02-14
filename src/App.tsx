import { useFetching } from "./hooks/useFetching";

type Repository = {
  full_name: string;
  description: string;
};

export function App() {
  const { data: repositories, isFetching } = useFetching<Repository[]>(
    "/users/diego3g/repos"
  );

  return (
    <ul>
      {isFetching && <p>Loading...</p>}

      {repositories?.map((repo) => (
        <li key={repo.full_name}>
          <strong>{repo.full_name}</strong>

          <p>{repo.description}</p>
        </li>
      ))}
    </ul>
  );
}
