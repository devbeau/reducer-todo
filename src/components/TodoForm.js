import React, {useReducer, useState} from 'react';
import {Form, Input, InputGroup, Label, Button, ButtonGroup} from 'reactstrap';
import {initialTodoList, reducer} from '../reducers/reducer';

export default function TodoForm (props) {

    let [todoState, dispatch] = useReducer(reducer, initialTodoList);
    let [formValues, setFormValues] = useState({title: '', task: ''});

    const onChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'new-todo', payload: formValues})
    }

    return (
        <section>
            {todoState.map((todo, index) => {
                return (
                    <div key={`${todo.title}-${index}`}>
                        <Input
                            type='checkbox'
                            name={todo.title}
                            checked={todo.completed}
                            onChange={() => {dispatch({type: 'toggle-complete', payload: todo.id})}}
                        />
                        <span>{todo.title} - </span>
                        <span>{todo.task}</span>
                    </div>
                )
            })}
            <Form onSubmit={onSubmit}>
                <InputGroup>
                    <Label htmlFor='title'>Title: </Label>
                        <Input 
                        type='text'
                        name='title'
                        value={formValues.title}
                        onChange={onChange}
                        placeholder='Enter title...'
                        />
                </InputGroup>
                <InputGroup>
                    <Label htmlFor='task'>Task: </Label>
                        <Input 
                        type='text'
                        name='task'
                        value={formValues.task}
                        onChange={onChange}
                        placeholder='Enter task...'
                        />
                </InputGroup>
                <ButtonGroup>
                        <Button>Create Task</Button>
                        <Button onClick={(event) => {
                            event.stopPropagation();
                            event.preventDefault();
                            dispatch({type: 'clear-completed'})
                        }}>Clear Completed</Button>
                </ButtonGroup>
            </Form>
        </section>
    )
}