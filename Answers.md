1. What problem does the context API help solve?

    The context API helps to spread data to many components making it accessible on different levels

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions are the only data information element that is passed to the store.

    reducers are strictly functions that assist the store to determine changes that are made to the state that is passed from the action.

    store holds the state tree of the application.

    The store is known as the single source of truth in a redux application is because the store passes the data after a reducer change the shape and the actions are applied to the data and rendered out.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is the state of the application and all application data is able to be changed with in the application.

    Component state lies with in the data of the application only and can only change what is inside the specific data being accessed.

    Application state would be applicable of you are looking to change something on the page for the user to interact with, give information. Component state would be applicable to a specific user action that is needing to be performed if a user is wanting to do something specific on the application.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux Thunk is middleware that allows the returning of function instead of a object on an action. Redux thunk allows the developer to return. This allows the timing of the action to ensure proper execution and not cause errors or a bad UI effect.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    Redux, I like redux because it is for larger scale applications and makes state management easier to control for user actions.
