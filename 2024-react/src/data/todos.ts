// get the type of interface from file
import { Todo } from "../types/todo";
// The data types are inferred from above //
export const dummyData: Todo[] = [
    {
        id: 1,
        title: "First little title",
        completed: false,
    },
    {
        id: 2,
        title: "And another woo!",
        completed: false,
    },
    {
        id: 3,
        title: "Here's the third",
        completed: true,
    },
];
