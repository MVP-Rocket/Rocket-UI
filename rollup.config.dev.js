import serve from "rollup-plugin-serve";

export default {
  input: "chemin/vers/votre/fichier/entry.js",
  output: {
    file: "chemin/vers/votre/fichier/sortie.js",
    format: "umd",
  },
  plugins: [
    serve({
      contentBase: [
        "chemin/vers/votre/dossier/public",
        "chemin/vers/votre/dossier/src",
      ],
      port: 5000,
    }),
  ],
};
