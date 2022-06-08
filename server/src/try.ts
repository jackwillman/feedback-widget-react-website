const sayMyName = (name : string) => name;

const init = () => console.log('its on');

interface PrettyInterface{
    sayMyName : (name : string) => string,
    init : () => void
}

const pretty : PrettyInterface = {
    sayMyName,
    init
};

export default pretty;
