function greetUser(username, message = "How are you?"){
    return `Hi ${username}! ${message}`;
};

const func = greetUser("Akhilesh");
console.log(func);