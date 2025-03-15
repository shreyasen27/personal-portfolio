import MailchimpSubscribe from "react-mailchimp-subscribe";
import {Newsletter} from "./Newsletter.jsx";
export const MailchimpForm=()=>{
    const postUrl=`${import.meta.env.VITE_MAILCHIMP_URL}?u=${import.meta.env.VITE_MAILCHIMP_U}$id=${import.meta.env.VITE_MAILCHIMP_ID}`;
    return(
        <>
        <MailchimpSubscribe
        url={postUrl}
        render={({subscribe,status,message})=>(
            <Newsletter status={status}
            message={message}
            onValidated={formData=>subscribe(formData)}
        />
        )}
        />
        </>
    )
}