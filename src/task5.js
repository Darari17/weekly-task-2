import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
import fs from "fs/promises";
import path from "path";

export const rl = createInterface({ input, output });
const pathData = path.resolve("src/data");

export const existsFolder = async () => {
  await fs.mkdir(pathData, { recursive: true });
};

export const listFile = async () => {
  const file = await fs.readdir(pathData);
  if (file.length === 0) {
    console.log("\nfile kosong");
  }

  console.log("\nList file:");
  file.forEach((f, i) => {
    console.log(`${i + 1}. ${f}`);
  });
};

export const createFile = async () => {
  const filename = await rl.question("Masukkan nama file: ");
  const content = await rl.question("Masukkan isi file: ");

  try {
    const filePath = path.join(pathData, `${filename}.txt`);
    await fs.writeFile(filePath, content);
    console.log("\nFile berhasil dibuat");
  } catch (error) {
    console.log(error.message);
  }
};

export const editFile = async () => {
  await listFile();
  const filename = await rl.question("Masukkan nama file yang ingin diedit: ");
  const filePath = path.join(pathData, `${filename}.txt`);

  try {
    await fs.access(filePath);
    const newContent = await rl.question("Isi baru: ");
    await fs.writeFile(filePath, newContent);
    console.log("\nFile berhasil diedit.");
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFile = async () => {
  await listFile();
  const filename = await rl.question("Masukkan nama file yang ingin dihapus: ");
  const filePath = path.join(pathData, `${filename}.txt`);

  try {
    await fs.unlink(filePath);
    console.log("\nFile berhasil dihapus.");
  } catch (error) {
    console.log(error.message);
  }
};

export const readFile = async () => {
  await listFile();
  const filename = await rl.question("Masukkan nama file yang ingin dibaca: ");
  const filePath = path.join(pathData, `${filename}.txt`);

  try {
    const content = await fs.readFile(filePath, "utf8");
    console.log(`\nIsi file ${filename}.txt:`);
    console.log(content);
  } catch (error) {
    console.log(error.message);
  }
};
