import { readFile, writeFile } from "fs/promises";
import path from "path";
import { createOutputFolder } from "../utils/createOutputFolder";

/**
 * Generate an SVG badge with summary statistics
 * @param stats Represents user's GitHub statistics
 */
export async function generateOverview(stats: Stats) {
	let svgFile = await readFile(
		path.join(process.cwd(), "templates", "overview.svg"),
		"utf8"
	);

	[
		{
			selector: "{{ name }}",
			value: stats.name,
		},
		{
			selector: "{{ stars }}",
			value: stats.stargazers.toLocaleString()
		},
		{
			selector: "{{ forks }}",
			value: stats.forks.toLocaleString()
		},
		{
			selector: "{{ contributions }}",
			value: stats.total_contributions.toLocaleString()
		},
		{
			selector: "{{ lines_changed }}",
			value: `${stats.lines_changed[0].toLocaleString()} - ${stats.lines_changed[1].toLocaleString()}`,
		},
		{
			selector: "{{ views }}",
			value: stats.views.toLocaleString(),
		},
		{
			selector: "{{ repos }}",
			value: stats.all_repos.length.toLocaleString(),
		},
	].forEach(({ selector, value }) => {
		svgFile = svgFile.replace(selector, value);
	});

	await createOutputFolder();
	await writeFile(
		path.join(process.cwd(), "images", "stats_overview.svg"),
		svgFile
	);
}
