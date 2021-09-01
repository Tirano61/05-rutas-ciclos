const isAuthenticationGuard = (to, from, next) => {

    return new Promise(() => {

        const random = Math.random() * 100

        if (random > 50) {
            console.log('Está autenticado');
            next()
        } else {
            console.log('Bloqueado por isAuthenticationGuard', random);
            next({ name: 'pokemon-home' })
        }

    })
    console.log({ to, from, next });

}

export default isAuthenticationGuard