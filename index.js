const section_node =  _.get('.section');
const button_node = _.get('.button',section_node);
const onClicking =()=> alert('i am alerting');
_.on(button_node,'click',onClicking,false);