/**
 * Variables Globales
 * 
 */

const API_KEY = require('./src/secrets.js')
const DOMAIN = 'mg.meteoroglobal.cl';

const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: API_KEY});




class User{

    /**
     * Datos basicos de los usuarios */
    constructor({
        id,
        name,
        lastName,
        email,
        phone
    }){
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }
    

    async sendEmail() {
        // Se crea una fecha que puede ser util para supervisar el correcto funcionamiento
        const date = new Date;
        const dateCorregido = `${date.getHours()}:${date.getMinutes()} ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

        // crea tus variables aqui abajo

        const asunto = '';
        const dominio = '';
        const from = '';
        const tracking = 'True';
        //const deliveryTime = `14 May 2022 21:09:00 -0000`; // es la hora universal, verificar horario de invierno o verano

        const message = {
            from: `${from} <web@${dominio}>`,
            to: `${this.email}`, // despues cambiara  a contacto o equipo
            subject: asunto,
            html: `<html>
                        <body>
                            <div>
                                <h2>Titulo</h2>
                                <p></p>
                            </div>
                        </body>
                    </html>`,
            tracking: tracking
            // "o:deliverytime": deliveryTime

                
            
        };
        try {
            const response = await client.messages.create(DOMAIN, message );
            console.log(response);
        } catch(error){
            console.error(error);
        }
    }

}

