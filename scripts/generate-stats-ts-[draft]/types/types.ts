export interface Stats {
	name: string;
	stargazers: number;
	forks: number;
	total_contributions: number;
	lines_changed: [number, number];
	views: number;
	all_repos: Repo[];
	languages: Record<string, number>;
}