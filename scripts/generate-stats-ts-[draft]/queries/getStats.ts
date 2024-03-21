import axios from "axios";

export async function getOverview(username: string, accessToken: string): Promise<Stats | null>{
  const res = axios.get("https://api.github.com/graphql")
}