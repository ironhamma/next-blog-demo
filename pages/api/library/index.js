const fakeSongs = [
  {
    id: 1,
    name: "Skrillex - Burial",
    length: '4:20',
  },
  {
    id: 2,
    name: "Elefánt - Ikarosz",
    length: '3:14',
  },
  {
    id: 3,
    name: "grandson - Dirty",
    length: '3:28',
  },
  {
    id: 4,
    name: "Ricsárdgír - SzintisLaci",
    length: '3:53',
  },
  {
    id: 5,
    name: "Palaye Royale - Lonely",
    length: '3:06',
  },
];

export default function handler(req, res) {
    switch (req.method) {
      case "GET":
        res.status(200).json(fakeSongs);
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  }
  