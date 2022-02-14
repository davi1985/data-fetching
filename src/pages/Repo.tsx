import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

type Repository = {
  full_name: string;
  description: string;
};

export function Repo() {
  const params = useParams();
  const currentRepository = params["*"] as string;

  const queryClient = useQueryClient();

  async function handleChangeRepositoryDescription() {
    // call API to update repo description

    const previousRepos = queryClient.getQueryData<Repository[]>("repos");

    if (previousRepos) {
      const nextRepos = previousRepos.map((repo) => {
        if (repo.full_name === currentRepository) {
          return { ...repo, description: "Testando update" };
        } else {
          return repo;
        }
      });

      queryClient.setQueriesData("repos", nextRepos);
    }
  }

  return (
    <div>
      <h1>{currentRepository}</h1>

      <button onClick={handleChangeRepositoryDescription}>
        Alterar descrição
      </button>
    </div>
  );
}
