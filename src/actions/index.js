export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    console.log(user);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const selectTest = () => {
    console.log("Test Kena Klik");
    return {
        type: 'USER_TEST',
        payload: {nama:"faisalyeah"}
    }
};
