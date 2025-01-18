// const localpath = 'http://localhost:3001/'
const localpath = 'https://react-ecommerce-backend-snowy.vercel.app/';

const api_paths = {

     register: `${localpath}signup`,
     login: `${localpath}login`,
     forgetpass: `${localpath}forgetpass`,
     otpverify: `${localpath}verify`,
     all_products: `${localpath}products/allproducts`,
     popularinwomen: `${localpath}products/popularinwomen`,
     newcollections: `${localpath}products/newcollections`,
     GetOtpTimer : `${localpath}GetOtpTimer`,
     UpdatePass : `${localpath}UpdatePass`,
     singleproduct : `${localpath}products`,
     addtocart : `${localpath}cart/addtocart`,
     removefromcart : `${localpath}cart/removefromcart`,
     getcartitem : `${localpath}cart/getcartitem`,

}

export default api_paths;