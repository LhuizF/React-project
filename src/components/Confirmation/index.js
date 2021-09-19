import React from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from './styled';

export default function Confirmation({
    isDisplay,
    handleCancelDelete,
    handleDelete,
    alunoId
}) {
    if (!isDisplay) return <></>;

    return (
        <Container>
            <div className="background">
                <div className="container">
                    <p>Tem certeza que deseja excluir este aluno?</p>
                    <div className="btn-container">
                        <button
                            type="button"
                            onClick={(e) => handleDelete(e, alunoId)}
                        >
                            Sim
                        </button>
                        <button type="button" onClick={handleCancelDelete}>
                            Não
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

Confirmation.defaultProps = {
    isDisplay: false,
    handleCancelDelete: false,
    handleDelete: false,
    alunoId: 0
};

Confirmation.propTypes = {
    isDisplay: PropTypes.bool,
    handleCancelDelete: PropTypes.func,
    handleDelete: PropTypes.func,
    alunoId: PropTypes.number
};
