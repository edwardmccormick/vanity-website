import { mkdir, lstat, unlink, rm, cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(__dirname, '../../../..');
const publicDir = path.resolve(appRoot, 'public');

const paths = {
	css: {
		src: path.resolve(repoRoot, 'css', 'build.css'),
		dest: path.resolve(publicDir, 'css', 'build.css'),
	},
	img: {
		src: path.resolve(repoRoot, 'img'),
		dest: path.resolve(publicDir, 'img'),
	},
	js: {
		src: path.resolve(repoRoot, 'js'),
		dest: path.resolve(publicDir, 'js'),
	},
	resumePdf: {
		src: path.resolve(repoRoot, 'Edward.McCormick.Resume.pdf'),
		dest: path.resolve(publicDir, 'Edward.McCormick.Resume.pdf'),
	},
	resumeDocx: {
		src: path.resolve(repoRoot, 'Edward.McCormick.Resume.docx'),
		dest: path.resolve(publicDir, 'Edward.McCormick.Resume.docx'),
	},
};

const ensureCleanPath = async (destPath) => {
	try {
		const stat = await lstat(destPath);
		if (stat.isSymbolicLink()) {
			await unlink(destPath);
			return;
		}
	} catch (error) {
		if (error?.code === 'ENOENT') return;
		throw error;
	}
};

const ensureDir = async (dirPath) => {
	await mkdir(dirPath, { recursive: true });
};

const copyFile = async (src, dest) => {
	await ensureCleanPath(dest);
	await ensureDir(path.dirname(dest));
	await cp(src, dest);
};

const copyDir = async (src, dest) => {
	await ensureCleanPath(dest);
	await ensureDir(dest);
	await rm(dest, { recursive: true, force: true });
	await cp(src, dest, { recursive: true });
};

const run = async () => {
	await copyFile(paths.css.src, paths.css.dest);
	await copyDir(paths.img.src, paths.img.dest);
	await copyDir(paths.js.src, paths.js.dest);
	await copyFile(paths.resumePdf.src, paths.resumePdf.dest);
	await copyFile(paths.resumeDocx.src, paths.resumeDocx.dest);
};

run().catch((error) => {
	console.error('[sync-public-assets] Failed to sync assets:', error);
	process.exit(1);
});
