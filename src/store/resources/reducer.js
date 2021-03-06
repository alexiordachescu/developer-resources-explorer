const initialState = [
  {
    id: 1,
    name: "React",
    type: "library",
    tags: ["ui", "jsx", "virtual-dom", "components"],
    url: "https://reactjs.org",
  },
  {
    id: 2,
    name: "Alpine",
    type: "library",
    tags: ["ui", "vanilla-js", "new"],
    url: "https://github.com/alpinejs/alpine",
  },
  {
    id: 3,
    name: "Zdog",
    type: "library",
    tags: ["3D", "svg", "graphics"],
    url: "https://zzz.dog",
  },
  {
    id: 4,
    name: "AST Explorer",
    type: "tool",
    tags: ["babel", "online"],
    url: "https://astexplorer.net",
  },
  {
    id: 5,
    name: "Observable",
    type: "website",
    tags: ["d3", "community", "notebooks"],
    url: "https://observablehq.com",
  },
  {
    id: 6,
    name: "unDraw",
    type: "resource",
    tags: ["sketches", "svg", "graphics"],
    url: "https://undraw.co/illustrations",
  },
];

export default function resourcesSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_RESOURCE": {
      const newResource = action.payload;
      return [...state, newResource];
    }

    default: {
      return state;
    }
  }
}
