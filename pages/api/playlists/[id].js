const fakePlaylists = [
  {
    id: 1,
    name: "skate",
    created_at: new Date(),
    songCount: 21,
  },
  {
    id: 2,
    name: "run",
    created_at: new Date(),
    songCount: 43,
  },
  {
    id: 3,
    name: "chill pop",
    created_at: new Date(),
    songCount: 53,
  },
  {
    id: 4,
    name: "Electro vibes",
    created_at: new Date(),
    songCount: 170,
  },
];

export default function playlistHandler(req, res) {
  const {
    query: { id, name, songCount },
    method,
  } = req;

  switch (method) {
    case "GET":
      const playlist = fakePlaylists.find(e => e.id === parseInt(id));
      // Playlist lekérdezése ID alapján
      res.status(200).json(playlist);
      break;
    case "POST":
      // Playlist hozzádása
      res.status(200).json({ id, name: name, songCount: songCount });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
