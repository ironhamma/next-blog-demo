const fakeArtists = [
    {
      id: 1,
      name: "Subtronics",
      image: '/subtronics.png',
      songCount: 21,
    },
    {
      id: 2,
      name: "Ed Sheeran",
      image: '/eds.png',
      songCount: 43,
    },
    {
      id: 3,
      name: "Oli Sykes",
      image: '/bmth.png',
      songCount: 53,
    },
  ];

  export default function handler(req, res) {
    switch (req.method) {
      case "GET":
        res.status(200).json(fakeArtists);
        break;
      default:
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  }