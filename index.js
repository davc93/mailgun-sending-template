
const API_KEY = require('./src/secrets.js')
const DOMAIN = 'mg.meteoroglobal.cl';

const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: API_KEY});
// const deliveryTime = `14 May 2022 21:09:00 -0000`; // es la hora universal, verificar horario de invierno o verano
const tracking = 'True';


async function enviarCorreo(){

    const data = {
        from: 'Certificados web@meteoroglobal.cl',
        to: ['davc93@gmail.com', 'diego@meteoroglobal.cl'],
        subject: 'Se ha actualizado el certificado ssl para el sitio Doctor Casanova',
        html: `<html>
                    <body>
                        <div>
                            <h2>Actualizacion del sitio</h2>
                            <p>Se ha actualizado el sitio del Doctor casavano correctamente</p>
                        </div>
                    </body>
                </html>`,
        tracking
      };
     
    try {

        const correo = await client.messages.create(DOMAIN, data);
        console.log(correo);  
        
    }
    catch(error) {
        console.error(error);
    }
}

enviarCorreo();

