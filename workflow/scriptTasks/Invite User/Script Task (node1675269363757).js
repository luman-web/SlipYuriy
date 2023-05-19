await $inviteUser({
    email: 'some@address1.com',
    rules: {
        read: true,
        update: true,
    },
    password: 'qwe123',
})