class formHandler {
    constructor(formId) {
        this.id = formId
        this.action = this.getForm().action;
        this.className = this.getForm().className;

    }
    getForm(){
        let form = document.getElementById(this.id);
        return form
    }
    getAttr() {
        return this
    }
}

function getFormAttributes(form) {


    if (form) {
        const attributesList = [];

        for (let i = 0; i < form.attributes.length; i++) {
            const attributeName = form.attributes[i].name;
            const attributeValue = form.attributes[i].value;
            attributesList.push({ name: attributeName, value: attributeValue });
        }

        return attributesList;
    } else {
        console.error('Formulário não encontrado com o ID:', form);
        return null;
    }
}

export default formHandler;