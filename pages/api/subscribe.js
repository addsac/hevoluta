var Mailchimp = require('mailchimp-api-v3')

export default async function handler(req, res) {
    let {
        api_key,
        list_id,
        email,
    } = req.query

    if(!api_key || api_key.trim() == '') {
        res.status(500).json({ error: 'API Key is missing.' })
    }

    var mailchimp = new Mailchimp(api_key)
    
    if(!email || email.trim() == '') {
        res.status(500).json({ error: 'Email is missing.' })
    }

    const payload = {
        email_address: email,
        status: 'subscribed',
        merge_fields: {}
    };

    mailchimp
        .put(`/lists/${list_id}/members/${email}`, payload)
        .then(function (results) {
            console.log('results', results)
            /* return result */
            return res.status(200).json({ results })
        })
        .catch(async function (err) {
            console.log('err', err)
            
            /* return error */
            return res.status(500).json({ error: err })
        })
}
