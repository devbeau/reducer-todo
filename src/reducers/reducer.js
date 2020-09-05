export const initialTodoList = [
    {
        title: 'reducers',
        task: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

export const reducer = (state, action) => {
    switch (action.type){
        case 'new-todo':
            return [action.payload, ...state];
        case 'toggle-complete':
            return state.map((todo) => {
                return todo.id === action.payload ? {...todo, completed: !todo.completed} : todo;
            });
        case 'clear-completed':
            return state.filter(todo => !todo.completed);
    }
}