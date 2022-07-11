class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Engenheiro') {
        {
            super(sobrenome)
            this.profissao = profissao
        }
    }
}

class Filho extends Pai {
    constructor() {
        super('Silveira')
    }
}

const filho = new Filho
console.log(filho)