const initialData = {
  frontend: {
    tasks: {
      "frontend-task-1": { id: "frontend-task-1", content: "remove garbage" },
      "frontend-task-2": { id: "frontend-task-2", content: "remove goverment" },
      "frontend-task-3": { id: "frontend-task-3", content: "get a hairstyle" },
      "frontend-task-4": { id: "frontend-task-4", content: "buy beer" }
    },
    columns: {
      "frontend-column-1": {
        id: "frontend-column-1",
        title: "To do",
        taskIds: ["frontend-task-1", "frontend-task-2", "frontend-task-3", "frontend-task-4"]
      },
      "frontend-column-2": {
        id: "frontend-column-2",
        title: "In progress",
        taskIds: []
      },
      "frontend-column-3": {
        id: "frontend-column-3",
        title: "Done",
        taskIds: []
      },
    },
    columnOrder: ["frontend-column-1", "frontend-column-2", "frontend-column-3"]
  },
   backend: {
    tasks: {
      "backend-task-1": { id: "backend-task-1", content: "remove garbage" },
      "backend-task-2": { id: "backend-task-2", content: "remove goverment" },
      "backend-task-3": { id: "backend-task-3", content: "get a hairstyle" },
      "backend-task-4": { id: "backend-task-4", content: "buy beer" }
    },
    columns: {
      "backend-column-1": {
        id: "backend-column-1",
        title: "To do",
        taskIds: ["backend-task-1", "backend-task-2", "backend-task-3", "backend-task-4"]
      },
      "backend-column-2": {
        id: "backend-column-2",
        title: "In progress",
        taskIds: []
      },
      "backend-column-3": {
        id: "backend-column-3",
        title: "Done",
        taskIds: []
      },
    },
    columnOrder: ["backend-column-1", "backend-column-2", "backend-column-3"]
  }

};

export default initialData;
