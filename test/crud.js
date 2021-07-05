const Crud = artifacts.require('Crud');

contract('Crud', () => {
    let crud = null;
    // Before hook
    before(async () => {
        crud = await Crud.deployed();
    });

    // Testing read and create
    it('Should create a new movie', async () => {
        await crud.create('Matrix', 'Wachowski sisters', 1999);
        const movie = await crud.read(1);
        assert(movie[0].toNumber() === 1);
        assert(movie[1] === "Matrix");
        assert(movie[2] === "Wachowski sisters");
        assert(movie[3].toNumber() === 1999);
    });

    // Testing update
    it('Should uptate a movie', async () => {
        await crud.update(1, 'Matrix 2', '', 1500);
        const movie = await crud.read(1);
        assert(movie[0].toNumber() === 1);
        assert(movie[1] === "Matrix 2");
        assert(movie[2] === "");
        assert(movie[3].toNumber() === 1999);
    });

    // Testing find function
    it('Should throw error', async () => {
        try {
            await crud.update(2, 'Matrix 2', '', 1500);
        } catch (error) {
            assert(error.message.includes('Movie does not exist!'));
            return;
        }
        assert(false);
    });

    // Testing delete
    it('Should destroy movie', async () => {
        await crud.destroy(1);
        try {
            const movie = await crud.read(1);
        } catch(error) {
            assert(error.message.includes('Movie does not exist!'));

            return;
        }
        assert(false);
    })

    // Testo delete with non existing movie
    it('Should not destroy movie', async () => {
        try {
            await crud.destroy(23);
        } catch (error) {
            assert(error.message.includes('Movie does not exist!'));

            return;
        }
        assert(false);
    })
})