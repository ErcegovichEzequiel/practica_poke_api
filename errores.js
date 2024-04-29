class ErrorCustom {
    constructor(message, code) {
        this.message = message;
        this.code = code;
    };
};

const ERRORES = {
    POKEMON_NO_ENCONTRADO : new ErrorCustom(1, 'Pokemon no encontrado'),
    ERROR_INTERNO_DEL_SERVIDOR: new ErrorCustom(2, 'Error interno del servidor'),
    ERROR_POKEMON_CON_MUCHAS_HABILIDADES : new ErrorCustom(3, 'Error, pokemon con muchas habilidades'),
};

module.exports = ERRORES;