console.log('JS OK!');

/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/


const app = new Vue(
    {
        el: '#root',
        data: {
            emails: [],
        },

        mounted() {
            for (let i = 1; i <= 10; i++) {
                axios
                    .get(
                        'https://flynn.boolean.careers/exercises/api/random/mail'
                    )
                    .then((response) => {
                        const result = response.data;
                        console.log(result.response);
                        this.emails.push(result.response);
                    });
            };
            setTimeout(this.showEmailsLog, 1200);
        },

        methods: {
            showEmailsLog() {
                console.log(this.emails);
            }
        }
    }
)