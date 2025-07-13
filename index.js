import {
  createFile,
  deleteFile,
  editFile,
  existsFolder,
  listFile,
  readFile,
  rl,
} from "./src/task5.js";

const main = async () => {
  await existsFolder();

  while (true) {
    console.log("\n=== MENU ===");
    console.log("1. Lihat File");
    console.log("2. Tambah File");
    console.log("3. Baca File");
    console.log("4. Edit File");
    console.log("5. Hapus File");
    console.log("6. Keluar");

    const choice = await rl.question("Pilih menu (1-6): ");
    console.log("Loading...");
    await new Promise((r) => setTimeout(r, 1000));

    switch (choice) {
      case "1":
        await listFile();
        break;
      case "2":
        await createFile();
        break;
      case "3":
        await readFile();
        break;
      case "4":
        await editFile();
        break;
      case "5":
        await deleteFile();
        break;
      case "6":
        rl.close();
        console.log("Keluar");
        process.exit(0);
      default:
        console.log("invalid input");
    }
  }
};

main();
