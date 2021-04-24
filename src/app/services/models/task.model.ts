export class Task {
  constructor(
    public title: string,
    public notes: string,
    public remindMe: Date,
    public done = false,
    public createAt = new Date(),
    public id?: number,
  ){}
}
