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

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.status(200).json(fakePlaylists);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
