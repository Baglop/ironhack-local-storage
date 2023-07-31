import { Task } from "./Task"

export type RootStackParamList = {
    TaskListScreen: undefined,
    TaskCreationScreen: undefined,
    TaskDetailScreen: { task: Task }
}