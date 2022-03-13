export class Model {
  user;
  items;

  constructor() {
      this.user = " ";
      this.items = [  ];

  }
}

export class TodoItem {
  description;
  action;

  constructor(description, action) {
      this.description = description;
      this.action = action;
  }
}
