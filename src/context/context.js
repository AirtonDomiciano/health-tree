let resumeData = {
  name: "Postos",
  items: [
    {
      id: 1,
      nome: "local 1",
      Children: [
        {
          id: 1,
          nome: "local 1 local 1",
          Children: [
            {
              id: 1,
              nome: "local 1 local 1",
              Children: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      nome: "local 02",
      Children: [
        {
          id: 1,
          nome: "local 1 ",
          Children: [],
        },
      ],
    },
    {
      id: 3,
      nome: "local 3",
      Children: [
        {
          id: 1,
          nome: "local 1 local 1",
          Children: [],
        },
      ],
    },
    {
      id: 1,
      nome: "local 1 local 1",
      Children: [],
    },
  ],
};

export default resumeData;
