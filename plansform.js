import getFormHandler from './src/models/forms/getFormHandler.js'

const formHandler ={}

formHandler.handleFormGet= function(form_id,options={}){
return new getFormHandler(form_id,options);
}

export default formHandler;