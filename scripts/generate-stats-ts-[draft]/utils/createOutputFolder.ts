import { existsSync } from "fs";
import { mkdir } from "fs/promises";

/** Create the output folder if it does not already exist */
export async function createOutputFolder() {
	if (!existsSync("images")) {
		await mkdir("images");
	}
}