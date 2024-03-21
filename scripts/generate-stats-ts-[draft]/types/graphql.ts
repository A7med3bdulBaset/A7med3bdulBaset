export interface Repositories {
	data: {
		viewer: Output_Repositories;
	};
}

export interface ContributtionsYears {
	data: {
		viewer: Output_ContributionsYears;
	};
}

export interface ContributionsInYear {
	data: {
		viewer: {
			contributionsCollection: {
				contributionCalendar: {
					totalContributions: number;
				};
			};
		};
	};
}

// Helopers

interface Output_ContributionsYears {
	contributionsCollection: {
		contributionYears: Array<number>;
	};
}

interface Output_Repositories {
	login: string;
	name: string;
	bio: string;
	avatarUrl: string;
	repositories: {
		pageInfo: PageInfo;
		nodes: Array<Repository>;
	};
	repositoriesContributedTo: {
		pageInfo: PageInfo;
		nodes: Array<Repository>;
	};
}

type Repository = {
	nameWithOwner: string;
	stargazers: {
		totalCount: number;
	};
	forkCount: number;
	languages: {
		edges: Array<{
			size: number;
			node: {
				name: string;
				color: string;
			};
		}>;
	};
};

type PageInfo = {
	hasNextPage: boolean;
	endCursor: string | null;
};
