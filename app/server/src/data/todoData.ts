import { Todo } from '../types/todoList';

export const todoList: Todo[] = [
    {
        id: 1,
        title: 'Complete CIT191',
        description: 'FInish CIT191 practical before friday',
        status: 'pending',
        dueDate: '2024-03-22'  
    },
    {
        id: 2,
        title: 'Buy Groceries',
        description: 'Get milk, eggs, and bread from the store',
        status: 'pending',
        dueDate: '2024-03-20'
    },
    {
        id: 3,
        title: 'Gym Session',
        description: 'Upper body workout and 20 mins cardio',
        status: 'completed',
        dueDate: '2024-03-18'
    },
    {
        id: 4,
        title: 'Book Flight',
        description: 'Reserve tickets for the summer vacation',
        status: 'pending',
        dueDate: '2024-04-01'
    },
    {
        id: 5,
        title: 'Update Portfolio',
        description: 'Add the new React project to the gallery',
        status: 'in-progress',
        dueDate: '2024-03-25'
    },
    {
        id: 6,
        title: 'Doctor Appointment',
        description: 'Annual check-up at the city clinic',
        status: 'pending',
        dueDate: '2024-03-28'
    },
    {
        id: 7,
        title: 'Car Service',
        description: 'Oil change and tire rotation',
        status: 'pending',
        dueDate: '2024-03-23'
    },
    {
        id: 8,
        title: 'Read 20 Pages',
        description: 'Continue reading "Clean Code" book',
        status: 'completed',
        dueDate: '2024-03-19'
    },
    {
        id: 9,
        title: 'Team Sync',
        description: 'Weekly meeting with the development team',
        status: 'pending',
        dueDate: '2024-03-21'
    },
    {
        id: 10,
        title: 'Pay Electricity Bill',
        description: 'Settle the utility bill before the deadline',
        status: 'pending',
        dueDate: '2024-03-24'
    }
]