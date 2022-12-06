import styled from "./styled";

const CloseButton = function CloseButtonComponent() {
    return (
        <styled.CloseButton title="Fechar formulário de feedback">
            <styled.CloseButtonIcon weight="bold"/>
        </styled.CloseButton>
    );
};

export default CloseButton;